import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, CloseIcon } from './Icons'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-7xl z-50 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl animate-slide-down overflow-hidden border border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/saminalogo.jpg" 
              alt="Samina Enterprise Logo" 
              className="w-10 h-10 object-contain rounded-full border border-gray-100"
            />
            <span className="text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors">
              Samina Enterprise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-lg text-dark hover:bg-primary hover:text-white transition-all duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-light transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-light border-t border-gray-200 animate-slide-down">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-dark hover:bg-primary hover:text-white transition-all duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
