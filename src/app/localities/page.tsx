import Link from "next/link"
import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Popular Localities in Pondicherry - Find Properties Near You",
  description: "Explore top localities in Pondicherry for buying or renting properties. Compare prices, amenities, and property options in White Town, Anna Nagar, Beach Road, and more.",
}

const localities = [
  {
    name: "White Town",
    slug: "white-town",
    description: "The French Quarter - premium colonial properties, heritage homes, and beach-facing apartments.",
    propertyCount: 45,
    avgPrice: "₹75 Lakhs",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  },
  {
    name: "Anna Nagar",
    slug: "anna-nagar",
    description: "Modern residential area with apartments, villas, and good connectivity to the city center.",
    propertyCount: 78,
    avgPrice: "₹55 Lakhs",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    name: "Beach Road",
    slug: "beach-road",
    description: "Coastal properties with sea views, ideal for vacation homes and luxury living.",
    propertyCount: 32,
    avgPrice: "₹1.2 Crore",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  },
  {
    name: "Lawspet",
    slug: "lawspet",
    description: "Popular among IT professionals, affordable apartments and independent houses.",
    propertyCount: 56,
    avgPrice: "₹42 Lakhs",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  },
  {
    name: "Muthialpet",
    slug: "muthialpet",
    description: "Budget-friendly properties, close to markets and basic amenities.",
    propertyCount: 41,
    avgPrice: "₹35 Lakhs",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
  },
  {
    name: "Reddiarpalayam",
    slug: "reddiarpalayam",
    description: "Quiet residential area with spacious homes and good infrastructure.",
    propertyCount: 29,
    avgPrice: "₹60 Lakhs",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
  },
]

export default function LocalitiesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Localities in Pondicherry</h1>
          <p className="text-muted-foreground">
            Explore properties in the most popular areas of Pondicherry
          </p>
        </div>
      </div>

      {/* Localities Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localities.map((locality) => (
            <Link key={locality.slug} href={`/localities/${locality.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={locality.image}
                    alt={locality.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{locality.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    {locality.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span>{locality.propertyCount} properties</span>
                    </div>
                    <div className="text-primary font-semibold">
                      {locality.avgPrice}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
