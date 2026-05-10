import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, GraduationCap, Briefcase, Award, Code, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import frontendCert from "@/assets/frontend-certification.jpeg";
import backendCert from "@/assets/backend-certification.jpeg";

const cvData = {
  education: [
    {
      title: "B.Sc. Computer Science",
      institution: "Ekiti State University, Ado-Ekiti",
      period: "November 2017 - April 2023",
      description: "Graduated with Second Class Upper Division (2.1)",
    },
  ],
  experience: [
    {
      title: "Backend Engineer",
      company: "MOTOPAY",
      period: "January 2026 - Present",
      description: "Building backend systems with PHP Laravel for fintech products, including contributions to Plenti and the ongoing development of the Motobills backend.",
    },
    {
      title: "Full-Stack Web Developer Intern",
      company: "New Horizons Tech Firm",
      period: "May 2024 - December 2025",
      description: "Worked on multiple real-world projects while strengthening both frontend and backend development skills.",
    },
    {
      title: "Computer Science Instructor (NYSC)",
      company: "Ekameta Grammar School, Ijero-Ekiti",
      period: "July 2023 - July 2024",
      description: "Trained students on basic computer logic and design practicals",
    },
  ],
  certifications: [
    {
      name: "Frontend Development Certification",
      image: frontendCert,
      date: "August 2024",
    },
    {
      name: "Backend Development Certification",
      image: backendCert,
      date: "July 2025",
    },
  ],
};

export function CV() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<typeof cvData.certifications[0] | null>(null);

  return (
    <section id="cv" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            My <span className="text-accent">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A summary of my education, experience, and certifications.
          </p>

          {/* Download Button */}
          <Button
            size="lg"
            asChild
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <a href="/Adesanya_Raphael_CV.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            {cvData.education.map((item) => (
              <div key={item.title} className="border-l-2 border-accent/40 pl-4">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-accent">{item.institution}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">
                  {item.period}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              {cvData.experience.map((item) => (
                <div key={item.title} className="border-l-2 border-accent/40 pl-4">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-accent">{item.company}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    {item.period}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-2xl p-6 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                <Award className="h-6 w-6 text-background" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {cvData.certifications.map((cert) => (
                <button
                  key={cert.name}
                  onClick={() => setSelectedCert(cert)}
                  className="group relative overflow-hidden rounded-lg border border-border hover:border-accent/50 transition-all cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-3">
                    <span className="text-xs font-medium">{cert.name.replace(' Certification', '')}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-5 w-5 text-accent" />
                <span className="font-medium">Core Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["PHP", "Laravel", "REST APIs", "MySQL", "JavaScript"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-mono rounded bg-foreground/10 text-foreground"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-3xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{selectedCert.name}</h3>
              <p className="text-muted-foreground">Issued: {selectedCert.date}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
