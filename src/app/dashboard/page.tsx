import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { Home, Heart, Plus, MessageSquare, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard - Landliya",
  description: "Manage your properties and favorites",
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

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">My Dashboard</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary">
                    <Home className="h-4 w-4" />
                    <span className="text-sm font-medium">Overview</span>
                  </Link>
                  <Link href="/dashboard/properties" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <Home className="h-4 w-4" />
                    <span className="text-sm font-medium">My Properties</span>
                  </Link>
                  <Link href="/dashboard/favorites" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm font-medium">Saved Properties</span>
                  </Link>
                  <Link href="/dashboard/inquiries" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm font-medium">Inquiries</span>
                  </Link>
                  <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <Settings className="h-4 w-4" />
                    <span className="text-sm font-medium">Settings</span>
                  </Link>
                </nav>
              </CardContent>
            </Card>

            <Button className="w-full" asChild>
              <Link href="/properties/add">
                <Plus className="h-4 w-4 mr-2" />
                Post Property
              </Link>
            </Button>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">1</p>
                      <p className="text-sm text-muted-foreground">Active Listings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">5</p>
                      <p className="text-sm text-muted-foreground">Saved Properties</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-muted-foreground">Total Inquiries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Properties */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>My Properties</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard/properties">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
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
