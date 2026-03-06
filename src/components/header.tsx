"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, User, Heart } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          </div>
          <span className="text-xl font-bold">
            <span className="text-primary">LAND</span>
            <span className="text-accent">LIYA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/properties" className="text-sm font-medium hover:text-primary">
            Buy
          </Link>
          <Link href="/properties?type=rent" className="text-sm font-medium hover:text-primary">
            Rent
          </Link>
          <Link href="/localities" className="text-sm font-medium hover:text-primary">
            Localities
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search properties in Pondicherry..."
              className="pl-9 w-full"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Link>
          </Button>
          <Button asChild>
            <Link href="/properties/add">Post Property</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search properties..."
              className="pl-9"
            />
          </div>
          <nav className="flex flex-col gap-2">
            <Link href="/properties" className="px-3 py-2 font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Buy
            </Link>
            <Link href="/properties?type=rent" className="px-3 py-2 font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Rent
            </Link>
            <Link href="/localities" className="px-3 py-2 font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Localities
            </Link>
            <Link href="/blog" className="px-3 py-2 font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/about" className="px-3 py-2 font-medium hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </nav>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" asChild>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link href="/properties/add" onClick={() => setIsMenuOpen(false)}>Post Property</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
