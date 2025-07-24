import { Suspense } from 'react'
import Link from 'next/link'
import HextaLogo from './Logo'
// import { TwitterIcon } from '@/components/ui/twitter'
import { LinkedinIcon } from '@/components/ui/linkedin'
import { InstagramIcon } from '@/components/ui/instagram'
import ThemeSwitch from '@/components/ThemeSwitch'
import { StatusIndicator } from './StatusIndicator'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white pt-16 pb-8 px-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Info */}
          <div className="mb-8 md:mb-0">
            <div className="h-32 w-44 relative mb-4">
              <HextaLogo />
            </div>
            <p className="text-dark text-sm max-w-xs">
              Providing innovative IT and Engineering solutions for businesses worldwide.
            </p>
            <div className="flex space-x-6 mt-3">
            <ThemeSwitch/>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-dark text-base mb-4">Quick Links</h3>
            <div className="h-px w-20 bg-dark mb-4"></div>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/" className="text-dark hover:text-primary text-sm">Home</Link></li>
                <li><Link href="/about" className="text-dark hover:text-primary text-sm">About</Link></li>
                <li><Link href="/projects" className="text-dark hover:text-primary text-sm">Projects</Link></li>
                <li><Link href="/team" className="text-dark hover:text-primary text-sm">Team</Link></li>
                <li><Link href="/services" className="text-dark hover:text-primary text-sm">Services</Link></li>
                <li><Link href="/clients" className="text-dark hover:text-primary text-sm">Clients</Link></li>
                <li><Link href="/careers" className="text-dark hover:text-primary text-sm">Careers</Link></li>
                <li><Link href="/contact" className="text-dark hover:text-primary text-sm">Contact us</Link></li>
              </ul>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-dark text-base mb-4">Contact Us</h3>
            <div className="h-px w-20 bg-dark mb-4"></div>
            <address className="not-italic">
              <p className="text-dark text-sm mb-2">TF2, VUDA Complex,</p>
              <p className="text-dark text-sm mb-2">Seethammadara,</p>
              <p className="text-dark text-sm mb-2">Visakhapatnam</p>
              <p className="text-dark text-sm mb-2">Phone: <a href='tel:8977783448'>+91 8977783448</a></p>
              <p className="text-dark text-sm mb-2">Email: <a href='mailto:info@hextasphere.com'>info@hextasphere.com</a></p>
            </address>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-bold text-dark text-base mb-4">Follow Us</h3>
            <div className="h-px w-20 bg-dark mb-4"></div>
            <div className="flex space-x-1">
              <a href="https://linkedin.com/company/hextasphere-technologies/" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary" aria-label="LinkedIn">
                <LinkedinIcon size={16} />
              </a>
              <a href="https://instagram.com/hextaspheretechnologies/" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary" aria-label="Facebook">
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-4 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark text-xs mb-4 md:mb-0">
            © {currentYear} HextaSphere. All rights reserved.
          </p>
          
          <p className="text-dark text-xs mb-4 md:mb-0">
            Crafted with{" "}
            <span 
              className="inline-block text-red-500"
              style={{
                animation: "smoothPulse 1.5s ease-in-out infinite"
              }}
            >
              ❤
            </span>
            {" "}by HextaSphere
          </p>
          
          {/* Status Indicator */}
          <Suspense fallback={
            <div className="flex items-center space-x-2 rounded-full border border-gray-200 py-1 pl-1 pr-2">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="relative h-2 w-2 rounded-full bg-gray-500" />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-50">Checking status...</span>
            </div>
          }>
            <StatusIndicator />
          </Suspense>
        </div>
      </div>
    </footer>
  )
}