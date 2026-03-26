"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PropertyCard } from "@/components/property-card";
import { PropertyFilters } from "./property-filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, MapPin, Grid, List } from "lucide-react";

export default function PropertiesPage() {
  const properties = [
    {
      id: "1",
      title: "Luxury Apartment",
      slug: "luxury-apartment",
      price: 3800000,
      propertyType: "APARTMENT",
      location: "Pondicherry",
    },
    {
      id: "2",
      title: "Beachside Villa",
      slug: "beachside-villa",
      price: 12000000,
      propertyType: "VILLA",
      location: "Pondicherry",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>

      <div className="flex gap-4 mb-6">
        <Input placeholder="Search properties..." />
        <Button variant="secondary">
          <Search />
        </Button>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filters" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="location">Location</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

