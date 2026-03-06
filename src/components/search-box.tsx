"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function SearchBox() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/properties?search=${encodeURIComponent(query)}`)
    } else {
      router.push("/properties")
    }
  }

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-lg p-2 shadow-xl max-w-2xl">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search locality, area, or property name..."
            className="pl-10 h-12 border-0 focus-visible:ring-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Button type="submit" size="lg" className="h-12 px-8">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
    </form>
  )
}
