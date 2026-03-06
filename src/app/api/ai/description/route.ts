import { NextRequest, NextResponse } from 'next/server'
import { generatePropertyDescription } from '@/lib/ai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      title,
      propertyType,
      bedrooms,
      bathrooms,
      area,
      locality,
      city,
      amenities,
      yearBuilt
    } = body

    if (!title || !propertyType || !locality || !city) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const description = await generatePropertyDescription({
      title,
      propertyType,
      bedrooms: bedrooms || 0,
      bathrooms: bathrooms || 0,
      area: area || 0,
      locality,
      city,
      amenities,
      yearBuilt
    })

    return NextResponse.json({ 
      success: true, 
      description 
    })
  } catch (error) {
    console.error('AI generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate description' },
      { status: 500 }
    )
  }
}
