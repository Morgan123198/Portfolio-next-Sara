import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectsData: Record<
  string,
  {
    title: string
    heroImage: string
    overview: string
    problem: string
    role: string
    tools: string[]
    results: string
    gallery: string[]
  }
> = {
  "autonomous-rover": {
    title: "Industrial Quality Supervision System for Packaging Processes",
    heroImage: "/vista_perfil.jpeg",
    overview:
      "Design and implementation of an industrial quality supervision system for packaging processes, integrating machine vision, instrumentation, PLC-based control, and SCADA supervision. The system enables real-time defect detection, automated decision-making, and full traceability at the production line level.",
    problem:
      "Manual quality inspection in packaging lines is prone to human error, limited scalability, and delayed response to defects. Industrial environments require automated quality supervision systems capable of operating in real time, integrating seamlessly with PLCs and SCADA platforms, and ensuring reliable decision-making under continuous operation.",
    role: "Automation & Control Engineer – Developed PLC control logic using Siemens TIA Portal and Ladder programming, integrated vision-based defect detection models trained with convolutional neural networks (CNNs), and implemented SCADA supervision for real-time monitoring, alarms, and production traceability. Contributed to instrumentation design, signal acquisition, and industrial communication via MQTT, OPC UA, and REST APIs.",
    tools: [
      "Siemens TIA Portal",
      "PLC Programming (Ladder Logic)",
      "SCADA / HMI Systems",
      "Industrial Instrumentation",
      "Python",
      "Convolutional Neural Networks (CNN)",
      "Machine Vision",
      "MQTT",
      "OPC UA",
      "REST API",
      "Edge Deployment",
    ],
    results:
      "Achieved reliable real-time defect detection and automated rejection of defective units directly at the PLC level. The system enabled batch-level traceability, improved inspection consistency, and reduced operator dependency. The project demonstrated a scalable and industry-ready architecture applicable to automated packaging lines in manufacturing, food, and industrial process environments. This project strengthened my expertise in industrial automation, control systems, and digital quality supervision for safety-critical production environments.",
    gallery: [
      "/vista_frontal.jpeg",
      "/vista_perfil.jpeg",
      "/diseño_CAD_faja.jpeg",
      "/lader1.jpg",
      "/lader2.jpg",
    ],
  },
  "bionic-hand": {
    title: "EMILIA – AI-Based Virtual Assistant for Emotional Wellbeing",
    heroImage: "/emilia_team.jpg",
    overview:
      "Design and development of an AI-based virtual assistant focused on supporting the emotional wellbeing of university students. EMILIA combines natural language processing, cognitive behavioral therapy (CBT) principles, and mindfulness techniques within a human-centered conversational system, providing accessible and adaptive emotional support through a scalable digital platform.",
    problem:
      "University students face increasing levels of stress, anxiety, and emotional overload, while access to professional mental health services is often limited, delayed, or economically inaccessible. The challenge was to design an intelligent system capable of offering empathetic, structured, and context-aware emotional support, without replacing professional care, while operating reliably and at scale.",
    role: "Project Lead & Systems Engineer – Led a multidisciplinary team in the design and implementation of the platform architecture, conversational logic, and system workflows. Coordinated technical development, defined system requirements, contributed to AI-driven emotional analysis, and led the preparation of technical documentation, innovation proposals, and MVP development for competitive and incubation programs.",
    tools: [
      "Python",
      "FastAPI",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Natural Language Processing (NLP)",
      "Large Language Models (LLMs)",
      "CBT-Based Conversational Design",
      "Mindfulness-Based Interventions",
    ],
    results:
      "Delivered a functional MVP with a two-phase conversational architecture combining empathetic listening and CBT-based intervention. Preliminary evaluations showed high user engagement, positive reception of structured therapeutic techniques, and reliable real-time system performance. The project was a finalist at Make It Happen 2024 and resulted in an academic publication describing the system architecture, methodology, and initial findings.",
    gallery: [
      "/expo.jpg",
      "https://drive.google.com/file/d/1ehePJYQ7X4YECm1F9LAJsf7lxoGVPAv6/preview",
      "/problematica.jpeg",
      "/emilia1.jpeg",
      "/emilia2.jpeg",
      "/emilia3.jpeg",
      "/emilia_team.jpg",
    ],
  },
  "drone-swarm": {
    title: "Autonomous Drone Swarm for Environmental Monitoring",
    heroImage: "/port_drone.jpeg",
    overview:
      "Conceptual design and technical modeling of a cooperative drone swarm system for autonomous environmental monitoring in the Peruvian Amazon. The project focuses on decentralized coverage strategies, multi-sensor integration, and resilient operation in safety-critical and remote environments.",
    problem:
      "Environmental threats such as deforestation, illegal mining, and wildfires require continuous monitoring over large and hard-to-access areas. Traditional single-drone missions are limited by coverage, autonomy, and failure risk, motivating the need for distributed and fault-tolerant multi-UAV systems.",
    role: "Research & Systems Engineer — Contributed to the system concept, coverage path planning, sensor integration strategy, and mission-level analysis. Participated in the design of decentralized swarm logic, operational protocols, and performance evaluation through simulation.",
    tools: [
      "Python",
      "MATLAB",
      "ROS (conceptual)",
      "GIS-based Mission Planning",
      "Coverage Path Planning Algorithms",
      "UAV Dynamic Modeling (6-DOF)",
      "PID Control",
      "ANSYS (Structural Analysis)",
    ],
    results:
      "Developed and validated a scalable drone swarm concept capable of autonomous area coverage with improved efficiency, redundancy, and fault tolerance. Simulation results demonstrated reduced mission time, increased coverage effectiveness, and resilience to individual UAV failures. The project was awarded 2nd place at DroneTech 2025 for its technical depth and environmental impact.",
    gallery: [
      "https://drive.google.com/file/d/1r37HREAaeeFIKlPThqkzBOpnh-BUyOIE/preview",
      "/drone1.jpg",
      "/expo_1.jpeg",
      "/prize2.jpeg",
      "/drone1.jpeg",
      "/vegetacion.png",
      "/mapa1.jpg",
      "/mapa3.jpg",
    ],
  },
  exoskeleton: {
    title:
      "Design and Dynamic Modeling of a 3-DOF RRP Rehabilitation Robot for Upper-Limb Therapy (Arm, Wrist, and Hand) in Post-Stroke Patients",
    heroImage: "/brazo_2.jpg",
    overview:
      "Design and conceptual development of a robotic rehabilitation system for upper-limb therapy, targeting the arm, wrist, and fingers. The system follows a modular and symmetric design that can be used on both upper limbs and adjusted to different hand sizes, improving accessibility and cost efficiency. The platform enables programmed and repeatable therapy sessions through software-defined rehabilitation routines, supporting remote and assisted therapy scenarios.",
    problem:
      "Conventional rehabilitation therapy is highly dependent on manual assistance and therapist availability, which limits session consistency, intensity, and repeatability. A key challenge was to design a robotic assistance system capable of accurately tracking joint motion while ensuring safety and stability, while also supporting both passive and active therapy modes. The system is required to adapt to the patient’s movement capabilities, providing full assistance during passive rehabilitation and adaptive support during active therapy to help patients complete rehabilitation exercises effectively.",
    role: "Research & Development Team    Member – Contributed to the conceptual 3D design of the exoskeleton structure, performed dynamic modeling of the robotic system, consolidated the state-of-the-art review, and supported the control design through PID gain tuning and coupled joint-space tracking using inverse dynamics techniques. It that adjusts assistance based on patient capability.",
    tools: [
      "SolidWorks",
      "MATLAB / Simulink",
      "PID Control",
      "Inverse Dynamics",
      "Dynamic Modeling",
      "Motion Tracking",
      "Real-time Control",
    ],
    results:
      "A functional prototype and validated dynamic model were achieved. The control strategy demonstrated stable joint-space tracking performance in simulation, supporting safe and smooth motion. The project established a solid foundation for future experimental validation and clinical-oriented control strategies. This project strengthened my interest in rehabilitation robotics and human-centered control systems, motivating further research in biomedical and neuro-engineering applications.",
    gallery: [
      "/brazo_1.jpg",
      "https://drive.google.com/file/d/1e9MplhIvkjInbMLTQb5Yx1YU_8McRmG3/preview",
      "/brazo_CAD.jpg",
      "/brazo_2.jpg",
      "/cinematica_brazo.jpg",
      "/ensamble_brazo.jpg",
      "/PID.jpeg",
      "/pcb_colector.jpg",
    ],
  },
  satellite: {
    title: "On-Board Computer Architecture for Chasqui II Nanosatellite",
    heroImage: "/cubesat-small-satellite-development-project.jpg",
    overview:
      "Contribution to the system engineering and architectural design of the On-Board Computer (OBC) subsystem for the Chasqui II nanosatellite. The project focused on defining robust hardware and software architectures, operational modes, and subsystem integration strategies for reliable CubeSat mission execution under space and safety-critical constraints.",
    problem:
      "The OBC subsystem is responsible for coordinating all nanosatellite operations, including communication, data handling, fault management, and interaction with payload and platform subsystems. A key challenge was to design an architecture that ensures reliability, modularity, and maintainability while operating under strict constraints on power, processing capability, thermal conditions, and fault tolerance.",
    role: "Systems Engineering Team Member – Supported the design and technical review of the OBC hardware and software architectures, contributed to the definition of operational modes and telecommands, and participated in the conceptual design of the thermal control strategy. Assisted in defining subsystem requirements and interfaces to ensure correct communication and integration with EPS, ADCS, TT&C, and Payload subsystems. Contributed to the evaluation and selection of flight software frameworks, including the NanoSat MO Framework (NMF).",
    tools: [
      "Systems Engineering Methodology",
      "Embedded Systems Architecture",
      "Operational Modes Design",
      "NanoSat MO Framework (NMF)",
      "FreeRTOS (conceptual)",
      "CCSDS Mission Operations Concepts",
      "Hardware–Software Co-Design",
      "Subsystem Interface Definition",
    ],
    results:
      "A consistent and scalable OBC architectural design was achieved, incorporating clearly defined operational modes (boot, deployment, safe, nominal, transmitting) and well-structured subsystem interfaces. The work contributed to a peer-reviewed conference paper presented at the International Astronautical Congress (IAC 2024), documenting best practices and lessons learned from the Chasqui II nanosatellite development.",
    gallery: [
      "/expo_cubesat.jpg",
      "/arquit.jpg",
      "/paper_cubesat.jpg",
    ],
  },
  "surgical-robot": {
    title: "3-DOF Spherical Robotic Manipulator for Automated Part Collection in Lathes",
    heroImage: "/brazo-fisico.jpg",
    overview:
      "Design and engineering of a 3-degree-of-freedom spherical robotic manipulator intended for automated collection of machined parts in small-scale and independent lathe operations. The system captures the part immediately after machining and transfers it to a designated container, reducing coolant splash, chip accumulation, and operator exposure.",
    problem:
      "In small and medium-scale lathe operations, machined parts are often collected manually after falling near the cutting zone, exposing operators to coolant, metal chips, and repetitive handling tasks. Unlike large-scale automated lathes, these machines lack integrated part collection systems, creating safety, hygiene, and efficiency challenges.",
    role: "Robotics Engineering Team Member – Contributed to the kinematic modeling of the 3-DOF spherical manipulator, including direct and inverse kinematics formulation and joint-space trajectory tracking. Supported mechanical CAD design, PCB layout design, and definition of electronic component requirements. Participated in control-oriented design decisions and system integration considerations.",
    tools: [
      "Kinematic Modeling",
      "Forward & Inverse Kinematics",
      "Trajectory Tracking",
      "MATLAB",
      "SolidWorks",
      "PCB Design",
      "Arduino-Based Control",
      "DC Motors",
    ],
    results:
      "A complete mechanical, electronic, and kinematic design of a low-cost spherical robotic manipulator was achieved. The system demonstrated feasible workspace coverage for part pickup and placement in turret-type automatic lathes, providing a safer and more ergonomic solution for small-scale machining environments. The project highlights the applicability of robotic automation beyond high-volume industrial production lines.",
    gallery: [
      "/brazo-fisico.jpg",
      "/diseño-cad-brazo.jpg",
      "/interfaz-brazo.jpg",
      "https://drive.google.com/file/d/1acQJ4QCDEGUymigCUwtiLHqO67y0gN7M/preview",
      "https://drive.google.com/file/d/1pTuJLeaM6QxfcEymnLFojq6oubdnoTOW/preview",
      "https://drive.google.com/file/d/18ETdvauxz-euVKjzsx_sJS7BPYB_tJJr/preview",
    ],
  },
  "agricultural-robot-iot": {
    title: "IoT-Enabled Collaborative Agricultural Robot for Smart Farming Applications",
    heroImage: "/hack-award.jpg",
    overview:
      "Design and conceptual development of an IoT-enabled collaborative agricultural robot aimed at supporting small and medium-scale farmers through assisted seeding, irrigation, and crop monitoring. The system integrates a mobile robotic platform with a user-centered application and wireless communication, enabling intuitive remote operation, data acquisition, and task programming within a smart farming framework.",
    problem:
      "Agricultural production faces challenges such as labor shortages, inefficient resource usage, and limited access to automation technologies, particularly for small and medium farmers. There is a growing need for affordable, connected, and easy-to-use robotic systems that combine automation with real-time data to improve productivity and sustainability without replacing human labor.",
    role: "Robotics & IoT Systems Team Member – Contributed to the definition of the system problem and solution approach. Designed and implemented the mobile application and human–robot interface for robot control, enabling task execution and monitoring via Bluetooth and IoT-based communication. Supported system-level design decisions related to usability, connectivity, and data-driven operation, and participated in the conceptual design of the overall robotic and IoT architecture.",
    tools: [
      "Arduino",
      "Bluetooth Communication",
      "IoT Architecture Design",
      "Mobile Application Development",
      "Human–Robot Interface Design",
      "Embedded Systems",
      "Environmental & Soil Sensors",
      "Wireless Data Acquisition",
    ],
    results:
      "The project resulted in a functional IoT-enabled robotic concept demonstrating the feasibility of low-cost smart farming solutions. The system enabled remote operation, sensor-based monitoring, and improved task efficiency. The solution was awarded 1st Place at the LUPIC Hackathon 2024, jointly organized by the National University of Engineering (UNI) and Seoul National University of Science and Technology, recognizing its innovation, technical feasibility, and impact on agricultural productivity in Peru and South Korea.",
    gallery: [
      "/hack-award.jpg",
      "/agricultural-robot-chassis.jpg",
      "/prototipo.jpg",
      "/agricultural-robot-solar.jpg",
      "/hack-banner.jpg",
      "/hack-team.jpg",
    ],
  },
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectsData[id]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Button variant="ghost" className="gap-2 hover:bg-transparent hover:text-primary" asChild>
          <Link href="/#projects">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={project.heroImage || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.overview}</p>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Problem / Motivation</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
        </section>

        {/* Role */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">My Role</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.role}</p>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Results / Learnings</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.results}</p>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((item, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden bg-muted border border-border">
                {item.includes("drive.google.com") ? (
                  <iframe src={item} className="w-full h-full border-0" allow="autoplay" allowFullScreen />
                ) : (
                  <img
                    src={item || "/placeholder.svg"}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
