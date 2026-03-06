import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

// Sample blog data - in production, fetch from database
const blogs: Record<string, { title: string; content: string; author: string; date: string; category: string; image: string }> = {
  "best-areas-to-buy-property-in-pondicherry": {
    title: "Best Areas to Buy Property in Pondicherry",
    content: `Pondicherry, also known as Puducherry, is a beautiful Union Territory in Tamil Nadu that has become a hotspot for real estate investment. Whether you're looking for a serene beachfront villa or a modern apartment in a bustling neighborhood, Pondicherry has something for everyone.

## Why Invest in Pondicherry?

Pondicherry offers a unique blend of French colonial heritage and modern Indian culture. The city's real estate market has been growing steadily, making it an attractive destination for property investors.

### Top Areas for Property Investment:

1. **White Town** - The heart of Pondicherry's French Quarter
2. **Anna Nagar** - Modern residential area with excellent amenities
3. **Beach Road** - Premium seafront properties
4. **Lawspet** - Peaceful residential neighborhood
5. **MG Road** - Commercial hub with great connectivity

## Tips for Buyers:

- Always verify property documents
- Check the property's proximity to essential services
- Consider future development plans in the area
- Work with trusted local agents

Landliya is here to help you find your dream property in Pondicherry. Browse our listings today!`,
    author: "Landliya Team",
    date: "2024-01-10",
    category: "Real Estate Tips",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
  }
}

export async function generateStaticParams() {
  return Object.keys(blogs).map((slug) => ({
    slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const blog = blogs[slug]
  
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Button asChild>
            <Link href="/blog">Browse All Posts</Link>
          </Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="bg-slate-50">
      {/* Article Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#1e3a5f]/80 text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {blog.author}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="h-64 md:h-80 bg-slate-200 rounded-t-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-8">
              <div className="prose prose-sm md:prose max-w-none">
                {blog.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>
                  }
                  if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ')) {
                    return <li key={index} className="ml-4 mb-2">{paragraph.replace(/^\d\.\s/, '')}</li>
                  }
                  if (paragraph.trim()) {
                    return <p key={index} className="mb-4 text-muted-foreground">{paragraph}</p>
                  }
                  return null
                })}
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Ready to find your dream property?</h3>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/properties">Browse Properties</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
