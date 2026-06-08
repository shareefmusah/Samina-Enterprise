import React from 'react'
import { TargetIcon, EyeIcon, QualityIcon, ShieldCheckIcon, LightBulbIcon, LocalIcon } from '../components/Icons'

const VALUES = [
  {
    icon: QualityIcon,
    title: 'Quality',
    description: 'Unwavering commitment to superior product quality and excellence.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Integrity',
    description: 'Honest, transparent practices in all our business dealings.',
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation',
    description: 'Continuous improvement and creative solutions for better nutrition.',
  },
  {
    icon: LocalIcon,
    title: 'Customer Satisfaction',
    description: 'Every decision is made with our customers\' wellbeing in mind.',
  },
]

const TEAM_MEMBERS = [
  {
    name: 'Executive Director',
    role: 'CEO & Founder',
    image: null, // Replace with path like '/team/ceo.jpg'
    description: 'Leading the vision of Samiina Enterprise to bring wholesome nutrition to every Ghanaian home.',
  },
  {
    name: 'Operations Team',
    role: 'Processing Department',
    image: null,
    description: 'Specialists in hygienic processing and natural food preservation standards.',
  },
  {
    name: 'Growth Team',
    role: 'Marketing Department',
    image: null,
    description: 'Connecting our natural products with health-conscious families across the region.',
  },
  {
    name: 'Support Team',
    role: 'Customer Care',
    image: null,
    description: 'Dedicated to providing an exceptional service experience and handling inquiries.',
  },
  {
    name: 'Digital Team',
    role: 'IT Support',
    image: null,
    description: 'Managing our digital infrastructure to ensure seamless operations and connectivity.',
  },
]

export default function About() {
  return (
    <div className="page-enter dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-green-700 text-white pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Samiina Enterprise</h1>
            <p className="text-xl text-gray-100">
              Bringing wholesome nutrition to every Ghanaian home.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6 text-dark dark:text-white">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Samiina Enterprise was founded with a simple yet powerful vision: to provide premium processed foods that are both nutritious and delicious. We started our journey with a commitment to excellence and a passion for improving family nutrition across Ghana.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                What began as a small operation has grown into a trusted brand serving thousands of families throughout Ghana. Our success is built on three pillars: quality ingredients, hygienic processing, and a deep understanding of our customers' needs.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we continue to innovate and expand our product line, always keeping our core values at the heart of everything we do.
              </p>
            </div>
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <img 
                  src="/saminalogo.jpg" 
                  alt="Samiina Enterprise Branding" 
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-light dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in-left">
              <div className="bg-gradient-to-br from-secondary to-orange-400 rounded-2xl p-12 text-dark dark:text-gray-900">
                <TargetIcon />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-right">
              <h2 className="text-4xl font-bold mb-6 text-dark dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To produce and deliver premium, naturally processed foods that nourish families and promote healthy living across Ghana. We are committed to sourcing the finest local ingredients and processing them with the highest standards of hygiene and care.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
                Our mission extends beyond products; we aim to build a community of health-conscious consumers who trust Samiina Enterprise as their partner in nutrition and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6 text-dark dark:text-white">Our Vision</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To become West Africa\&apos;s most trusted brand for naturally processed foods, recognized for our unwavering commitment to quality, sustainability, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
                We envision a future where every Ghanaian family has access to affordable, nutritious, and delicious processed foods that support their health and wellbeing. We aim to expand our reach beyond Ghana while maintaining our core values and commitment to local sourcing.
              </p>
            </div>
            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-12 text-white">
                <EyeIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-dark dark:text-white">Our Core Values</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            These values guide every decision we make and shape our company culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Processing Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-dark dark:text-white">Our Processing Standards</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Ingredient Sourcing',
                description: 'We carefully select premium ingredients from trusted local suppliers, ensuring freshness and quality at every step.',
              },
              {
                title: 'Quality Control',
                description: 'Every batch undergoes rigorous testing to meet our strict quality standards and food safety requirements.',
              },
              {
                title: 'Hygienic Processing',
                description: 'Our facilities operate under international hygiene standards with regular audits and certifications.',
              },
              {
                title: 'Expert Packaging',
                description: 'Products are carefully packaged to preserve freshness, nutritional value, and quality until they reach your home.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-green-700 text-white p-8 rounded-xl animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-light dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-dark dark:text-white">Meet Our Team</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            The dedicated professionals behind the quality and excellence of Samiina Enterprise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <svg 
                      className="w-24 h-24 text-primary opacity-20 group-hover:scale-110 transition-transform duration-500" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
                <div className="p-6 text-center">
                  <div className="mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-3">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-gradient-to-r from-primary to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Commitment to You</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            At Samiina Enterprise, we are dedicated to continuous improvement, innovation, and maintaining the highest standards of quality and customer service. Your trust is our most valued asset.
          </p>
        </div>
      </section>
    </div>
  )
}
