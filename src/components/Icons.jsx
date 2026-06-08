import React from 'react'

export const LogoIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke="#2E7D32" strokeWidth="2"/>
    <path d="M20 8C20 8 14 14 14 20C14 26 17 30 20 30C23 30 26 26 26 20C26 14 20 8 20 8Z" fill="#2E7D32"/>
    <circle cx="20" cy="20" r="3" fill="#F9A825"/>
  </svg>
)

export const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

export const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export const CheckIcon = () => (
  <svg className="w-6 h-6" fill="#2E7D32" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

export const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

export const MapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export const WhatsAppIcon = () => (
  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.01 2c-5.52 0-9.99 4.47-9.99 9.99 0 1.74.45 3.37 1.24 4.78l-1.32 4.81 4.92-1.29c1.38.75 2.94 1.18 4.6 1.18 5.52 0 9.99-4.47 9.99-9.99S17.53 2 12.01 2zm4.63 13.1c-.27.4-.93.66-1.32.73-.39.07-.87.12-2.34-.49-1.87-.77-3.07-2.67-3.17-2.8-.09-.13-.78-.97-.78-1.86s.46-1.33.63-1.51c.17-.18.37-.22.49-.22.12 0 .24 0 .34.01.11.01.25-.04.39.29.14.33.49 1.19.53 1.28.04.09.07.19.01.3-.06.11-.11.19-.19.29-.08.09-.16.19-.23.27-.08.09-.17.18-.07.35.1.17.44.72.94 1.17.65.58 1.19.76 1.36.85.17.09.27.08.37-.03.1-.11.44-.51.56-.68.12-.17.24-.14.41-.08.17.06 1.07.5 1.25.59.18.09.3.14.34.22.04.08.04.48-.23.88z" />
  </svg>
)

export const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

export const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.459.686-1.962 1.15-.47.487-.9 1.164-1.164 1.973-.266.78-.466 1.644-.527 2.923C.012 8.35 0 8.757 0 12s.015 3.65.072 4.947c.06 1.277.261 2.148.527 2.923.264.81.694 1.486 1.165 1.973a5.972 5.972 0 001.962 1.15c.788.266 1.656.465 2.935.527 1.279.057 1.689.072 4.947.072 3.259 0 3.668-.015 4.947-.072 1.28-.062 2.147-.261 2.935-.527.81-.264 1.486-.694 1.973-1.15a5.98 5.98 0 001.15-1.973c.266-.79.466-1.656.527-2.935.057-1.281.072-1.689.072-4.947 0-3.258-.015-3.668-.072-4.947-.06-1.28-.261-2.147-.527-2.935a5.975 5.975 0 00-1.15-1.962c-.488-.476-1.163-.905-1.973-1.165-.79-.265-1.657-.466-2.936-.527C15.65.014 15.24 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.064 1.17.054 1.805.244 2.227.408.56.217.96.477 1.382.896.42.42.679.822.896 1.381.164.422.355 1.057.408 2.227.055 1.266.064 1.645.064 4.85 0 3.204-.009 3.583-.064 4.848-.054 1.17-.243 1.805-.408 2.227-.217.56-.477.96-.896 1.382-.42.42-.822.678-1.382.896-.422.163-1.057.354-2.227.408-1.264.056-1.644.065-4.848.065-3.204 0-3.584-.009-4.849-.065-1.169-.054-1.804-.244-2.227-.408-.56-.217-.96-.476-1.381-.896a3.726 3.726 0 01-.896-1.382c-.164-.422-.355-1.057-.408-2.227-.056-1.266-.064-1.645-.064-4.849 0-3.204.009-3.583.064-4.849.054-1.169.244-1.804.408-2.227.217-.56.477-.96.896-1.381a3.726 3.726 0 011.382-.896c.422-.163 1.057-.354 2.227-.408 1.265-.056 1.644-.065 4.848-.065zm0 3.678a5.558 5.558 0 100 11.115 5.558 5.558 0 000-11.115zm0 9.164a3.61 3.61 0 110-7.22 3.61 3.61 0 010 7.22zm5.884-9.804a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z"/>
  </svg>
)

export const TikTokIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.321 5.562a5.122 5.122 0 01-2.003-2.038A5.159 5.159 0 0015.118 2c-.865 0-1.698.223-2.418.629a5.087 5.087 0 00-3.566 4.872v7.36a4.148 4.148 0 01-2.391-3.842c-2.265 1.54-3.762 4.146-3.762 7.143 0 4.632 3.747 8.379 8.379 8.379 4.632 0 8.379-3.747 8.379-8.379 0-3.996-2.794-7.34-6.528-8.158v-3.802a8.347 8.347 0 005.712 2.259v-3.9z"/>
  </svg>
)

export const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
)

export const QuoteIcon = () => (
  <svg className="w-8 h-8 text-secondary opacity-50" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.5-3-7-3s-7 1.75-7 3c0 1.25 2.75 5 7 5 1.25 0 1.25-2 1.25-2s0 1.25-1.25 2c-1.25 0-5.5-2.5-5.5-6 0-3 2-4 4-4 3 0 4 3 4 8 0 5.5-2 6.5-4 6.5-3 0-2.5-1-3.5-1.5-1-0.5-2 -1-2.5-2 0-1.5 .5-3.5 2-4 2-1 6 0 6 5.5 0 6-3 8-7 8z" />
  </svg>
)

export const StarIcon = () => (
  <svg className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
)

export const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

export const FilterIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
)

export const ChevronUpIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
)

export const LoadingSpinner = () => (
  <svg className="w-12 h-12 animate-spin-slow text-primary" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
  </svg>
)

export const QualityIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

export const NutritionIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

export const HygieneIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

export const LocalIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  </svg>
)

export const TargetIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-8.22 0M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12 18.75a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
  </svg>
)

export const EyeIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)

export const ShieldCheckIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

export const LightBulbIcon = () => (
  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9 10a3 3 0 116 0c0 1.657-1.343 3-3 3s-3-1.343-3-3z" />
  </svg>
)

export const ShareIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
)

export const SunIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
)

export const MoonIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
)
