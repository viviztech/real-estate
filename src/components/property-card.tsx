"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Bed, Bath, Square, MapPin, ArrowRight } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import { useState, useEffect } from "react"

interface PropertyCardProps {
  property: {
    id: string
    slug: string
    title: string
    price: number | string
    propertyType: string
    listingType: string
    bedrooms: number
    bathrooms: number
    area: number
    locality: string
    city: string
    images: string[]
    status: string
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  const imageUrl = property.images?.[0] || "/placeholder-property.jpg"
  const formattedPrice = formatPrice(property.price)
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setIsFavorited(favorites.includes(property.id))
  }, [property.id])

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    if (isFavorited) {
      const newFavorites = favorites.filter((id: string) => id !== property.id)
      localStorage.setItem("favorites", JSON.stringify(newFavorites))
      setIsFavorited(false)
    } else {
      favorites.push(property.id)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      setIsFavorited(true)
    }
  }

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-primary hover:bg-primary/90">
            {property.listingType === "SALE" ? "For Sale" : "For Rent"}
          </Badge>
          <Badge variant="secondary">
            {property.propertyType}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/90 hover:bg-white"
          onClick={handleFavorite}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
        </Button>
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Price */}
          <div className="flex items-baseline justify-between">
            <span className="text-xl font-bold text-primary">
              {formattedPrice}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            <Link href={`/property/${property.slug}`}>
              {property.title}
            </Link>
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="line-clamp-1">
              {property.locality}, {property.city}
            </span>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4 text-muted-foreground" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4 text-muted-foreground" />
              <span>{property.area} sqft</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
