import React, { useState } from 'react'
import { PhoneIcon, WhatsAppIcon, EmailIcon, MapIcon, ClockIcon } from '../components/Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [formErrors, setFormErrors] = useState({})
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid phone number'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    return errors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm()

    if (Object.keys(errors).length === 0) {
      // Form is valid - show success message
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } else {
      setFormErrors(errors)
    }
  }

  return (
    <div className="page-enter dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-green-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Get in touch with Samiina Enterprise today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-dark dark:text-white">How to Reach Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-slide-up">
              <div className="inline-block bg-primary bg-opacity-10 p-4 rounded-lg mb-4">
                <PhoneIcon />
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-white mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Speak with our team</p>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+2332441170600"
                  className="text-primary font-bold hover:text-secondary transition-colors"
                >
                  +233 244 117 0600
                </a>
                <a
                  href="tel:+233241170400"
                  className="text-primary font-bold hover:text-secondary transition-colors"
                >
                  +233 241 170 400
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-block bg-primary bg-opacity-10 p-4 rounded-lg mb-4">
                <WhatsAppIcon />
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-white mb-2">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Quick messaging</p>
              <div className="flex flex-col gap-1">
                <a
                  href="https://wa.me/2332441170600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:text-secondary transition-colors"
                >
                  +233 244 117 0600
                </a>
                <a
                  href="https://wa.me/233241170400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:text-secondary transition-colors"
                >
                  +233 241 170 400
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block bg-primary bg-opacity-10 p-4 rounded-lg mb-4">
                <EmailIcon />
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Send us a message</p>
              <a
                href="mailto:info@samiina.com"
                className="text-primary font-bold hover:text-secondary transition-colors break-all"
              >
                info@samiina.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="inline-block bg-primary bg-opacity-10 p-4 rounded-lg mb-4">
                <MapIcon />
              </div>
              <h3 className="text-xl font-bold text-dark dark:text-white mb-2">Visit us</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Our office</p>
              <a
                href="https://www.google.com/maps/place/Samiina+Foods/@9.4282366,-0.8473981,18z/data=!4m9!1m2!2m1!1ssamina+enterprise+location+near+Tamale!3m5!1s0xfd43d3d71b674f5:0xdc103260152c10ba!8m2!3d9.4282367!4d-0.8457455!16s%2Fg%2F11sycy7z77?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:text-secondary transition-colors"
              >
                Tamale, Northern Region, Ghana
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-light dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-8 text-dark dark:text-white">Send us a Message</h2>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-400 text-green-700 rounded-lg animate-scale-in">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-dark dark:text-gray-200 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                      formErrors.name
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-primary'
                    }`}
                    placeholder="Your name"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-dark dark:text-gray-200 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                      formErrors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-primary'
                    }`}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-dark dark:text-gray-200 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                      formErrors.phone
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-primary'
                    }`}
                    placeholder="+233 123 456 789"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-dark dark:text-gray-200 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors resize-none ${
                      formErrors.message
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-primary'
                    }`}
                    placeholder="Tell us how we can help..."
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-6 text-center">
                We typically respond within 24 hours during business days.
              </p>
            </div>

            {/* Business Hours */}
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold mb-8 text-dark dark:text-white">Business Hours</h2>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8 transition-colors duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="inline-block bg-primary bg-opacity-10 p-3 rounded-lg">
                    <ClockIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Office Hours</h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Monday - Friday</span>
                        <span className="font-semibold text-primary">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Saturday</span>
                        <span className="font-semibold text-primary">8:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">Sunday</span>
                        <span className="font-semibold text-gray-400">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <h3 className="text-2xl font-bold mb-4 text-dark dark:text-white">Find Us on the Map</h3>
              <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
                <iframe
                  title="Samiina Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/place/Samiina+Foods/@9.4282366,-0.8473981,18z/data=!4m9!1m2!2m1!1ssamiina+enterprise+location+near+Tamale!3m5!1s0xfd43d3d71b674f5:0xdc103260152c10ba!8m2!3d9.4282367!4d-0.8457455!16s%2Fg%2F11sycy7z77?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, product launches, and special offers.
          </p>
        </div>
      </section>
    </div>
  )
}
