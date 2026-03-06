import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Landliya Property Platform",
  description: "Learn about Landliya - Pondicherry's premier property platform connecting buyers and sellers.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Landliya</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your trusted partner in finding the perfect property in Pondicherry
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            Landliya is dedicated to making property transactions in Pondicherry seamless and transparent. 
            We connect buyers with their dream homes and help sellers reach qualified buyers through our 
            modern, technology-driven platform.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-muted-foreground">Properties Listed</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="text-3xl font-bold">200+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-muted-foreground">Partner Agents</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <p className="text-3xl font-bold">6</p>
              <p className="text-muted-foreground">Localities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">Why Choose Landliya?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Verified Listings</h3>
              <p className="text-sm text-muted-foreground">
                All properties on our platform are verified to ensure authenticity
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">
                Our team of real estate experts is always ready to help you
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Best Deals</h3>
              <p className="text-sm text-muted-foreground">
                We help you find the best property deals in Pondicherry
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="opacity-90 mb-8">
            Contact us today and let us help you find the perfect property
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
