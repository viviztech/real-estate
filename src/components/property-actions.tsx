"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Share2 } from "lucide-react"

interface PropertyActionsProps {
  property: {
    id: string
    title: string
    slug: string
    price: number
    locality: string
    city: string
  }
}

export function PropertyActions({ property }: PropertyActionsProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setIsFavorited(favorites.includes(property.id))
  }, [property.id])

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    if (isFavorited) {
      const newFavorites = favorites.filter((id: string) => id !== property.id)
      localStorage.setItem("favorites", JSON.stringify(newFavorites))
      setIsFavorited(false)
    } else {
      favorites.push(property.id)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      setIsFavorited(true)
    }
  }

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    const shareData = {
      title: property.title,
      text: `Check out this property: ${property.title} - ${property.locality}, ${property.city}`,
      url: url,
    }

    // Try using Web Share API
    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // User cancelled or error
        console.log("Share cancelled")
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(url)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea")
        textArea.value = url
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      }
    }
  }

  return (
    <>
      <Button
        variant={isFavorited ? "default" : "outline"}
        size="icon"
        onClick={handleFavorite}
        className={isFavorited ? "bg-red-500 hover:bg-red-600" : ""}
      >
        <Heart className={`h-4 w-4 ${isFavorited ? "fill-white" : ""}`} />
      </Button>
      <Button variant="outline" size="icon" onClick={handleShare}>
        {isCopied ? (
          <span className="text-xs font-bold">✓</span>
        ) : (
          <Share2 className="h-4 w-4" />
        )}
      </Button>
    </>
  )
}
