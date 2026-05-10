import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Code } from "lucide-react";

const timeline = [
  {
    year: "2017",
    title: "Started Computer Science",
    description: "Joined Ekiti State University, Ado-Ekiti to study Computer Science",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Graduated with 2.1",
    description: "Completed B.Sc. Computer Science with Second Class Upper Division on April 11th, 2023",
    icon: Award,
  },
  {
    year: "2023-2024",
    title: "NYSC Service",
    description: "Served at Ekameta Grammar School, Ijero-Ekiti. Trained students on basic computer logic and design practicals",
    icon: Briefcase,
  },
  {
    year: "2024-2025",
    title: "Tech Career Launch",
    description: "Joined New Horizons Tech Firm as a Full-Stack Web Developer Intern and obtained Frontend and Backend certifications",
    icon: Code,
  },
  {
    year: "2026",
    title: "Joined MOTOPAY",
    description: "Started working as a Backend Engineer at MOTOPAY, contributing to the Plenti e-commerce platform and the Motobills backend with PHP Laravel",
    icon: Briefcase,
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-bg opacity-50" />

      <div className="container relative z-10 px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey from a curious student to a passionate developer,
            constantly learning and building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Raphael Adesanya, a passionate Full-Stack Web Developer with a
                strong foundation in Computer Science from Ekiti State University.
                My journey in tech has been driven by curiosity and a desire to
                create impactful digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                During my NYSC at Ekameta Grammar School, I discovered my love for
                teaching by training students on basic computer logic and design
                practicals. This experience shaped my ability to break down
                complex concepts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since January 2026, I've been working at MOTOPAY, a fintech
                company, as a Backend Engineer. My recent work has focused on
                building and improving backend systems with PHP Laravel,
                including contributions to Plenti and the ongoing development of
                the Motobills backend.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-foreground/30 to-accent/20" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-xl bg-foreground flex items-center justify-center shadow-lg">
                    <item.icon className="h-7 w-7 text-background" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass rounded-xl p-5 card-hover">
                    <span className="text-sm font-mono text-accent">
                      {item.year}
                    </span>
                    <h4 className="font-semibold mt-1 mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
