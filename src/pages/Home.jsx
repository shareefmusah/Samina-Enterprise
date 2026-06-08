import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, QualityIcon, NutritionIcon, HygieneIcon, LocalIcon, QuoteIcon, StarIcon, CloseIcon, ShareIcon } from '../components/Icons'

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Dawadawa Beverage',
    description: 'Traditional Ghanaian nutritional beverage made from fermented locust beans',
    price: '30',
    category: 'Beverages',
    image: '/samina1.jpg'
  },
  {
    id: 2,
    name: 'Natural Spices',
    description: 'A blend of natural spices sourced from Ghanaian farmers, perfect for enhancing the flavor of your dishes',
    price: '40',
    category: 'Cereals',
    image: '/samina2.jpg'
  },
  {
    id: 3,
    name: 'native honey',
    description: 'Premium quality honey sourced from local Ghanaian beekeepers, rich in flavor and nutrients',
    price: '45',
    category: 'Nuts',
    image: '/samina3.jpg'
  },
  {
    id: 4,
    name: 'CerealPlus (cereal legume mix with cashew nuts)',
    description: 'A nutritious blend of cereals and legumes, enriched with cashew nuts for added flavor and health benefits',
    price: '35',
    category: 'Cereals',
    image: '/samina4.jpg'
  },
  {
    id: 5,
    name: 'Dawadawa Beverage',
    description: 'Traditional Ghanaian nutritional beverage made from fermented locust beans',
    price: '38',
    category: 'Beverages',
    image: '/samina5.jpg'
  },
  {
    id: 6,
    name: 'Hausa Koko Flour',
    description: 'Spicy millet flour (CerealPlus) for a perfect morning breakfast',
    price: '36',
    category: 'Cereals',
    image: '/samina9.jpg'
  },
]

const WHY_CHOOSE_US = [
  {
    icon: QualityIcon,
    title: 'Quality Ingredients',
    description: 'Fresh and carefully selected ingredients from trusted sources.',
  },
  {
    icon: NutritionIcon,
    title: 'Nutritionally Rich',
    description: 'Packed with vitamins, minerals, and essential nutrients.',
  },
  {
    icon: HygieneIcon,
    title: 'Hygienically Processed',
    description: 'Prepared under strict hygienic and quality standards.',
  },
  {
    icon: LocalIcon,
    title: 'Locally Produced',
    description: 'Proudly made in Ghana with Ghanaian ingredients.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Ama Osei',
    role: 'Mother of two',
    text: 'Samiina Enterprise products have become a staple in our home. The quality is exceptional and my children love the taste!',
    rating: 5,
  },
  {
    name: 'Kwame Mensah',
    role: 'Health enthusiast',
    text: 'I appreciate how transparent they are about their ingredients. No compromises on quality or taste.',
    rating: 5,
  },
  {
    name: 'Akosua Boateng',
    role: 'Restaurant owner',
    text: 'Using Samiina Enterprise products has significantly improved our menu offerings. Our customers keep asking for more!',
    rating: 5,
  },
]

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openModal = (product) => {
    setSelectedProduct(product)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProduct(null)
    document.body.style.overflow = 'unset'
  }

  const handleShare = (product) => {
    if (navigator.share) {
      navigator.share({
      title: `Samiina Enterprise - ${product.name}`,
        text: product.description,
        url: window.location.href,
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="page-enter dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-green-700 text-white pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Healthy Foods, Naturally Processed
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                Premium Tombrown, Cereal Mixes, Legume Blends, and Nutritious Food Products from Samiina Enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/inventory"
                  className="bg-secondary text-dark font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center hover:scale-105"
                >
                  View Products
                  <ArrowRightIcon />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-3xl p-6 shadow-2xl overflow-hidden animate-pulse-slow">
                <img 
                  src="/saminalogo.jpg" 
                  alt="Samiina Enterprise" 
                  className="w-full h-auto rounded-2xl"
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-dark dark:text-white">Why Choose Us?</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Discover what makes Samiina Enterprise the preferred choice for families across Ghana.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-dark dark:text-white">Featured Products</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore our most popular and trusted food products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {FEATURED_PRODUCTS.map((product, index) => (
              <div
                key={product.id}
                onClick={() => openModal(product)}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in cursor-pointer group border border-transparent dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image Placeholder */}
                <div className="h-64 flex items-center justify-center relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-secondary">GHS {product.price}</span>
                    <a
                      href={`https://wa.me/2332468284621?text=Hello Samiina Marketing Team, I'm interested in ordering the ${product.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-primary text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-secondary transition-all animate-pulse shadow-lg shadow-primary/20"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/inventory"
              className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              View Full Inventory
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden relative animate-scale-in shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700 text-dark dark:text-white shadow-md transition-colors z-10"
            >
              <CloseIcon />
            </button>

            {/* Product Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-50">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto dark:text-white">
              <div className="mb-4">
                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {selectedProduct.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Standard Price</span>
                  <span className="text-2xl font-bold text-secondary">GHS {selectedProduct.price}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/2332468284621?text=Hello Samiina Marketing Team, I'm interested in ordering the ${selectedProduct.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-white text-center font-bold py-4 rounded-xl hover:bg-secondary transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center animate-pulse"
                >
                  Order via WhatsApp
                </a>
                <button
                  onClick={() => handleShare(selectedProduct)}
                  className="sm:w-auto px-6 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                >
                  <ShareIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-light dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-dark dark:text-white">Customer Reviews</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            See what our satisfied customers have to say about Samiina Enterprise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4">
                  <QuoteIcon />
                </div>

                <div className="flex mb-4 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

                <div className="border-t dark:border-gray-700 pt-4">
                  <p className="font-bold text-dark dark:text-white">{testimonial.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Quality?</h2>
          <p className="text-lg text-gray-100 mb-8">
            Contact us today to learn more about our products and place your order.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-dark font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </div>
  )
}
