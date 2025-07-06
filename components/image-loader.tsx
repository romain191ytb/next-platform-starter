"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageLoaderProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ImageLoader({ src, alt, width, height, className = "" }: ImageLoaderProps) {
  const [imageSrc, setImageSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setImageSrc(src)
    setIsLoading(true)
    setError(false)
  }, [src])

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-md">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-md">
          <p className="text-sm text-muted-foreground">Erreur de chargement</p>
        </div>
      )}

      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
      />
    </div>
  )
}
