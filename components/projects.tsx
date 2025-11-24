"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Rustformer",
    description: "Transformer Architecture From Scratch In Rust",
    tags: ["Rust", "Machine Learning", "Deep Learning", "Transformers"],
    githubUrl: "https://github.com/Vatsa10/Rustformer",
  },
  {
    title: "Multi Agentic Appointment Booking System",
    description:
      "Multi Agent Appointment Booking System - 3 Core Agents (Orchestrator Agent, Database Agent, and Notification Agent), on succesful appointment, the appointment gets added in spreadhseet and the confirmation gets sent by email.",
    tags: ["Python", "GenAI", "LLM", "Flask", "AI-Agents", "Chatbot", "Sqlite"],
    githubUrl: "https://github.com/Vatsa10/Booky",
  },
  {
    title: "Stock Analysis Agent",
    description: "A multi-agent system for stock market analysis and insights generation. Currently in further development.",
    tags: ["Python", "GenAI", "LLM", "AI-Agents", "Stock Market", "Finance"],
    githubUrl: "https://github.com/Vatsa10/stock-agent",
  },
  {
    title: "Ecommerce Agent",
    description: "Multi-agent LLM-powered shopping assistant built with LangGraph that helps users discover products, compare prices, and make informed purchase decisions through WhatsApp.",
    tags: ["Python", "GenAI", "LLM", "LangGraph", "E-commerce", "WhatsApp"],
    githubUrl: "https://github.com/Vatsa10/ecomm-agent",
  },
  {
    title: "Multi Agent Finance Advisor",
    description: "Transform any financial document into actionable intelligence using advanced multi agent system with RAG (Retrieval-Augmented Generation). Analyze quarterly reports, SEC filings, 10-K/10-Q forms, earnings transcripts, and annual reports from companies worldwide.",
    tags: ["Python", "GenAI", "LLM", "RAG", "Finance", "Document Analysis"],
    githubUrl: "https://github.com/Vatsa10/Financial-Analyzer",
  },
  {
    title: "Email AI Agent",
    description: "A simple retrieval augmented generation (RAG) system that lets you collect emails, upload documents, generate embeddings, and chat with GPT to extract useful information from your data.",
    tags: ["Python", "GenAI", "LLM", "RAG", "Email", "GPT"],
    githubUrl: "https://github.com/Vatsa10/email-ai-agent",
  },
  {
    title: "WebRAG - Web-based RAG System",
    description:
      "An intelligent assistant that performs real-time web search, scrapes information, and allows users to ask questions about the fetched content using Retrieval-Augmented Generation (RAG) powered by Groq LLMs, LangChain, and Serper API.",
    tags: ["Python", "GenAI", "LLM", "LangChain", "Web Scraping"],
    githubUrl: "https://github.com/Vatsa10/WebRAG",
  },
    {
    title: "Fine-tuned Gemma 3",
    description: "I fine-tuned Gemma 3 (4B) using Unsloth and LORA config on the FineTome-100k dataset by mlabonne to enhance its instruction-following capabilities, used Hugging Face Transformers on Google Colab, exploring model customization and performance optimization",
    tags: ["Python", "Machine Learning", "Deep Learning", "Fine-tuning", "Gemma", "Unsloth", "LORA", "Hugging Face"],
    githubUrl: "https://github.com/Vatsa10/Gemma3-Finetune",
  },
  {
    title: "See My Plan",
    description:
      "Visualize Architecture Plan with AI, build with Gemini and React. User uploads an architecture plan and the AI visualizes it. For image egenration, I leveraged Google's new SoTA Nano Banana model.",
    tags: ["React", "GenAI", "LLM", "AI-Agent"],
    githubUrl: "https://ai.studio/apps/drive/1or9hzJuq9eRrw-lB37j8fS4BTHfh3zw2",
  },
  {
    title: "Flash-Banana: AI-Powered Creative Suite",
    description:
      "Flash-Banana is an advanced web application built with Next.js that harnesses Google's Gemini and Genkit to deliver a powerful AI-driven creative workflow. This comprehensive solution streamlines the process of image editing and advertisement creation through natural language processing.",
    tags: ["Next.js", "GenAI", "LLM", "Genkit", "AI-Agents"],
    githubUrl: "https://github.com/Vatsa10/flash-banana",
  },
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

