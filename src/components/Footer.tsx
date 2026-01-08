import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/raphaelayomide232", label: "Instagram" },
  { icon: Github, href: "https://github.com/ralph-creator", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4">
        <div className="text-center">
          {/* Motivational Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto mb-8"
          >
            "I look forward to working with interested people and firms — let's
            grow and build together."
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <span className="text-2xl font-bold font-serif text-foreground">RA</span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted-foreground flex items-center justify-center gap-1"
          >
            © {currentYear} Raphael Adesanya. Made with{" "}
            <Heart className="h-4 w-4 text-accent inline" fill="currentColor" /> in Nigeria
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
