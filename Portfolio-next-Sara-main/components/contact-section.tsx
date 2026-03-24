import { SectionContainer } from "@/components/section-container"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <SectionContainer id="contact" className="bg-secondary/20">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          centered
          subtitle="I'm always interested in new research opportunities, collaborations, and internships."
        >
          Let's Connect
        </SectionHeading>

        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center gap-6">
            <p className="text-lg text-muted-foreground">
              Feel free to reach out if you'd like to discuss research, projects, or opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="gap-2 w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="mailto:sara.choque.q@uni.pe">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 w-full sm:w-auto hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/sara-karina-choque-quispe-0a75442b4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-4 pt-6 border-t border-border w-full justify-center">
              <Link
                href="https://github.com/sara-karina-choque"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:sara.choque.q@uni.pe"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Send className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
