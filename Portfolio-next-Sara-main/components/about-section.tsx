"use client"

import { SectionContainer } from "@/components/section-container"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, FileText, Instagram } from "lucide-react"
import Link from "next/link"
import { useProfile } from "@/components/profile-context"

export function AboutSection() {
  const { profile } = useProfile()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sara-karina-choque-quispe-0a75442b4",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Morgan123198",
    },
    {
      name: "Resume",
      icon: FileText,
      href: profile === "research" ? "/CV_SaraChoque_Research.pdf" : "/CV_SaraChoque_Industry.pdf",
      download: true,
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/sara.karina.choque/",
    },
  ]

  return (
    <SectionContainer id="about">
      <div className="max-w-4xl mx-auto">
        <SectionHeading centered>About Me</SectionHeading>

        <div className="flex flex-col items-center gap-8 mb-12">
          {/* Profile Image */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
            <img
              src="/foto_perfil_blanco1.jpg"
              alt="Sara Choque"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">Who am I?</h3>

            {profile === "research" ? (
              <>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                  Hello, my name is Sara. I am a 21-year-old, final-year Mechatronics Engineering student with a strong
                  focus on intelligent systems, control, and safety-critical engineering. My main interests include
                  biomedical and medical robotics, neuroengineering, and complex systems where reliability, real-time
                  data, and human-centered design are essential.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
                  I stand out for my fast learning ability, analytical thinking, and creative problem-solving skills, as
                  well as my capacity to perform in high-demand technical environments. I have led multidisciplinary
                  teams in biomedical, robotics, and space-related projects, contributed to international research
                  initiatives, and participated in competitive innovation challenges. I am motivated to apply my
                  background in automation, control, and digital systems within research labs, internships, and
                  industry-driven engineering environments.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                  Hello, my name is Sara. I am a final-year Mechatronics Engineering student at the National University of Engineering (UNI),
                  with a strong technical foundation in control systems, industrial instrumentation, and automation.
                  My professional interests focus on monitoring and control of industrial processes, operational reliability,
                  and the safe and efficient operation of technical systems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
                  Through academic and research-based projects, I have worked on applied solutions involving sensors,
                  signal processing, data acquisition, and control architectures, oriented toward real industrial environments.
                  I am motivated to develop my career in sectors such as energy, mining, and oil & gas, contributing with technical rigor, a continuous improvement mindset, and a strong willingness to learn within multidisciplinary teams.
                </p>
              </>
            )}
          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="lg"
                className="rounded-full gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                asChild
              >
                {link.download ? (
                  <a href={link.href} download>
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </a>
                ) : (
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </Link>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20 text-left">
          {/* Education Section */}
          <div className="space-y-6">
            <h4 className="text-3xl font-bold text-primary">Education</h4>
            <div className="space-y-2">
              <p className="text-xl font-bold text-foreground">Bachelor's Degree in Mechatronics Engineering</p>
              <p className="text-lg text-foreground">Universidad Nacional de Ingeniería (UNI)</p>
              <p className="text-muted-foreground">2022 to Present</p>
            </div>
            <div className="h-px w-12 bg-foreground/20" />
            <ul className="space-y-4 text-muted-foreground">
              <li>Robotics & Autonomous Systems</li>
              <li>Biomedical Engineering & Biomechatronics</li>
              <li>Control Systems Engineering (Classical & Modern Control)</li>
              <li>Finite Element Analysis</li>
              <li>Product Design and Analysis</li>
              <li>Power Electronics</li>
              <li>Sensors and Instrumentation</li>
              <li>Embedded Systems</li>
              <li>Industrial Automation</li>
              <li>Data Communication & Industrial Networks</li>
              <li>Signal Acquisition & Digital Signal Processing</li>
              <li>Industrial Safety & Risk Management</li>
            </ul>
          </div>

          {/* Leadership Section */}
          <div className="space-y-6">
            <h4 className="text-3xl font-bold text-primary">Experience</h4>
            <div className="space-y-2">
              <p className="text-xl font-bold text-foreground">Leadership & Technical Activities</p>
              <p className="text-lg text-foreground">Engineering, Research Initiatives & Outreach Involvement</p>
            </div>
            <div className="h-px w-12 bg-foreground/20" />
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong>Founder & Project Lead – EMILIA</strong>
                <br />
                AI-based Virtual Assistant for Emotional Wellbeing (2025–Present)
              </li>
              <li>
                <strong>Ambassador of Mechatronics Engineering</strong>
                <br />
                National University of Engineering (UNI), 2023
              </li>
              <li>
                <strong>Director of Technical Visits & Events</strong>
                <br />
                IEEE Circuits and Systems Society (CAS) – UNI Student Branch, 2024
              </li>
              <li>
                <strong>Director of Technical Visits & Events</strong>
                <br />
                CEDIM – Center for Development and Research in Mechatronics, 2025
              </li>
              <li>
                <strong>On-Board Computer (OBC) Subsystem Lead</strong>
                <br />
                Chasqui II CubeSat Project
              </li>
              <li>
                <strong>Speaker – Robotics & Educational Programming</strong>
                <br />
                “Nosotras y la Tecnología” Workshop · Huawei & INICTEL-UNI, 2024
              </li>
            </ul>
          </div>
          {/* Honors, Awards & Publications */}
          <div className="space-y-6">
            <h4 className="text-3xl font-bold text-primary">Honors, Awards & Publications</h4>
            <div className="space-y-2">
              <p className="text-xl font-bold text-foreground">
                Selected recognitions, competitive awards, and peer-reviewed conference contributions.
              </p>
            </div>
            <div className="h-px w-12 bg-foreground/20" />
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong>Co-Author – International Conference Paper</strong>
                <br />
                “Comprehensive Methodology and Best Practices for On-Board Computer System Engineering Design”
                <br />
                Presented at the International Astronautical Congress (IAC 2024), Italy
              </li>
              <li>
                <strong>Travel Grant Award of $3300</strong>
                <br />
                IEEE International Conference on Robotics and Automation (ICRA 2025)
                <br />
                Selected participant representing Peru
              </li>
              <li>
                <strong>Travel Grant Award of $2000</strong>
                <br />
                Summit of AI in Latin America (SALA 2026)
                <br />
                Selected participant representing Peru
              </li>
              <li>
                <strong>1st Place & International Honorable Mention</strong>
                <br />
                NASA International Space Apps Challenge – Lambayeque, 2024
                <br />
                Regional winner and only Peruvian team to receive an international Honorable Mention for an educational
                solution with scientific, environmental, and data-driven impact
              </li>
              <li>
                <strong>1st Place – LUPIC Hackathon 2024</strong>
                <br />
                Designed a multifunctional agricultural robot, capable of plowing, seeding, and irrigation, addressing
                climate challenges such as frost, droughts, and El Niño phenomena
              </li>
              <li>
                <strong>2nd Place – DroneTech 2025</strong>
                <br />
                Developed a swarm-drone solution for monitoring the Peruvian Amazon, focused on wildfire prevention,
                illegal mining detection, and deforestation monitoring
              </li>
              <li>
                <strong>Finalist – Make It Happen 2024</strong>
                <br />
                Design and development of EMILIA, an AI-based emotional wellbeing platform for university students
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
