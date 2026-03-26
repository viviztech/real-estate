export const dynamic = "force-dynamic";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { SearchBox } from "@/components/search-box"
import { MapPin, TrendingUp, Shield, Users, ArrowRight, Building2, Home, Castle } from "lucide-react"

// Sample featured properties (will be replaced with database data)
const featuredProperties = [
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
  },
  {
    id: "2",
    slug: "modern-apartment-anna-nagar",
    title: "Modern 2BHK Apartment in Anna Nagar",
    price: 4500000,
    propertyType: "APARTMENT",
    listingType: "SALE",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    locality: "Anna Nagar",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"],
    status: "ACTIVE"
  },
  {
    id: "3",
    slug: "beachside-house-beach-road",
    title: "Beachside 4BHK House for Sale",
    price: 12000000,
    propertyType: "HOUSE",
    listingType: "SALE",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    locality: "Beach Road",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"],
    status: "ACTIVE"
  },
  {
    id: "4",
    slug: "cozy-flat-lawspet",
    title: "Cozy 1BHK Flat in Lawspet",
    price: 2500000,
    propertyType: "FLAT",
    listingType: "SALE",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    locality: "Lawspet",
    city: "Pondicherry",
    images: ["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"],
    status: "ACTIVE"
  },
]

const localities = [
  { name: "White Town", slug: "white-town", count: 45 },
  { name: "Anna Nagar", slug: "anna-nagar", count: 78 },
  { name: "Beach Road", slug: "beach-road", count: 32 },
  { name: "Lawspet", slug: "lawspet", count: 56 },
  { name: "Muthialpet", slug: "muthialpet", count: 41 },
  { name: "Reddiarpalayam", slug: "reddiarpalayam", count: 29 },
]

const features = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "All listings are verified by our team"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Get real-time property price trends"
  },
  {
    icon: Users,
    title: "Expert Agents",
    description: "Connect with trusted local agents"
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
            alt="Pondicherry Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Find Your Dream Property in Pondicherry
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Discover the best flats, villas, and houses for sale in Pondicherry. 
              Connect with verified owners and agents.
            </p>

            {/* Search Box */}
            <SearchBox />

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="secondary" asChild>
                <Link href="/properties?type=apartment">Apartments</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/properties?type=villa">Villas</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/properties?type=house">Houses</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/properties?type=flat">Flats</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Properties</h2>
              <p className="text-muted-foreground mt-1">
                Handpicked properties just for you
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/properties">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Browse by Property Type</h2>
            <p className="text-muted-foreground mt-2">
              Find your perfect property type in Pondicherry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: "Apartments", count: "120+", slug: "apartment" },
              { icon: Castle, label: "Villas", count: "45+", slug: "villa" },
              { icon: Home, label: "Houses", count: "80+", slug: "house" },
              { icon: Building2, label: "Flats", count: "65+", slug: "flat" },
            ].map((type) => (
              <Link
                key={type.slug}
                href={`/properties?type=${type.slug}`}
                className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-all hover:border-primary"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <type.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">{type.label}</h3>
                <p className="text-sm text-muted-foreground">{type.count} listings</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Localities */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Popular Localities</h2>
              <p className="text-muted-foreground mt-1">
                Explore properties in top areas of Pondicherry
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/localities">
                All Localities
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {localities.map((locality) => (
              <Link
                key={locality.slug}
                href={`/localities/${locality.slug}`}
                className="p-4 rounded-lg border bg-white hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-medium">{locality.name}</h3>
                <p className="text-sm text-muted-foreground">{locality.count} properties</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Landliya</h2>
            <p className="text-muted-foreground mt-2">
              We make property search simple and secure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Sell Your Property?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            List your property on Landliya and reach thousands of potential buyers in Pondicherry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/properties/add">Post Property Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
