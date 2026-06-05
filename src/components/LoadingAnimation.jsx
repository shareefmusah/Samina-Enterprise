import React from 'react'
import { LogoIcon, LoadingSpinner } from './Icons'

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-light bg-opacity-95 flex flex-col items-center justify-center z-[9999] animate-fade-in">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo Animation */}
        <div className="animate-scale-in">
          <LogoIcon />
        </div>

        {/* Loading Spinner */}
        <LoadingSpinner />

        {/* Loading Text */}
        <p className="text-primary font-semibold text-lg animate-pulse">
          Samina Enterprise
        </p>
      </div>
    </div>
  )
}
