import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@landliya.com' },
    update: {},
    create: {
      email: 'admin@landliya.com',
      name: 'Admin',
      phone: '+919999999999',
      passwordHash: hashedPassword,
      role: 'ADMIN',
      isVerified: true,
    },
  })
  console.log('Created admin user:', admin.email)

  // Create localities for Pondicherry
  const localities = [
    { name: 'White Town', slug: 'white-town', description: 'The French Quarter - premium colonial properties', avgPrice: 7500000, propertyCount: 45 },
    { name: 'Anna Nagar', slug: 'anna-nagar', description: 'Modern residential area with good connectivity', avgPrice: 5500000, propertyCount: 78 },
    { name: 'Beach Road', slug: 'beach-road', description: 'Coastal properties with sea views', avgPrice: 12000000, propertyCount: 32 },
    { name: 'Lawspet', slug: 'lawspet', description: 'Popular among IT professionals', avgPrice: 4200000, propertyCount: 56 },
    { name: 'Muthialpet', slug: 'muthialpet', description: 'Budget-friendly properties', avgPrice: 3500000, propertyCount: 41 },
    { name: 'Reddiarpalayam', slug: 'reddiarpalayam', description: 'Quiet residential area', avgPrice: 6000000, propertyCount: 29 },
  ]

  for (const locality of localities) {
    await prisma.locality.upsert({
      where: { slug: locality.slug },
      update: {},
      create: locality,
    })
  }
  console.log('Created localities')

  // Create sample properties
  const properties = [
    {
      slug: 'luxury-villa-white-town',
      title: 'Luxury 3BHK Villa in White Town',
      description: 'Stunning luxury villa in the heart of White Town',
      price: 8500000,
      propertyType: 'VILLA',
      listingType: 'SALE',
      status: 'ACTIVE',
      address: '12, Rue de la Marine',
      locality: 'White Town',
      city: 'Pondicherry',
      state: 'Tamil Nadu',
      bedrooms: 3,
      bathrooms: 3,
      floor: 2,
      totalFloors: 2,
      area: 2200,
      yearBuilt: 2020,
      facing: 'East',
      amenities: ['Car Parking', 'WiFi', 'Garden', 'Security'],
      images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
      userId: admin.id,
    },
    {
      slug: 'modern-apartment-anna-nagar',
      title: 'Modern 2BHK Apartment in Anna Nagar',
      description: 'Beautiful apartment with modern amenities',
      price: 4500000,
      propertyType: 'APARTMENT',
      listingType: 'SALE',
      status: 'ACTIVE',
      address: '45, 3rd Cross Street',
      locality: 'Anna Nagar',
      city: 'Pondicherry',
      state: 'Tamil Nadu',
      bedrooms: 2,
      bathrooms: 2,
      floor: 3,
      totalFloors: 5,
      area: 1200,
      yearBuilt: 2022,
      facing: 'North',
      amenities: ['Lift', 'Car Parking', 'Power Backup'],
      images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
      userId: admin.id,
    },
    {
      slug: 'beachside-house-beach-road',
      title: 'Beachside 4BHK House for Sale',
      description: 'Spacious house with beach views',
      price: 12000000,
      propertyType: 'HOUSE',
      listingType: 'SALE',
      status: 'ACTIVE',
      address: '78, Beach Road',
      locality: 'Beach Road',
      city: 'Pondicherry',
      state: 'Tamil Nadu',
      bedrooms: 4,
      bathrooms: 4,
      floor: 2,
      totalFloors: 2,
      area: 3500,
      yearBuilt: 2019,
      facing: 'South',
      amenities: ['Sea View', 'Garden', 'Security', 'Car Parking'],
      images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
      userId: admin.id,
    },
    {
      slug: 'cozy-flat-lawspet',
      title: 'Cozy 1BHK Flat in Lawspet',
      description: 'Perfect starter home',
      price: 2500000,
      propertyType: 'FLAT',
      listingType: 'SALE',
      status: 'ACTIVE',
      address: '23, Lawspet Main Road',
      locality: 'Lawspet',
      city: 'Pondicherry',
      state: 'Tamil Nadu',
      bedrooms: 1,
      bathrooms: 1,
      floor: 2,
      totalFloors: 4,
      area: 650,
      yearBuilt: 2021,
      facing: 'West',
      amenities: ['Car Parking', 'Security'],
      images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'],
      userId: admin.id,
    },
  ]

  for (const property of properties) {
    await prisma.property.upsert({
      where: { slug: property.slug },
      update: {},
      create: property,
    })
  }
  console.log('Created sample properties')

  // Create a blog post for SEO
  await prisma.blogPost.upsert({
    where: { slug: 'best-areas-to-buy-property-in-pondicherry' },
    update: {},
    create: {
      title: 'Best Areas to Buy Property in Pondicherry',
      slug: 'best-areas-to-buy-property-in-pondicherry',
      content: 'Pondicherry offers excellent real estate opportunities...',
      excerpt: 'Discover the top localities for property investment in Pondicherry',
      status: 'PUBLISHED',
      publishedAt: new Date(),
    },
  })
  console.log('Created blog post')

  console.log('Database seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
