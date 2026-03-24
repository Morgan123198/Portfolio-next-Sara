"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ProfileType = "research" | "industry"

interface ProfileContextType {
  profile: ProfileType
  setProfile: (profile: ProfileType) => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileType>("research")

  return <ProfileContext.Provider value={{ profile, setProfile }}>{children}</ProfileContext.Provider>
}

export function useProfile() {
  const context = useContext(ProfileContext)
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider")
  }
  return context
}
