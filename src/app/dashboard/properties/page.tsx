import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { Home, Plus, Edit, Trash2, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "My Properties - Landliya",
  description: "Manage your property listings",
}

const myProperties = [
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

export default function MyPropertiesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">My Properties</h1>
              <p className="text-muted-foreground">Manage your property listings</p>
            </div>
            <Button asChild>
              <Link href="/properties/add">
                <Plus className="h-4 w-4 mr-2" />
                Add New Property
              </Link>
            </Button>
          </div>
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
                  <Link href="/dashboard/properties" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary">
                    <Home className="h-4 w-4" />
                    <span className="text-sm font-medium">My Properties</span>
                  </Link>
                  <Link href="/dashboard/favorites" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <Home className="h-4 w-4" />
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
                <CardTitle>All Properties ({myProperties.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myProperties.map((property) => (
                    <div key={property.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-16 bg-slate-200 rounded-md overflow-hidden">
                          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium">{property.title}</h3>
                          <p className="text-sm text-muted-foreground">{property.locality}, {property.city}</p>
                          <p className="text-sm font-medium">₹{property.price.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/property/${property.slug}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
