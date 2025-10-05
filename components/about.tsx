import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define the education array
const education = [
  {
    degree: "BTech In Computer Science",
    school: "Navrachana University",
    location: "Vadodara",
    period: "2022 - 2026",
    description: "Specialized in Software Engineering and Artificial Intelligence",
    achievements: [
      "Pursuing a comprehensive curriculum focused on Computer technologies, gaining hands-on experience with advanced algorithms, programming, and data analysis to build cutting-edge machine learning solutions.",
      "Research on Quantum Dot Memory",
      "EfficientNetB7 & BiLSTM For Deepfake Detection",
      "Stable Diffusion VAE for Image Generation"
    ],
  },
  {
    degree: "High School",
    school: "Podar World School",
    location: "Vadodara",
    period: "2020 - 2022",
    description: "PCM",
    achievements: [
      "12th CBSE - 76%",
      "10th CBSE - 81%",
    ],
  },
]

// Define the skills array
const skills = [
  "Python",
  "Tensorflow",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Database",
  "Git",
  "AWS",
  "Docker",
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-background px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="relative aspect-square max-w-xs mx-auto md:mx-0 w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-500 to-white rounded-3xl -rotate-6"></div>
            <div className="absolute inset-0 bg-muted rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nice%20one.jpg-S8kysGDk6Q4sCR4D64xetoh0HPQFvJ.jpeg"
                alt="Vatsa Joshi speaking at Navrachana University"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold">Final Year CSE Graduate | Technology Enthusiast</h3>
            <p className="text-muted-foreground text-sm md:text-base">
            I am currently pursuing a Bachelor of Technology (BTech) in Computer Science at Navrachana University, Vadodara. 
            With a deep curiosity for technology and a passion for solving complex challenges, 
            I enjoy exploring the intricate workings of modern computing. Beyond building technical expertise, 
            I am committed to developing essential skills like effective communication, adaptability, and teamwork—qualities that are crucial in today’s 
            fast-paced tech industry. I thrive on both academic and hands-on learning, always eager to apply engineering principles in real-world scenarios.
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
            Recently, I secured 2nd place in a hackathon, where I worked on a Deep Fake Detection System using AI and ML. 
            This experience reinforced my problem-solving skills and deepened my understanding of cutting-edge technologies. 
            I am always open to new learning opportunities and excited to take on challenges that push my boundaries.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Education</h3>
          <div className="grid gap-4 md:gap-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold">{edu.degree}</h4>
                      <p className="text-primary text-xs md:text-sm">{edu.school}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit text-xs">
                      {edu.period}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 md:p-6 md:pt-0 space-y-3 md:space-y-4">
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                  <div>
                    <h5 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs md:text-sm">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

