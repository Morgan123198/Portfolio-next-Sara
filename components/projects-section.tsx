"use client"

import { SectionContainer } from "@/components/section-container"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useProfile } from "@/components/profile-context"

const projects = [
  {
    id: "autonomous-rover",
    title: "Industrial Quality Supervision System",
    descriptions: {
      research:
        "Integration of machine vision and PLC-based control for real-time defect detection in packaging processes.",
      industry:
        "Developed a scalable SCADA supervision system for automated quality inspection and production traceability.",
    },
    image: "/diseño_CAD_faja.jpeg",
  },
  {
    id: "bionic-hand",
    title: "EMILIA – AI Virtual Assistant",
    descriptions: {
      research: "Leveraging NLP and CBT principles to provide adaptive emotional support for university students.",
      industry:
        "Built a scalable FastAPI and React-based conversational platform for high-engagement mental health support.",
    },
    image: "/app_portada.jpg",
  },
  {
    id: "agricultural-robot-iot",
    title: "IoT Collaborative Agricultural Robot",
    descriptions: {
      research:
        "Design of an IoT robotic platform for smart farming, integrating soil sensors and wireless data acquisition.",
      industry:
        "Engineered a connected robotic system for assisted seeding and monitoring, awarded 1st Place at LUPIC Hackathon.",
    },
    image: "/agricultural-robot-chassis.jpg",
  },
  {
    id: "drone-swarm",
    title: "Autonomous Drone Swarm",
    descriptions: {
      research: "Decentralized coverage strategies and multi-sensor integration for remote environmental monitoring.",
      industry:
        "Fault-tolerant multi-UAV system design for resilient operation in large-scale environmental surveillance.",
    },
    image: "/portada_card.jpg",
  },
  {
    id: "exoskeleton",
    title: "3-DOF RRP Rehabilitation Robot",
    descriptions: {
      research:
        "Dynamic modeling and joint-space tracking for a modular rehabilitation exoskeleton for post-stroke therapy.",
      industry:
        "Designed an adjustable robotic assistance system for upper-limb therapy with real-time feedback control.",
    },
    image: "/brazo_1.jpg",
  },
  {
    id: "satellite",
    title: "On-Board Computer Architecture",
    descriptions: {
      research: "Architectural design and operational mode definition for the Chasqui II CubeSat mission.",
      industry: "System engineering for safety-critical OBC firmware using FreeRTOS and NanoSat MO Framework.",
    },
    image: "/cubesat-small-satellite-development-project.jpg",
  },
  {
    id: "surgical-robot",
    title: "3-DOF Spherical Robotic Manipulator",
    descriptions: {
      research: "Kinematic modeling and trajectory tracking for precision automated part collection in lathes.",
      industry:
        "Low-cost robotic automation for small-scale machining environments, improving operator safety and hygiene.",
    },
    image: "/brazo-fisico.jpg",
  },
]

export function ProjectsSection() {
  const { profile } = useProfile()

  return (
    <SectionContainer id="projects" className="bg-secondary/20">
      <div className="mt-4 text-center mx-auto max-w-2xl text-muted-foreground">
        <SectionHeading 
          centered
          subtitle="Explore my technical projects in robotics, biomedical engineering, control & automation and space systems"
        >
          Projects & Leadership
        </SectionHeading>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                {project.descriptions[profile]}
              </p>
              <Button variant="ghost" className="gap-2 px-0 hover:bg-transparent hover:text-primary" asChild>
                <Link href={`/projects/${project.id}`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
