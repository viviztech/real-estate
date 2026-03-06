import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowLeft } from "lucide-react"

// Sample locality data - in production, fetch from database
const localities: Record<string, { name: string; description: string; properties: any[] }> = {
  "white-town": {
    name: "White Town",
    description: "White Town is the oldest and most iconic neighborhood in Pondicherry, known for its colonial architecture, French Quarter, and vibrant culture. Located along the promenade beach, it offers a unique blend of Indian and French heritage.",
    properties: [
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
      }
    ]
  },
  "anna-nagar": {
    name: "Anna Nagar",
    description: "Anna Nagar is a prime residential area in Pondicherry, known for its well-planned layout, modern amenities, and proximity to schools, hospitals, and shopping centers. It's a popular choice for families and professionals.",
    properties: []
  },
  "beach-road": {
    name: "Beach Road",
    description: "Beach Road runs along the beautiful Bay of Bengal, offering stunning sea views and access to the famous Promenade Beach. Properties here are highly sought after for their location and lifestyle amenities.",
    properties: []
  },
  "lawspet": {
    name: "Lawspet",
    description: "Lawspet is a peaceful residential neighborhood in Pondicherry, known for its quiet atmosphere and good connectivity to the city center. It's ideal for those seeking a calm living environment.",
    properties: []
  }
}

export async function generateStaticParams() {
  return Object.keys(localities).map((slug) => ({
    slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function LocalityPage({ params }: PageProps) {
  const { slug } = await params
  const locality = localities[slug]
  
  if (!locality) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Locality Not Found</h1>
          <Button asChild>
            <Link href="/localities">Browse All Localities</Link>
          </Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#1e3a5f]/80 text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/localities" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Localities
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <MapPin className="inline h-8 w-8 mr-2" />
            {locality.name}
          </h1>
          <p className="text-white/90 max-w-2xl">{locality.description}</p>
        </div>
      </div>

      {/* Properties Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            Properties in {locality.name}
          </h2>
          <p className="text-muted-foreground">
            {locality.properties.length} {locality.properties.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>
        
        {locality.properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locality.properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Properties Yet</h3>
              <p className="text-muted-foreground mb-4">
                There are no properties listed in {locality.name} yet.
              </p>
              <Button asChild>
                <Link href="/properties/add">Post a Property</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
