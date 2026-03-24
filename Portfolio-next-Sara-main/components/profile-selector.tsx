"use client"

import { useProfile } from "@/components/profile-context"
import { cn } from "@/lib/utils"

export function ProfileSelector() {
  const { profile, setProfile } = useProfile()

  return (
    <div className="flex justify-center mt-8">
      <div className="inline-flex p-1 bg-secondary/30 rounded-full border border-border/50 backdrop-blur-sm">
        <button
          onClick={() => setProfile("research")}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
            profile === "research"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Research Profile
        </button>
        <button
          onClick={() => setProfile("industry")}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
            profile === "industry"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Industry Profile
        </button>
      </div>
    </div>
  )
}
