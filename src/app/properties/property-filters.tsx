"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Grid, List } from "lucide-react"

const propertyTypes = ["All", "Apartment", "Villa", "House", "Flat", "Penthouse"]
const localities = ["All Localities", "White Town", "Anna Nagar", "Beach Road", "Lawspet", "Muthialpet", "Reddiarpalayam"]

export function PropertyFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [type, setType] = useState(searchParams.get("type") || "all")
  const [locality, setLocality] = useState(searchParams.get("locality") || "all")
  const [price, setPrice] = useState(searchParams.get("price") || "all")
  const [sort, setSort] = useState(searchParams.get("sort") || "newest")

  useEffect(() => {
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (type !== "all") params.set("type", type)
    if (locality !== "all") params.set("locality", locality)
    if (price !== "all") params.set("price", price)
    if (sort !== "newest") params.set("sort", sort)
    
    router.replace(`/properties?${params.toString()}`, { scroll: false })
  }, [search, type, locality, price, sort, router])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Already handled by useEffect
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <form onSubmit={handleSearch} className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search properties..."
          className="pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      
      <div className="flex flex-wrap gap-2">
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            {propertyTypes.map((pType) => (
              <SelectItem key={pType} value={pType.toLowerCase()}>
                {pType}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={locality} onValueChange={setLocality}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Locality" />
          </SelectTrigger>
          <SelectContent>
            {localities.map((loc) => (
              <SelectItem key={loc} value={loc.toLowerCase().replace(/ /g, "-")}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={price} onValueChange={setPrice}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-3000000">Under 30 Lakhs</SelectItem>
            <SelectItem value="3000000-5000000">30-50 Lakhs</SelectItem>
            <SelectItem value="5000000-10000000">50 Lakhs - 1 Crore</SelectItem>
            <SelectItem value="10000000-">Above 1 Crore</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
