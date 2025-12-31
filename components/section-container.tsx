import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  id?: string
  className?: string
  fullWidth?: boolean
}

export function SectionContainer({ children, id, className, fullWidth = false }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <div className={cn(!fullWidth && "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>{children}</div>
    </section>
  )
}
