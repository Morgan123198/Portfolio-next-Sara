"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { ProfileSelector } from "@/components/profile-selector"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-engineering-workspace-with-robotics-equipme.jpg"
          alt="Engineering workspace background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance">
          Sara Karina Choque Quispe
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed text-pretty">
          Mechatronics Engineer | Biomedical & Neuroengineering Systems | Robotics & Control Systems | Industrial
          Automation | Research
        </p>

        <div className="mt-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground/60 font-semibold mb-2">
            Select Focus Area
          </p>
          <ProfileSelector />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  )
}
