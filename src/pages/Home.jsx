import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, QualityIcon, NutritionIcon, HygieneIcon, LocalIcon, QuoteIcon, StarIcon } from '../components/Icons'

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Tombrown',
    description: 'Traditional blend of grains for energy-rich breakfast',
    price: '30',
    category: 'Cereals',
  },
  {
    id: 2,
    name: 'Cereal Mix',
    description: 'Nutritious combination of healthy whole grains',
    price: '40',
    category: 'Cereals',
  },
  {
    id: 3,
    name: 'Cashew Nut Blend',
    description: 'Premium roasted cashews mixed with nutritious seeds',
    price: '45',
    category: 'Nuts',
  },
  {
    id: 4,
    name: 'Millet Mix',
    description: 'Fine millet flour blend perfect for porridge',
    price: '35',
    category: 'Cereals',
  },
  {
    id: 5,
    name: 'Soybean Mix',
    description: 'Protein-rich soybean blend for nutrition',
    price: '38',
    category: 'Legumes',
  },
  {
    id: 6,
    name: 'Weaning Food Mix',
    description: 'Specially formulated for baby nutrition and development',
    price: '42',
    category: 'Special Products',
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
      <section className="bg-gradient-to-br from-primary to-green-700 text-white py-20 md:py-32">
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
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="90" fill="rgba(255, 255, 255, 0.1)" stroke="white" strokeWidth="2" />
                  <path
                    d="M100 40C90 50 85 70 85 90C85 110 90 130 100 140C110 130 115 110 115 90C115 70 110 50 100 40Z"
                    fill="white"
                  />
                  <circle cx="100" cy="90" r="8" fill="#F9A825" />
                </svg>
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
                <div className="bg-gradient-to-br from-primary to-secondary h-48 flex items-center justify-center relative overflow-hidden">
                  <svg
                    className="w-24 h-24 text-white opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                  </svg>
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
