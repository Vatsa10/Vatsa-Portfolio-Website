import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
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

        <div className="space-y-4 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                  <div>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg text-primary mt-1">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0 md:p-6 md:pt-0 space-y-3 md:space-y-4">
                <p className="text-muted-foreground text-sm md:text-base">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs md:text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Technologies:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

