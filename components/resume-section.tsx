"use client"

import { SectionContainer } from "@/components/section-container"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useProfile } from "@/components/profile-context"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export function ResumeSection() {
  const { profile } = useProfile()
  const [activeTab, setActiveTab] = useState<"research" | "industry">("research")

  useEffect(() => {
    setActiveTab(profile)
  }, [profile])

  const resumeData = {
    research: {
      title: "Research CV",
      pdf: "/CV_SaraChoque_Research.pdf",
      preview: "/CV_SaraChoque_Research_preview.jpg", //preview option 1
    },
    industry: {
      title: "Industry CV",
      pdf: "/CV_SaraChoque_Industry.pdf",
      preview: "/CV_SaraChoque_Industry_preview.jpg", //preview option 2
    },
  }

  return (
    <SectionContainer id="resume" className="bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          centered
          subtitle="Download my full resume to learn more about my experience and qualifications."
        >
          Resume
        </SectionHeading>

        <div className="flex flex-col items-center gap-8">
          <div className="flex p-1 bg-card border border-border rounded-lg mb-4">
            <button
              onClick={() => setActiveTab("research")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeTab === "research"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              Research CV
            </button>
            <button
              onClick={() => setActiveTab("industry")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
                activeTab === "industry"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              Industry CV
            </button>
          </div>

          {/* Download Button */}
          <Button
            size="lg"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            asChild
          >
            <a href={resumeData[activeTab].pdf} download>
              <Download className="w-5 h-5" />
              Download {resumeData[activeTab].title}
            </a>
          </Button>

          {/* Resume Preview */}
          <div className="w-full max-w-3xl bg-card rounded-lg shadow-2xl overflow-hidden border border-border">
            <div className="aspect-[8.5/11] relative">
              <img
                src={resumeData[activeTab].preview || "/placeholder.svg"}
                alt={`${resumeData[activeTab].title} preview`}
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-2 gap-6 w-full mt-8">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-3">Technical Skills</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Instrumentation & Control Systems:</strong> Sensors, signal acquisition, basic control loops,
                  P&ID interpretation.
                </li>
                <li>
                  <strong>Industrial Automation:</strong> PLC/HMI programming (IEC 61131-3), TIA Portal, structured
                  programming.
                </li>
                <li>
                  <strong>Industrial Communication:</strong> Modbus TCP/IP, Profibus, MQTT (fundamentals).
                </li>
                <li>
                  <strong>Control & Signal Processing:</strong> Classical and introductory modern control, DSP,
                  filtering, system identification.
                </li>
                <li>
                  <strong>Data Acquisition & Experimental Analysis:</strong> Data traceability, experimental validation,
                  performance indicators.
                </li>
                <li>
                  <strong>Programming & Technical Computing:</strong> Python, MATLAB, C, C++, Java.
                </li>
                <li>
                  <strong>CAD, Modeling & Simulation:</strong> AutoCAD, SolidWorks, ANSYS.
                </li>
                <li>
                  <strong>Data Analysis & Reporting:</strong> Power BI, advanced Excel, technical reporting.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-3">Research & Technical Focus Areas</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Biomedical & Neuro-Engineering Systems (Primary Research Interest)</strong>
                  <br />
                  Rehabilitation robotics, neuroengineering, bio-signal acquisition (EEG, EMG, ECG), non-invasive
                  physiological monitoring, wearable systems, and signal processing with machine learning applications
                  in healthcare.
                </li>
                <li>
                  <strong>Medical Robotics & Human–Machine Interaction</strong>
                  <br />
                  Assistive and rehabilitation robotics, adaptive and compliant control, human-centered system design,
                  haptic systems, motion tracking, and real-time sensing for safe human–robot interaction.
                </li>
                <li>
                  <strong>Automation & Control of Critical Systems</strong>
                  <br />
                  Industrial automation, SCADA systems, distributed control, real-time data acquisition, supervisory
                  control, and digitalization of safety-critical infrastructure (Energy, Mining, Oil & Gas, and
                  Industrial Processes).
                </li>
                <li>
                  <strong>Process Control, Instrumentation & Digital Systems (Exploratory)</strong>
                  <br />
                  Process control, instrumentation, sensor networks, remote monitoring, functional safety, and digital
                  optimization of complex systems in Oil & Gas and industrial environments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
