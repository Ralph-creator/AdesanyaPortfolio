import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10 px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-xl" />
              <img
                src={profilePhoto}
                alt="Raphael Adesanya"
                className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="w-3 h-3 bg-background rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-serif"
          >
            Raphael{" "}
            <span className="text-accent">Adesanya</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 tracking-wide"
          >
            FullStack Developer | Laravel Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build reliable FullStack systems and production-ready web products
            with PHP Laravel and React from fintech billing workflows to e-commerce
            platforms used by real customers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="group bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg transition-all"
            >
              <a href="#projects">
                <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="group text-accent hover:text-accent hover:bg-accent/10"
            >
              <a href="/Adesanya_Raphael_CV.pdf" download>
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
