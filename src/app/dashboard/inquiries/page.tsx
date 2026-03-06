import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, MessageSquare, Eye, Mail, Phone, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Inquiries - Landliya",
  description: "Your property inquiries",
}

const inquiries = [
  {
    id: "1",
    propertyId: "1",
    propertyTitle: "Luxury 3BHK Villa in White Town",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+91 98765 43210",
    message: "I'm interested in this property. Is it still available?",
    date: "2024-01-15"
  },
  {
    id: "2",
    propertyId: "1",
    propertyTitle: "Luxury 3BHK Villa in White Town",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+91 87654 32109",
    message: "Can I schedule a visit this weekend?",
    date: "2024-01-14"
  }
]

export default function InquiriesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Inquiries</h1>
          <p className="text-muted-foreground">Messages from potential buyers/renters</p>
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
                  <Link href="/dashboard/favorites" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm font-medium">Saved Properties</span>
                  </Link>
                  <Link href="/dashboard/inquiries" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary">
                    <MessageSquare className="h-4 w-4" />
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
                <CardTitle>All Inquiries ({inquiries.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {inquiries.length > 0 ? (
                  <div className="space-y-4">
                    {inquiries.map((inquiry) => (
                      <div key={inquiry.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">{inquiry.name}</h3>
                            <p className="text-sm text-muted-foreground">{inquiry.date}</p>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/property/luxury-villa-white-town`}>
                              <Eye className="h-4 w-4 mr-1" />
                              View Property
                            </Link>
                          </Button>
                        </div>
                        <p className="text-sm bg-slate-50 p-3 rounded">{inquiry.message}</p>
                        <div className="flex gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {inquiry.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            {inquiry.phone}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No inquiries yet</p>
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
