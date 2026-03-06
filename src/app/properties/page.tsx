import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PropertyCard } from "@/components/property-card"
import { PropertyFilters } from "./property-filters"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal, MapPin, Grid, List } from "lucide-react"

export const metadata: Metadata = {
  title: "Properties in Pondicherry - Buy & Rent Flats, Villas, Houses",
  description: "Browse 500+ properties in Pondicherry. Find flats, villas, apartments for sale and rent. Filter by price, location, bedrooms and more.",
}

const properties = [
  {
    id: "1",
    slug: "luxury-villa-white-town",
    title: "Luxury 3BHK Villa in White Town",
    price: 8500000,
    propertyType: "VILLA",
    listingType: "SALE",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    locality: "White Town",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"],
    status: "ACTIVE"
  },
  {
    id: "2",
    slug: "modern-apartment-anna-nagar",
    title: "Modern 2BHK Apartment in Anna Nagar",
    price: 4500000,
    propertyType: "APARTMENT",
    listingType: "SALE",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    locality: "Anna Nagar",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"],
    status: "ACTIVE"
  },
  {
    id: "3",
    slug: "beachside-house-beach-road",
    title: "Beachside 4BHK House for Sale",
    price: 12000000,
    propertyType: "HOUSE",
    listingType: "SALE",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    locality: "Beach Road",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"],
    status: "ACTIVE"
  },
  {
    id: "4",
    slug: "cozy-flat-lawspet",
    title: "Cozy 1BHK Flat in Lawspet",
    price: 2500000,
    propertyType: "FLAT",
    listingType: "SALE",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    locality: "Lawspet",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"],
    status: "ACTIVE"
  },
  {
    id: "5",
    slug: "spacious-villa-reddiarpalayam",
    title: "Spacious 4BHK Villa in Reddiarpalayam",
    price: 9500000,
    propertyType: "VILLA",
    listingType: "SALE",
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    locality: "Reddiarpalayam",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"],
    status: "ACTIVE"
  },
  {
    id: "6",
    slug: "renovated-apartment-muthialpet",
    title: "Renovated 2BHK Apartment",
    price: 3800000,
    propertyType: "APARTMENT",
    listingType: "SALE",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    locality: "Muthialpet",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800"],
    status: "ACTIVE"
  },
]

const propertyTypes = ["All", "Apartment", "Villa", "House", "Flat", "Penthouse"]
const localities = ["All Localities", "White Town", "Anna Nagar", "Beach Road", "Lawspet", "Muthialpet", "Reddiarpalayam"]

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-4">Properties in Pondicherry</h1>
          
          {/* Search & Filters */}
          <PropertyFilters />
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing <strong>{properties.length}</strong> properties in Pondicherry
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
  )
}
