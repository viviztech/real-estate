import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, Share2, Bed, Bath, Square, MapPin, Calendar, 
  Building, Car, Wifi, Trees, Shield, ArrowLeft, Phone, Mail
} from "lucide-react"
import { formatPrice } from "@/lib/utils"
import { PropertyActions } from "@/components/property-actions"

// Sample property data (will be fetched from database)
const propertyData: Record<string, any> = {
  "luxury-villa-white-town": {
    id: "1",
    title: "Luxury 3BHK Villa in White Town",
    slug: "luxury-villa-white-town",
    price: 8500000,
    propertyType: "VILLA",
    listingType: "SALE",
    bedrooms: 3,
    bathrooms: 3,
    floor: 2,
    totalFloors: 2,
    area: 2200,
    locality: "White Town",
    city: "Pondicherry",
    address: "12, Rue de la Marine, White Town",
    yearBuilt: 2020,
    facing: "East",
    amenities: ["Car Parking", "WiFi", "Garden", "Security"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
    ],
    description: "This stunning luxury villa is located in the heart of White Town, Pondicherry's most prestigious area. Perfect for families seeking a blend of modern comfort and colonial charm.",
    aiDescription: "Experience luxury living at its finest in this beautifully designed 3BHK villa situated in the iconic White Town area of Pondicherry. This property offers an exceptional combination of modern amenities and proximity to beaches, cafes, and the French Quarter. With spacious bedrooms, modern bathrooms, and a well-maintained garden, this villa is perfect for those seeking a premium lifestyle in the Union Territory.",
    status: "ACTIVE"
  }
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(propertyData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const property = propertyData[slug]
  
  if (!property) {
    return {
      title: "Property Not Found",
    }
  }
  
  return {
    title: `${property.title} | Landliya`,
    description: property.aiDescription || property.description,
    openGraph: {
      title: property.title,
      description: property.aiDescription || property.description,
      images: property.images,
    },
  }
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params
  const property = propertyData[slug]
  
  if (!property) {
    notFound()
  }

  const formattedPrice = formatPrice(property.price)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/properties" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Properties
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image: string, index: number) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${property.title} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex gap-2 mb-2">
                    <Badge className="bg-primary">
                      {property.listingType === "SALE" ? "For Sale" : "For Rent"}
                    </Badge>
                    <Badge variant="secondary">
                      {property.propertyType}
                    </Badge>
                  </div>
                  <h1 className="text-2xl font-bold">{property.title}</h1>
                </div>
                <div className="flex gap-2">
                  <PropertyActions property={property} />
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{property.address}, {property.locality}, {property.city}</span>
              </div>
              
              <div className="text-3xl font-bold text-primary">
                {formattedPrice}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Bed className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Bath className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Square className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{property.area}</p>
                    <p className="text-sm text-muted-foreground">Sq Ft</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{property.yearBuilt}</p>
                    <p className="text-sm text-muted-foreground">Year Built</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {property.aiDescription || property.description}
              </p>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between p-3 bg-slate-50 rounded">
                  <span className="text-muted-foreground">Property Type</span>
                  <span className="font-medium">{property.propertyType}</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded">
                  <span className="text-muted-foreground">Floor</span>
                  <span className="font-medium">{property.floor} of {property.totalFloors}</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded">
                  <span className="text-muted-foreground">Facing</span>
                  <span className="font-medium">{property.facing}</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded">
                  <span className="text-muted-foreground">Area</span>
                  <span className="font-medium">{property.area} sq ft</span>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity: string) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Interested in this property?</h3>
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Posted by Property Owner
                </p>
              </CardContent>
            </Card>

            {/* Similar Properties */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Link 
                    key={i} 
                    href="/property/modern-apartment-anna-nagar"
                    className="flex gap-3 group"
                  >
                    <div className="w-20 h-16 rounded overflow-hidden bg-slate-200 shrink-0">
                      <img 
                        src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200`}
                        alt="Similar property"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm line-clamp-1 group-hover:text-primary">
                        Modern 2BHK in Anna Nagar
                      </p>
                      <p className="text-primary font-semibold">₹45,00,000</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
