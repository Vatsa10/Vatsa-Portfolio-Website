"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Deepfake Video Detection System",
    description:
      "Used Python and various ML and DL models, later fine-tuned to achieve the best accuracy possible. Won 2nd place in a hackathon.",
    tags: ["Python", "Machine Learning", "Deep Learning"],
    githubUrl: "https://github.com/Vatsa10/",
  },
  {
    title: "Event Management App",
    description:
      "SwiftCheckIn revolutionizes event management by simplifying the check-in process with QR codes for seamless event operations.",
    tags: ["Android", "Java", "Firebase"],
    githubUrl: "https://github.com/Vatsa10/Event-Management-and-Ticketing-Android-App",
  },
  {
    title: "AI Resume Builder",
    description:
      "Auto-generates professional resumes efficiently. Built using ReactJS for the frontend and NodeJS for the backend.",
    tags: ["React", "Node.js", "AI"],
    githubUrl: "https://github.com/Vatsa10/Resume-Builder",
  },
  {
    title: "Stonks",
    description: "Stock Analysis and Prediction Dashboard with advanced visualization and forecasting capabilities.",
    tags: ["Python", "Machine Learning", "Data Visualization"],
    githubUrl: "https://github.com/Vatsa10/Stonks",
  },
  {
    title: "Food Ordering Web App",
    description:
      "Full Stack Food Ordering Web App made using PHP, JavaScript and MySQL with user authentication and order tracking.",
    tags: ["PHP", "JavaScript", "MySQL"],
    githubUrl: "https://github.com/Vatsa10/Online-Food-Ordering-System",
  },
  {
    title: "Blockchain Technology",
    description:
      "Research paper exploring blockchain architecture, security mechanisms, and potential applications across industries.",
    tags: ["Blockchain", "Research", "Cryptography"],
    githubUrl: "http://dx.doi.org/10.13140/RG.2.2.32465.75365",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 bg-background px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            Here are some of my recent projects. Each project is unique and solves a specific problem.
            Checkout more cool projects on my Github!
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col bg-card hover:bg-card/80 transition-colors duration-300">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 h-9 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open(project.githubUrl, "_blank", "noopener,noreferrer")
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

