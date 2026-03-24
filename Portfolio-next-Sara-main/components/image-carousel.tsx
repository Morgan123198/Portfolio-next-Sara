"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/icra_Sara.jpeg",
    alt: "Sara at the IEEE International Conference on Robotics and Automation (ICRA) 2025 in Atlanta",
  },
  {
    src: "/expo_1.jpeg",
    alt: "Expo en Expodrone",
  },
  {
    src: "/expo_carrusel.jpeg",
    alt: "Exposición de CEDIM en rebirth",
  },
  {
    src: "/prize2.jpeg",
    alt: "Premio de hackatone de drones",
  },
  {
    src: "/expo_huawei1.jpg",
    alt: "Nosotras y la tecnologia",
  },
  {
    src: "/huawei_prize1.jpg",
    alt: "Premiacion de Nosotras y la tecnologia",
  },
  {
    src: "/IDEA_prize.jpg",
    alt: "condecoracion IDEA",
  },
  {
    src: "/emilia_team.jpg",
    alt: "Collaborating with peers on space systems development",
  },
]

export function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    ref?.addEventListener("scroll", checkScroll)
    return () => ref?.removeEventListener("scroll", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-2 bg-secondary/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          {canScrollLeft && (
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 text-white hover:scale-110"
              onClick={() => scroll("left")}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-12 h-12 stroke-[1px]" />
            </button>
          )}
          {canScrollRight && (
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 text-white hover:scale-110"
              onClick={() => scroll("right")}
              aria-label="Next slide"
            >
              <ChevronRight className="w-12 h-12 stroke-[1px]" />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] aspect-[16/9] rounded-sm overflow-hidden snap-center shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
