import React, { useState, useMemo } from 'react'
import { SearchIcon, FilterIcon, CloseIcon, ShareIcon } from '../components/Icons'

const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'Dawadawa Beverage',
    category: 'Beverages',
    description: 'Traditional Ghanaian nutritional beverage made from fermented locust beans',
    weight: '500g',
    price: '75',
    image: '/samina1.jpg'
  },
  {
    id: 2,
    name: 'Natural Spices',
    category: 'Spices',
    description: 'A blend of natural spices sourced from Ghanaian farmers',
    weight: '1kg',
    price: '25',
    image: '/samina2.jpg'
  },
  {
    id: 3,
    name: 'Native Honey',
    category: 'Special Products',
    description: 'Premium quality honey sourced from local Ghanaian beekeepers, rich in flavor and nutrients',
    weight: '500g',
    price: '75',
    image: '/samina3.jpg'
  },
  {
    id: 4,
    name: 'CerealPlus (cereal legume mix with cashew nuts)',
    category: 'Nuts',
    description: 'A nutritious blend of cereals and legumes, enriched with cashew nuts for added flavor and health benefits',
    weight: '500g',
    price: '35',
    image: '/samina4.jpg'
  },
  {
    id: 5,
    name: 'Dawadawa Beverage',
    category: 'Beverages',
    description: 'Traditional Ghanaian nutritional beverage made from fermented locust beans',
    weight: '500g',
    price: '35',
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
    price: '600',
    image: '/samina7.jpg'
  },
  {
    id: 8,
    name: 'Ginger Powder',
    category: 'Special Products',
    description: 'Finely ground ginger powder made from fresh ginger roots, perfect for cooking and baking',
    weight: '500g',
    price: '30',
    image: '/samina8.jpg'
  },
  {
    id: 9,
    name: 'Hausa Koko Flour',
    category: 'Cereals',
    description: 'Spicy millet flour (CerealPlus) for traditional Ghanaian breakfast',
    weight: '500g',
    price: '30',
    image: '/samina9.jpg'
  },
  {
    id: 10,
    name: 'Dawadawa Beverage',
    category: 'Beverages',
    description: 'Traditional Ghanaian nutritional beverage made from fermented locust beans',
    weight: '500g',
    price: '35',
    image: '/samina1.jpg'
  },
  {
    id: 11,
    name: 'CerealPlus (cereal legume mix with cashew nuts)',
    category: 'Nuts',
    description: 'Premium blend of roasted nuts and seeds',
    weight: '500g',
    price: '35',
    image: '/samina4.jpg'
  },
  {
    id: 12,
    name: 'Natural Spices',
    category: 'Blends',
    description: 'A blend of natural spices sourced from Ghanaian farmers',
    weight: '500g',
    price: '25',
    image: '/samina2.jpg'
  },
]

const CATEGORIES = [
  'All Products',
  'Cereals',
  'Beverages',
  'Nuts',
  'Blends',
  'Spices',
  'Special Products',
]

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

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

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All Products')
  }

  const openModal = (product) => {
    setSelectedProduct(product)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProduct(null)
    document.body.style.overflow = 'unset'
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Samiina Enterprise - ${selectedProduct.name}`,
        text: selectedProduct.description,
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
      <section className="bg-gradient-to-br from-primary to-green-700 text-white pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Samiina Enterprise - Our Products</h1>
            <p className="text-xl text-gray-100">
              Premium processed foods to nourish your family.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-light dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
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
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-primary focus:outline-none transition-colors"
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
                      : 'bg-white dark:bg-gray-800 text-dark dark:text-gray-300 border-2 border-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Product Count */}
            <div className="text-gray-600 dark:text-gray-400 font-semibold">
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
      <section className="py-20 bg-light dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => openModal(product)}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in cursor-pointer group border border-transparent dark:border-gray-700"
                  style={{ animationDelay: `${(index % 6) * 0.1}s` }}
                >
                  {/* Product Image Placeholder */}
                <div className="h-56 flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-700">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
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
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-2">{product.name}</h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{product.description}</p>

                    {/* Weight and Price */}
                    <div className="border-t dark:border-gray-700 pt-4 flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Weight</p>
                        <p className="text-dark dark:text-white font-semibold">{product.weight}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Price</p>
                        <p className="text-2xl font-bold text-secondary">GHS {product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-inner">
              <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-2xl font-bold text-dark mb-2">No products found</p>
              <p className="text-gray-500 mb-8">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={resetFilters}
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-all"
              >
                Clear All Filters
              </button>
            </div>
          )}
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
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Standard Weight</span>
                  <span className="font-bold text-dark dark:text-white">{selectedProduct.weight}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Price</span>
                  <span className="text-2xl font-bold text-secondary">GHS {selectedProduct.price}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/2332441170600?text=Hello Samiina Marketing Team, I'm interested in the ${selectedProduct.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-white text-center font-bold py-4 rounded-xl hover:bg-secondary transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center animate-pulse"
                >
                  Order via WhatsApp
                </a>
                <button
                  onClick={handleShare}
                  className="sm:w-auto px-6 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all transform hover:scale-[1.02] flex items-center justify-center"
                >
                  <ShareIcon />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Interested in Samiina Enterprise Products?</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us to place your order or for bulk inquiries. We offer competitive prices and fast delivery.
          </p>
        </div>
      </section>
    </div>
  )
}
