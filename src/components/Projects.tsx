import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real Estate Website",
    description:
      "A Real Estate website showcasing properties and services.",
    link: "https://ralph-creator.github.io/LuxEstate/",
    tags: ["React", "TailwindCSS", "JavaScript"],
    color: "from-amber-500 to-purple-500",
  },
  {
    title: "Charity Website",
    description:
      "A donation platform for orphan welfare and entertainment activities. Features easy donation flow and event management.",
    link: "https://ralph-creator.github.io/charity/",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "E-commerce Website",
    description:
      "A furniture sales platform with WhatsApp payment integration. Users can browse products and complete purchases seamlessly.",
    link: "https://ralph-creator.github.io/Furnitureworld/",
    tags: ["HTML", "CSS", "JavaScript", "WhatsApp API"],
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Construction Company Website",
    description:
      "Professional website for a construction company featuring services showcase, quote requests, and enquiry system.",
    link: "https://ralph-creator.github.io/domena-builder/",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Brain Challenge Game",
    description:
      "An interactive quiz game with AI-generated questions, timer functionality, and solution explanations for learning.",
    link: "https://ralph-creator.github.io/brain-challenge/",
    tags: ["JavaScript", "AI", "CSS"],
    color: "from-purple-500 to-violet-500",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="container relative z-10 px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to build them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Gradient Header */}
              <div
                className={`h-32 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                <div className="absolute top-4 right-4">
                  <Folder className="h-8 w-8 text-white/80" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 rounded-lg bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}

          {/* More Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 glass rounded-2xl p-8 text-center card-hover"
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-foreground flex items-center justify-center">
                <Folder className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-2">And Many More Projects...</h3>
              <p className="text-muted-foreground mb-6">
                I've worked on various other projects during my internship and personal learning journey.
                Let's connect and I'll share more about my work!
              </p>
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                <a href="#contact">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
