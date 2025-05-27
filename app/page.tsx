import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import CategorySection from "@/components/category-section"
import RulesSection from "@/components/rules-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <RulesSection />
          <CategorySection />
        </main>
      </div>
    </div>
  )
}
