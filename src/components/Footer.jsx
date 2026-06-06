import React from 'react'
import { Link } from 'react-router-dom'
import { LogoIcon, PhoneIcon, EmailIcon, MapIcon, FacebookIcon, InstagramIcon, TikTokIcon, LinkedInIcon, WhatsAppIcon } from './Icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-fade-in-left">
            <div className="flex items-center space-x-2 mb-4">
              <LogoIcon />
              <h3 className="text-xl font-bold text-secondary">Samina Enterprise</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Premium processed foods made in Ghana. Quality ingredients, naturally processed for every family.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-bold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="hover:text-secondary transition-colors">
                  Inventory
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-right">
            <h4 className="text-lg font-bold text-secondary mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start space-x-3 hover:text-secondary transition-colors">
                <PhoneIcon />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+233 24 6828 4621</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 hover:text-secondary transition-colors">
                <EmailIcon />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@samina.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 hover:text-secondary transition-colors">
                <MapIcon />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Tamale Northen Region, Ghana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="animate-fade-in-right">
            <h4 className="text-lg font-bold text-secondary mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-700 hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-700 hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/2332468284621"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-700 hover:bg-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-700 hover:bg-secondary transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-700 hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Samina Enterprise. All rights reserved.</p>
            <p className="mt-2">Crafted with care for healthy living</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
