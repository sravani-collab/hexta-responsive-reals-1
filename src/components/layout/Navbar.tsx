"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import Logo from "@/components/layout/Logo"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"

// Icons
import { RiArrowRightUpLine } from "@remixicon/react"

// Navigation menu items
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Services', path: '/services' },
  // { name: 'Team', path: '/team' },
  { name: 'Clients', path: '/clients' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-200",
        isScrolled? "bg-background/60 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-[10vh] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 relative">
            <Logo />
          </Link>

          <div className="flex flex-1 items-center justify-end">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 mr-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === item.path
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-900 dark:text-gray-100 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Theme Toggle */}
            <div className="hidden md:block">
              <ModeToggle />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <ModeToggle />
              
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      }),
                      "md:hidden text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                    aria-label="Toggle menu"
                  >
                    <svg
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                    >
                      <path
                        d="M3 5H11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 12H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 19H21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                  </button>
                </SheetTrigger>
                
                <SheetContent 
                  side="left" 
                  className="w-[300px] sm:w-[400px] bg-white/80 dark:bg-black/80 backdrop-blur-sm"
                >
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center"
                      >
                        <Logo />
                      </Link>
                    </div>
                    
                    {/* Mobile Navigation Links */}
                    <nav className="flex-1 overflow-auto">
                      <div className="flex flex-col space-y-3">
                        {menuItems.map((item) => (
                          <MobileNavLink
                            key={item.path}
                            href={item.path}
                            active={pathname === item.path}
                            onOpenChange={() => setIsOpen(false)}
                          >
                            {item.name}
                          </MobileNavLink>
                        ))}
                      </div>
                    </nav>
                    
                    {/* Mobile Status Link */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-end">
                        <a 
                          href="https://status.hextasphere.com" 
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <span>Status</span>
                          <RiArrowRightUpLine className="size-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced separator line with better visibility */}
      <hr className={cn(
        "m-0 h-px w-full border-none transition-opacity duration-200",
        isScrolled 
          ? "opacity-100 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" 
          : "opacity-0"
      )} />
    </header>
  )
}

// Mobile Navigation Link Component
interface MobileNavLinkProps {
  href: string
  children: React.ReactNode
  active?: boolean
  onOpenChange?: () => void
}

function MobileNavLink({ href, children, active, onOpenChange }: MobileNavLinkProps) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        onClick={() => onOpenChange?.()}
        className={cn(
          "flex items-center p-2 text-base font-medium rounded-md transition-colors",
          active
            ? "bg-primary/10 text-primary border-l-2 border-primary"
            : "text-foreground hover:bg-accent hover:text-accent-foreground"
        )}
      >
        {children}
      </Link>
    </SheetClose>
  )
}