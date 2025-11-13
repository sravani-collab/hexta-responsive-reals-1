"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import Logo from "@/components/layout/Logo"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react"

// ✅ Services Data
const servicesData = {
  IT: {
    name: "IT Services",
    href: "/services/it",
  },
  Engineering: {
    name: "Engineering Services",
    href: "/services/engineering",
    subServices: [
      { name: "Maximizing Potential", href: "/services/engineering/maximizing-potential" },
      { name: "Innovative 3D Engineering", href: "/services/engineering/innovative-3d-engineering" },
      { name: "Reverse Engineering", href: "/services/engineering/reverse-engineering" },
      { name: "Process Engineering", href: "/services/engineering/process-engineering" },
      { name: "Environmental Solutions", href: "/services/engineering/environmental-solutions" },
      { name: "Corporate Liasoning", href: "/services/engineering/corporate-liasoning" },
      { name: "Legal Services", href: "/services/engineering/legal-service" },
    ],
  },
}

// ✅ Other navigation items
const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Team", path: "/team" },
]

const menuItemsAfterServices = [
  { name: "Clients", path: "/clients" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-200",
        isScrolled ? "bg-background/60 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-[10vh] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 relative">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav clsassName="hidden md:flex items-center space-x-6 mr-4">
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

            {/* Services Dropdown */}
            <div
              className="relative p-2"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false)
                setIsEngineeringOpen(false)
              }}
            >
              <button
                className={cn(
                  "text-sm font-medium flex items-center gap-1 transition-colors",
                  pathname.startsWith("/services")
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-900 dark:text-gray-100 hover:text-primary"
                )}
              >
                Services
                <RiArrowDownSLine
                  className={cn(
                    "size-4 transition-transform duration-200",
                    isServicesOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Main Services Dropdown */}
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-[240px] rounded-lg shadow-lg bg-background border border-border z-50">
                  <div className="p-2 space-y-1">
                    {/* IT Services */}
                    <Link
                      href={servicesData.IT.href}
                      className="block px-3 py-2 rounded-md text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {servicesData.IT.name}
                    </Link>

                    {/* Engineering Services */}
                    <div
                      className="relative group"
                      onMouseEnter={() => setIsEngineeringOpen(true)}
                      onMouseLeave={() => setIsEngineeringOpen(false)}
                    >
                      <button
                        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {servicesData.Engineering.name}
                        <RiArrowRightSLine
                          className={cn(
                            "size-4 transition-transform duration-200",
                            isEngineeringOpen && "translate-x-0.5"
                          )}
                        />
                      </button>

                      {/* Engineering Submenu */}
                      {isEngineeringOpen && (
                        <div className="absolute top-0 left-full ml-1 w-[250px] rounded-lg shadow-lg bg-background border border-border z-50">
                          <div className="p-2 space-y-1">
                            {servicesData.Engineering.subServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-3 py-1.5 text-sm rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* After Services */}
            {menuItemsAfterServices.map((item) => (
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

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
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
                      d="M3 5H11M3 12H16M3 19H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] bg-white/80 dark:bg-black/80 backdrop-blur-sm"
              >
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                      <Logo />
                    </Link>
                  </div>

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

                      {/* Mobile Services Accordion */}
                      <div className="flex flex-col">
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className={cn(
                            "flex items-center justify-between p-2 text-base font-medium rounded-md transition-colors",
                            pathname.startsWith("/services")
                              ? "bg-primary/10 text-primary border-l-2 border-primary"
                              : "text-foreground hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          <span>Services</span>
                          <RiArrowDownSLine
                            className={cn(
                              "size-5 transition-transform duration-200",
                              isMobileServicesOpen && "rotate-180"
                            )}
                          />
                        </button>

                        {isMobileServicesOpen && (
                          <div className="mt-2 ml-4 space-y-2">
                            <SheetClose asChild>
                              <Link
                                href={servicesData.IT.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                              >
                                {servicesData.IT.name}
                              </Link>
                            </SheetClose>

                            <SheetClose asChild>
                              <Link
                                href={servicesData.Engineering.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                              >
                                {servicesData.Engineering.name}
                              </Link>
                            </SheetClose>

                            <div className="ml-3 mt-1 space-y-1 pl-3 border-l border-border">
                              {servicesData.Engineering.subServices.map((service) => (
                                <SheetClose asChild key={service.name}>
                                  <Link
                                    href={service.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                                  >
                                    {service.name}
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <hr
        className={cn(
          "m-0 h-px w-full border-none transition-opacity duration-200",
          isScrolled
            ? "opacity-100 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
            : "opacity-0"
        )}
      />
    </header>
  )
}

// ✅ Mobile Navigation Link Component
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