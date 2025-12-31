import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({ children, subtitle, className, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{children}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl text-pretty">{subtitle}</p>}
    </div>
  )
}
