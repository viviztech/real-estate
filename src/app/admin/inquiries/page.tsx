import { Metadata } from "next"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Mail, Phone, Eye, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Manage Inquiries - Landliya Admin",
  description: "Admin - Manage Inquiries",
}

export default async function AdminInquiriesPage() {
  // Fetch inquiries from database
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      property: {
        select: { id: true, title: true, slug: true }
      },
      user: {
        select: { name: true, email: true, phone: true }
      }
    }
  })

  // Add guest fields to the type
  const inquiriesWithGuest = inquiries.map((inquiry: any) => ({
    ...inquiry,
    guestName: (inquiry as any).guestName,
    guestEmail: (inquiry as any).guestEmail,
    guestPhone: (inquiry as any).guestPhone,
  }))

  const totalInquiries = inquiries.length
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Manage Inquiries</h1>
          <p className="text-muted-foreground">View and manage all property inquiries</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Inquiries</p>
                  <p className="text-3xl font-bold">{totalInquiries}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inquiriesWithGuest.map((inquiry: any) => (
                <div key={inquiry.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{inquiry.user?.name || inquiry.guestName || 'Guest'}</h3>
                      <p className="text-sm text-muted-foreground">{inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleDateString() : 'N/A'}</p>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {inquiry.status}
                    </span>
                  </div>
                  <p className="text-sm bg-slate-50 p-3 rounded">{inquiry.message}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {inquiry.user?.email || inquiry.guestEmail || 'N/A'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {inquiry.user?.phone || inquiry.guestPhone || 'N/A'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/property/${inquiry.property.slug}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        View Property
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
