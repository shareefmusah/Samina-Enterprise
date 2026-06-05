import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, QualityIcon, NutritionIcon, HygieneIcon, LocalIcon, QuoteIcon, StarIcon } from '../components/Icons'

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
    text: 'Samina Enterprise products have become a staple in our home. The quality is exceptional and my children love the taste!',
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
    text: 'Using Samina Enterprise products has significantly improved our menu offerings. Our customers keep asking for more!',
    rating: 5,
  },
]

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-green-700 text-white pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Healthy Foods, Naturally Processed
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                Premium Tombrown, Cereal Mixes, Legume Blends, and Nutritious Food Products from Samina Enterprise.
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
                  alt="Samina Enterprise" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-dark">Why Choose Us?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover what makes Samina Enterprise the preferred choice for families across Ghana.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-dark">Featured Products</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our most popular and trusted food products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {FEATURED_PRODUCTS.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image Placeholder */}
                <div className="h-64 flex items-center justify-center relative overflow-hidden bg-gray-100">
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
                  <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-secondary">GHS {product.price}</span>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-dark">Customer Reviews</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See what our satisfied customers have to say about Samina Enterprise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg relative animate-fade-in"
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

                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

                <div className="border-t pt-4">
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
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
