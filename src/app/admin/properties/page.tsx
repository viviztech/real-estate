import { Metadata } from "next"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Users, MessageSquare, FileText, Settings, Plus, Eye, Edit, Trash2, Check, X } from "lucide-react"
import { formatPrice } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Manage Properties - Landliya Admin",
  description: "Admin - Manage Properties",
}

export default async function AdminPropertiesPage() {
  // Fetch properties from database
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true }
  })

  const totalProperties = properties.length
  const activeProperties = properties.filter((p: { status: string }) => p.status === 'ACTIVE').length
  const pendingProperties = properties.filter((p: { status: string }) => p.status === 'PENDING').length
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Manage Properties</h1>
              <p className="text-muted-foreground">View and manage all property listings</p>
            </div>
            <Button asChild>
              <Link href="/properties/add">
                <Plus className="h-4 w-4 mr-2" />
                Add Property
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-3xl font-bold">{totalProperties}</p>
                </div>
                <Home className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active</p>
                  <p className="text-3xl font-bold text-green-600">{activeProperties}</p>
                </div>
                <Check className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-3xl font-bold text-yellow-600">{pendingProperties}</p>
                </div>
                <X className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Property</th>
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Posted By</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property: { id: string; title: string; slug: string; propertyType: string; listingType: string; price: number; status: string; user: { email: string } | null; createdAt: Date | null }) => (
                    <tr key={property.id} className="border-b">
                      <td className="py-3 px-4">
                        <Link href={`/property/${property.slug}`} className="font-medium hover:text-primary">
                          {property.title}
                        </Link>
                      </td>
                      <td className="py-3 px-4">{property.propertyType}</td>
                      <td className="py-3 px-4">₹{formatPrice(property.price)}</td>
                      <td className="py-3 px-4">
                        <Badge variant={property.status === "ACTIVE" ? "default" : "secondary"}>
                          {property.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{property.user?.email || 'N/A'}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{property.createdAt ? new Date(property.createdAt).toLocaleDateString() : 'N/A'}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/property/${property.slug}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
