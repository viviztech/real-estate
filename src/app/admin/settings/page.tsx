import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings, Globe, Mail, Bell, Search, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Site Settings - Landliya Admin",
  description: "Admin - Site Settings",
}

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Site Settings</h1>
          <p className="text-muted-foreground">Configure your website settings</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 space-y-6">
          {/* General Settings */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>Basic site information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="Landliya" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-email">Contact Email</Label>
                  <Input id="site-email" type="email" defaultValue="info@landliya.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-phone">Contact Phone</Label>
                  <Input id="site-phone" defaultValue="+91 XXXXX XXXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-city">Default City</Label>
                  <Input id="site-city" defaultValue="Pondicherry" />
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                SEO Settings
              </CardTitle>
              <CardDescription>Search engine optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Default Meta Title</Label>
                <Input id="meta-title" defaultValue="Landliya - Property in Pondicherry" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta-desc">Default Meta Description</Label>
                <textarea 
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="meta-desc"
                  defaultValue="Find your dream property in Pondicherry. Landliya is the premier property platform in Pondicherry."
                />
              </div>
              <Button>Save SEO</Button>
            </CardContent>
          </Card>

          {/* Email Settings */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Settings
              </CardTitle>
              <CardDescription>Configure email notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-from">From Email</Label>
                <Input id="email-from" type="email" defaultValue="noreply@landliya.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-name">From Name</Label>
                <Input id="email-name" defaultValue="Landliya" />
              </div>
              <Button>Save Email Settings</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>Manage notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">New Inquiry Email</p>
                  <p className="text-xs text-muted-foreground">Email when new inquiry</p>
                </div>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">New User Email</p>
                  <p className="text-xs text-muted-foreground">Email when new user registers</p>
                </div>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">New Property Email</p>
                  <p className="text-xs text-muted-foreground">Email when new property listed</p>
                </div>
                <input type="checkbox" className="toggle" />
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Your social media presence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input id="facebook" defaultValue="https://facebook.com/landliya.properties" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input id="instagram" placeholder="https://instagram.com/..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input id="twitter" placeholder="https://twitter.com/..." />
                </div>
              </div>
              <Button className="mt-4">Save Social Links</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
