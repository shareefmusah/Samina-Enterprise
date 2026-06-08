import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from './Icons'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-7xl z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg rounded-2xl animate-slide-down overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/saminalogo.jpg" 
              alt="Samiina Enterprise Logo" 
              className="w-10 h-10 object-contain rounded-full border border-gray-100"
            />
            <span className="text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors">
              Samiina Enterprise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive ? 'bg-primary text-white' : 'text-dark dark:text-gray-200 hover:bg-primary/10'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-primary"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-light dark:hover:bg-gray-800 transition-colors dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-light dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-slide-down">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-dark dark:text-gray-200 hover:bg-primary hover:text-white transition-all duration-300 font-medium"
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
