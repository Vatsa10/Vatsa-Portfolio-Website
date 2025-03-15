"use client"
import { WavyBackground } from "@/components/ui/wavy-background"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function Hero() {
  const handleResumeClick = () => {
    // Open resume in a new tab directly
    window.open(
<<<<<<< HEAD
      "https://drive.google.com/file/d/1jQCaDelvcPrIqaTYD0Lmua6x6Eu4UScy/view?usp=sharing",
=======
      "https://drive.google.com/file/d/1SFUQ1Ppn1Hh1Ga9kQ45oBDyL09YvoXN5/view?usp=sharing",
>>>>>>> 0a7a8b8 (new resume file upload)
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <section id="home" className="relative min-h-screen">
      <WavyBackground
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
        waveWidth={50}
        backgroundFill="#000"
        blur={10}
        speed="fast"
        waveOpacity={0.5}
        className="max-w-4xl mx-auto px-4 py-24 md:py-32"
        containerClassName="min-h-screen"
      >
        <div className="text-center space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Vatsa Joshi
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
          Passionate About Tech, Driven by Innovation.
          </p>
          <div className="flex justify-center pt-6">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-base" onClick={handleResumeClick}>
              <FileText className="mr-2 h-5 w-5" />
              Resume Spotlight
            </Button>
          </div>
        </div>
      </WavyBackground>
    </section>
  )
}

