import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "PHP", level: 88, category: "Backend" },
  { name: "Laravel", level: 86, category: "Backend" },
  { name: "REST API Development", level: 84, category: "Backend" },
  { name: "MySQL", level: 80, category: "Backend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Next.js", level: 78, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "API Integration", level: 86, category: "Backend" },
  { name: "Responsive Design", level: 95, category: "Design" },
];

const categories = ["Frontend", "Backend", "Tools", "Design"];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group glass rounded-xl p-5 card-hover"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold group-hover:text-accent transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">
                    {skill.category}
                  </span>
                </div>
                <span className="text-sm font-bold text-accent">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                  className="h-full bg-gradient-to-r from-foreground to-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
