"use client"

import type React from "react"

import { useState, useRef } from "react"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageLoader from "@/components/image-loader"
import { Upload, ImageIcon, LinkIcon, Info } from "lucide-react"

export default function UploadExamplePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageUrl, setImageUrl] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          setSelectedImage(event.target.result)
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-primary">Guide de Chargement d'Images</h1>
            <Separator className="mb-6" />

            <Tabs defaultValue="local" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="local">Fichiers Locaux</TabsTrigger>
                <TabsTrigger value="url">URL d'Image</TabsTrigger>
                <TabsTrigger value="hosting">Services d'Hébergement</TabsTrigger>
              </TabsList>

              <TabsContent value="local" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5 text-primary" />
                      Télécharger une Image Locale
                    </CardTitle>
                    <CardDescription>Téléchargez une image depuis votre appareil pour la prévisualiser</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                      <Button onClick={triggerFileInput}>
                        <Upload className="mr-2 h-4 w-4" /> Sélectionner une Image
                      </Button>

                      {selectedImage && (
                        <div className="mt-4 border rounded-lg p-4 w-full">
                          <h3 className="font-medium mb-2">Aperçu de l'Image</h3>
                          <div className="flex justify-center">
                            <img
                              src={selectedImage || "/placeholder.svg"}
                              alt="Aperçu"
                              className="max-w-full max-h-[300px] rounded-md"
                            />
                          </div>
                        </div>
                      )}

                      <div className="mt-4 bg-muted/20 p-4 rounded-md w-full">
                        <h3 className="font-medium mb-2 flex items-center gap-2">
                          <Info className="h-4 w-4 text-primary" /> Comment ajouter des images à votre site
                        </h3>
                        <ol className="space-y-2 text-sm list-decimal pl-5">
                          <li>
                            Placez vos images dans le dossier{" "}
                            <code className="bg-muted px-1 py-0.5 rounded">public</code> de votre projet Next.js
                          </li>
                          <li>
                            Référencez-les dans votre code en utilisant le chemin relatif à partir de{" "}
                            <code className="bg-muted px-1 py-0.5 rounded">public</code>
                          </li>
                          <li>
                            Exemple: une image{" "}
                            <code className="bg-muted px-1 py-0.5 rounded">public/images/logo.png</code> sera référencée
                            comme <code className="bg-muted px-1 py-0.5 rounded">/images/logo.png</code>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="url" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LinkIcon className="h-5 w-5 text-primary" />
                      Utiliser une URL d'Image
                    </CardTitle>
                    <CardDescription>Utilisez une image déjà hébergée en ligne en fournissant son URL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Entrez l'URL de l'image"
                          className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <Button onClick={() => setSelectedImage(imageUrl)}>Charger</Button>
                      </div>

                      {selectedImage && imageUrl && (
                        <div className="mt-4 border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Aperçu de l'Image</h3>
                          <div className="flex justify-center">
                            <ImageLoader
                              src={selectedImage || "/placeholder.svg"}
                              alt="Image depuis URL"
                              width={400}
                              height={300}
                              className="max-w-full max-h-[300px] rounded-md object-contain"
                            />
                          </div>
                        </div>
                      )}

                      <div className="mt-4 bg-muted/20 p-4 rounded-md">
                        <h3 className="font-medium mb-2 flex items-center gap-2">
                          <Info className="h-4 w-4 text-primary" /> Utilisation d'URLs d'images
                        </h3>
                        <ul className="space-y-2 text-sm list-disc pl-5">
                          <li>
                            Assurez-vous que l'URL pointe directement vers un fichier image (se terminant généralement
                            par .jpg, .png, .gif, etc.)
                          </li>
                          <li>Vérifiez que le site hébergeant l'image autorise l'utilisation externe (CORS)</li>
                          <li>
                            Pour une meilleure performance, envisagez d'héberger les images sur votre propre serveur ou
                            un service dédié
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hosting" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ImageIcon className="h-5 w-5 text-primary" />
                      Services d'Hébergement d'Images
                    </CardTitle>
                    <CardDescription>Découvrez des services pour héberger vos images en ligne</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Cloudinary</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Service complet avec transformation d'images, optimisation et CDN.
                          </p>
                          <a
                            href="https://cloudinary.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm hover:underline"
                          >
                            Visiter Cloudinary
                          </a>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Imgur</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Service gratuit populaire pour l'hébergement d'images.
                          </p>
                          <a
                            href="https://imgur.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm hover:underline"
                          >
                            Visiter Imgur
                          </a>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">ImgBB</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Hébergement d'images simple et gratuit avec des liens directs.
                          </p>
                          <a
                            href="https://imgbb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm hover:underline"
                          >
                            Visiter ImgBB
                          </a>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Vercel Blob</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Solution intégrée pour les projets hébergés sur Vercel.
                          </p>
                          <a
                            href="https://vercel.com/docs/storage/vercel-blob"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm hover:underline"
                          >
                            En savoir plus sur Vercel Blob
                          </a>
                        </div>
                      </div>

                      <div className="bg-muted/20 p-4 rounded-md">
                        <h3 className="font-medium mb-2 flex items-center gap-2">
                          <Info className="h-4 w-4 text-primary" /> Processus général
                        </h3>
                        <ol className="space-y-2 text-sm list-decimal pl-5">
                          <li>Créez un compte sur le service d'hébergement de votre choix</li>
                          <li>Téléchargez vos images sur le service</li>
                          <li>Obtenez l'URL de l'image hébergée</li>
                          <li>Utilisez cette URL dans votre code avec le composant Image de Next.js</li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
