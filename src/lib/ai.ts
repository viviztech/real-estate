// AI Integration for Property Descriptions
// This uses OpenAI API to generate property descriptions

export interface PropertyDetails {
  title: string
  propertyType: string
  bedrooms: number
  bathrooms: number
  area: number
  locality: string
  city: string
  amenities?: string[]
  yearBuilt?: number
}

export async function generatePropertyDescription(property: PropertyDetails): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY
  
  if (!apiKey) {
    // Return a template description if no API key
    return generateTemplateDescription(property)
  }

  try {
    const prompt = `Generate a compelling property description for a real estate listing. 

Property Details:
- Title: ${property.title}
- Type: ${property.propertyType}
- Bedrooms: ${property.bedrooms}
- Bathrooms: ${property.bathrooms}
- Area: ${property.area} sq ft
- Location: ${property.locality}, ${property.city}
- Year Built: ${property.yearBuilt || 'recent'}
- Amenities: ${property.amenities?.join(', ') || 'standard'}

Write a 2-3 paragraph description that:
1. Highlights the key features and unique selling points
2. Mentions the location benefits
3. Creates excitement for potential buyers
4. Is SEO-friendly with relevant keywords

Write in English, be professional but engaging.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a professional real estate copywriter specializing in property descriptions.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    return data.choices?.[0]?.message?.content || generateTemplateDescription(property)
  } catch (error) {
    console.error('AI generation error:', error)
    return generateTemplateDescription(property)
  }
}

function generateTemplateDescription(property: PropertyDetails): string {
  const typeNames: Record<string, string> = {
    APARTMENT: 'apartment',
    VILLA: 'villa',
    HOUSE: 'house',
    FLAT: 'flat',
    PENTHOUSE: 'penthouse',
    BUNGALOW: 'bungalow',
    STUDIO: 'studio',
    LAND: 'plot',
  }

  const typeName = typeNames[property.propertyType] || 'property'
  const bedroomText = property.bedrooms === 1 ? 'one-bedroom' : 
                      property.bedrooms === 2 ? 'two-bedroom' :
                      property.bedrooms === 3 ? 'three-bedroom' :
                      property.bedrooms === 4 ? 'four-bedroom' :
                      `${property.bedrooms}-bedroom`

  return `This stunning ${bedroomText} ${typeName} in ${property.locality}, ${property.city} offers an exceptional living experience. Spanning ${property.area} sq ft, this meticulously designed ${typeName} features ${property.bedrooms} spacious bedrooms and ${property.bathrooms} modern bathrooms.

Located in the heart of ${property.locality}, this property provides easy access to local amenities, schools, hospitals, and transportation. ${property.yearBuilt ? `Built in ${property.yearBuilt},` : ''} it combines modern architecture with practical living spaces, making it an ideal choice for families and professionals alike.

${property.amenities?.length ? `The property comes with premium amenities including ${property.amenities.slice(0, 4).join(', ')}. ` : ''}Don't miss this excellent opportunity to own a piece of ${property.city}'s real estate. Contact us today to schedule a viewing!`
}

export async function generateSEOContent(locality: string, city: string): Promise<{
  metaTitle: string
  metaDescription: string
  sections: { title: string; content: string }[]
}> {
  return {
    metaTitle: `Property in ${locality}, ${city} | Buy & Sell Real Estate`,
    metaDescription: `Explore the best properties in ${locality}, ${city}. Find flats, villas, and houses for sale. Get the latest property listings and market insights.`,
    sections: [
      {
        title: `Why Buy Property in ${locality}?`,
        content: `${locality} is one of the most sought-after areas in ${city} for real estate investment. With excellent connectivity, proximity to beaches, and a blend of colonial and modern architecture, ${locality} offers a unique lifestyle.`
      },
      {
        title: 'Property Types Available',
        content: 'From luxury villas in White Town to affordable apartments in Lawspet, Pondicherry offers diverse real estate options to suit every budget and preference.'
      },
      {
        title: 'Investment Potential',
        content: 'Pondicherry real estate has shown steady growth. Areas like Anna Nagar and Beach Road offer good rental yields and capital appreciation potential.'
      }
    ]
  }
}
