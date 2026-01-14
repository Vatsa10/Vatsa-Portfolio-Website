import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const experiences = [
  {
    title: "Founders OfficeSoftware Engineer - 1",
    company: "Promact, Vadodara",
    period: "Jan 2026 - Present",
    description:
      "Working on client-facing and internal engineering initiatives under the Founders Office.",
    skills: ["Applied AI", "Intelligent Systems", "Software Architecture"],
    achievements: [
      "Contributing to the development and delivery of production-ready software solutions involving applied AI and intelligent system components",
      "Collaborating on internal engineering initiatives under the Founders Office",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Hiraeth Tech, Vadodara",
    period: "Jun 2025 - Dec 2025",
    description:
      "Contributed full-stack expertise by developing and maintaining both frontend interfaces and backend APIs, ensuring seamless integration and user experience.",
    skills: ["NestJS", "Node.js", "Next.js", "PostgreSQL", "LLM", "Vector Search", "RESTful API"],
    achievements: [
      "Leveraging frameworks and libraries such as NestJS, Node.js, Next.js and PostgreSQL to build efficient, maintainable products",
      "Integrated LLM-based services and vector search into the web stack, enabling intelligent, context-aware features for end users",
      "Managing version control, database integration, and RESTful API development for various projects",
    ],
  },
  {
    title: "Deep Learning Intern",
    company: "Prodigal AI, Delhi",
    period: "March 2025 - May 2025",
    description:
      "Specialized in deep learning research and implementation, focusing on neural network architectures and computer vision applications under expert supervision.",
    skills: ["Python", "TensorFlow", "PyTorch", "Keras", "Computer Vision", "Neural networks", "CNN", "RNN", "NLP"],
    achievements: [
      "Implemented convolutional neural networks for image classification tasks achieving 92% accuracy",
      "Built and fine-tuned transformer models for natural language processing applications",
      "Developed deep learning pipelines for real-time object detection using YOLO and SSD frameworks",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "Sparks To Ideas, Ahmedabad",
    period: "Feb 2025 - April 2025",
    description:
      "Collaborated with cross-functional teams to integrate AI/ML solutions into real-world applications.",
    skills: ["Tensorflow", "Github", "LLM", "PyTorch", "Data Analysis"],
    achievements: [
      "Made an AI chatbot",
      "Trained XGboost for customer churn prediction with 95% accuracy",
    ],
  },
  {
    title: "Summer Intern",
    company: "PAM Infotech, Vadodara",
    period: "May 2024 - July 2024",
    description:
      "Gained hands-on experience in backend architecture and debugging processes.",
    skills: ["Java", "J2EE", "Node.js", "Spring", "DBMS"],
    achievements: [
      "Backend development using Java.",
      "Developed and optimized server-side functionalities to enhance application performance",
      "Led the migration of legacy systems to modern tech stack",
    ],
  },
  {
    title: "Web Application Developer Intern,",
    company: "Jeenweb Technologists",
    period: "May 2023 - July 2023",
    description:
      "Assisted in the development of web applications and gained hands-on experience with modern web technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    achievements: [
      "Designing and developing user-friendly web applications.",
      "Worked on frontend and backend integration to deliver seamless and responsive userexperiences.",
      "Collaborated with the team to troubleshoot issues and optimize application performance",
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-16 md:py-32 bg-background px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4 text-sm md:text-base">
            My professional journey and achievements in the tech industry.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {experiences.map((exp, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex flex-col md:flex-row md:items-center text-left w-full gap-2 pr-4 justify-between">
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl">{exp.title}</h3>
                      <p className="text-sm md:text-base text-primary/80">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit text-xs whitespace-nowrap">
                      {exp.period}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm md:text-base">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs md:text-sm">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

