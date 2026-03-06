"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Routes that don't need header/footer
  const noNavRoutes = ["/login", "/register", "/forgot-password"]
  const showNav = !noNavRoutes.some(route => pathname === route)
  
  return (
    <>
      {showNav && <Header />}
      {children}
      {showNav && <Footer />}
    </>
  )
}
