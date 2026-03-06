import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Blog - Real Estate News & Tips in Pondicherry",
  description: "Read the latest real estate news, property buying tips, and market insights for Pondicherry.",
}

const blogPosts = [
  {
    slug: "best-areas-to-buy-property-in-pondicherry",
    title: "Best Areas to Buy Property in Pondicherry",
    excerpt: "Discover the top localities for property investment in Pondicherry, from premium White Town to affordable Lawspet.",
    date: "March 6, 2026",
    image: "https://images.unsplash.com/photo-1600596542815c1539a-ffad49?w=800"
  },
  {
    slug: "property-buying-guide-2024",
    title: "Complete Property Buying Guide 2024",
    excerpt: "Everything you need to know about buying your first home in Pondicherry - from legal checks to financing options.",
    date: "February 20, 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  },
  {
    slug: "pondicherry-real-estate-trends",
    title: "Pondicherry Real Estate Market Trends 2024",
    excerpt: "An analysis of property prices, demand, and future outlook for Pondicherry real estate market.",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
  },
  {
    slug: "renting-vs-buying-in-pondicherry",
    title: "Renting vs Buying: What's Better in Pondicherry?",
    excerpt: "Compare the pros and cons of renting versus buying property in Pondicherry.",
    date: "January 28, 2026",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Real Estate Blog</h1>
          <p className="text-muted-foreground">
            News, tips, and insights about Pondicherry real estate
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h2 className="font-semibold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
