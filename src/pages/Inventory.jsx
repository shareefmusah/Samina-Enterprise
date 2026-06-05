import React, { useState, useMemo } from 'react'
import { SearchIcon, FilterIcon } from '../components/Icons'

const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'Dawadawa Beverage',
    category: 'Beverages',
    description: 'Traditional Ghanaian nutritional beverage made from fermented locust beans',
    weight: '500g',
    price: '30',
    image: '/samina1.jpg'
  },
  {
    id: 2,
    name: 'Natural Spices',
    category: 'Spices',
    description: 'A blend of natural spices sourced from Ghanaian farmers',
    weight: '1kg',
    price: '40',
    image: '/samina2.jpg'
  },
  {
    id: 3,
    name: 'Native Honey',
    category: 'Special Products',
    description: 'Premium quality honey sourced from local Ghanaian beekeepers, rich in flavor and nutrients',
    weight: '500g',
    price: '35',
    image: '/samina3.jpg'
  },
  {
    id: 4,
    name: 'CerealPlus (cereal legume mix with cashew nuts)',
    category: 'Nuts',
    description: 'A nutritious blend of cereals and legumes, enriched with cashew nuts for added flavor and health benefits',
    weight: '500g',
    price: '45',
    image: '/samina4.jpg'
  },
  {
    id: 5,
    name: 'Dawadawa Beverage',
    category: 'Beverages',
    description: 'Traditional Ghanaian nutritional beverage made from fermented locust beans',
    weight: '500g',
    price: '30',
    image: '/samina5.jpg'
  },
  {
    id: 6,
    name: 'Groundnut paste',
    category: 'Special Products',
    description: 'Rich and creamy groundnut paste made from premium roasted peanuts, perfect for cooking or as a spread',
    weight: '1kg',
    price: '150',
    image: '/samina6.jpg'
  },
  {
    id: 7,
    name: 'Native Honey',
    category: 'Special Products',
    description: 'Premium quality honey sourced from local Ghanaian beekeepers, rich in flavor and nutrients',
    weight: '500g',
    price: '200',
    image: '/samina7.jpg'
  },
  {
    id: 8,
    name: 'Ginger Powder',
    category: 'Special Products',
    description: 'Finely ground ginger powder made from fresh ginger roots, perfect for cooking and baking',
    weight: '500g',
    price: '42',
    image: '/samina8.jpg'
  },
  {
    id: 9,
    name: 'Hausa Koko Flour',
    category: 'Cereals',
    description: 'Spicy millet flour (CerealPlus) for traditional Ghanaian breakfast',
    weight: '500g',
    price: '36',
    image: '/samina9.jpg'
  },
  {
    id: 10,
    name: 'Dawadawa Beverage',
    category: 'Beverages',
    description: 'Traditional Ghanaian nutritional beverage made from fermented locust beans',
    weight: '500g',
    price: '30',
    image: '/samina1.jpg'
  },
  {
    id: 11,
    name: 'CerealPlus (cereal legume mix with cashew nuts)',
    category: 'Nuts',
    description: 'Premium blend of roasted nuts and seeds',
    weight: '500g',
    price: '50',
    image: '/samina4.jpg'
  },
  {
    id: 12,
    name: 'Natural Spices',
    category: 'Blends',
    description: 'A blend of natural spices sourced from Ghanaian farmers',
    weight: '500g',
    price: '44',
    image: '/samina2.jpg'
  },
]

const CATEGORIES = [
  'All Products',
  'Cereals',
  'Legumes',
  'Nuts',
  'Blends',
  'Special Products',
]

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === 'All Products' || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-green-700 text-white pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Samina Enterprise - Our Products</h1>
            <p className="text-xl text-gray-100">
              Premium processed foods to nourish your family.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Filter Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2 md:hidden">
              <FilterIcon className="text-primary" />
              <button
                onClick={() => setShowMobileFilter(!showMobileFilter)}
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                {showMobileFilter ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-dark border-2 border-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Product Count */}
            <div className="text-gray-600 font-semibold">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Mobile Filters */}
          {showMobileFilter && (
            <div className="md:hidden mt-6 pt-6 border-t border-gray-300 animate-slide-down">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowMobileFilter(false)
                    }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-white text-dark border-2 border-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${(index % 6) * 0.1}s` }}
                >
                  {/* Product Image Placeholder */}
                <div className="h-56 flex items-center justify-center relative overflow-hidden bg-gray-50 border-b border-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  </div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                    {/* Weight and Price */}
                    <div className="border-t pt-4 flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-sm">Weight</p>
                        <p className="text-dark font-semibold">{product.weight}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-sm">Price</p>
                        <p className="text-2xl font-bold text-secondary">GHS {product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-2">No products found</p>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Interested in Samina Enterprise Products?</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us to place your order or for bulk inquiries. We offer competitive prices and fast delivery.
          </p>
        </div>
      </section>
    </div>
  )
}
