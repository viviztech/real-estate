import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { Home, Heart, Trash2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Saved Properties - Landliya",
  description: "Your saved/favorited properties",
}

const savedProperties = [
  {
    id: "2",
    slug: "modern-apartment-mg-road",
    title: "Modern 2BHK Apartment near MG Road",
    price: 4500000,
    propertyType: "APARTMENT",
    listingType: "SALE",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    locality: "MG Road",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"],
    status: "ACTIVE"
  },
  {
    id: "3",
    slug: "beachfront-villa",
    title: "Beachfront 4BHK Villa",
    price: 12000000,
    propertyType: "VILLA",
    listingType: "SALE",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    locality: "Beach Road",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
    status: "ACTIVE"
  }
]

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Saved Properties</h1>
          <p className="text-muted-foreground">Properties you've saved for later</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <Home className="h-4 w-4" />
                    <span className="text-sm font-medium">Overview</span>
                  </Link>
                  <Link href="/dashboard/properties" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <Home className="h-4 w-4" />
                    <span className="text-sm font-medium">My Properties</span>
                  </Link>
                  <Link href="/dashboard/favorites" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm font-medium">Saved Properties</span>
                  </Link>
                  <Link href="/dashboard/inquiries" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <Home className="h-4 w-4" />
                    <span className="text-sm font-medium">Inquiries</span>
                  </Link>
                  <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <Home className="h-4 w-4" />
                    <span className="text-sm font-medium">Settings</span>
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Properties ({savedProperties.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {savedProperties.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedProperties.map((property) => (
                      <div key={property.id} className="relative border rounded-lg overflow-hidden">
                        <PropertyCard property={property} />
                        <div className="absolute top-2 right-2">
                          <Button variant="secondary" size="icon" className="h-8 w-8">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No saved properties yet</p>
                    <Button className="mt-4" asChild>
                      <Link href="/properties">Browse Properties</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
