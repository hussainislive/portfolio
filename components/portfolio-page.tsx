"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  Moon,
  Smartphone,
  SunMedium,
  TerminalSquare,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type Skill = {
  name: string;
  level: number;
  icon: LucideIcon;
  summary: string;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  live: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" }
];

const roles = [
  "Full-Stack MERN Developer",
  "Next.js Product Builder",
  "React Native App Developer"
];

const skills: Skill[] = [
  {
    name: "React + Next.js",
    level: 94,
    icon: Code2,
    summary: "Building performant, SEO-first web apps with clean component architecture."
  },
  {
    name: "Node.js + Express",
    level: 91,
    icon: TerminalSquare,
    summary: "Designing scalable APIs, auth flows, and secure backend services."
  },
  {
    name: "MongoDB + Mongoose",
    level: 89,
    icon: Database,
    summary: "Modeling document databases with reliable indexing and schema strategy."
  },
  {
    name: "React Native",
    level: 86,
    icon: Smartphone,
    summary: "Shipping cross-platform mobile experiences with native-like UX."
  },
  {
    name: "Cloud + DevOps",
    level: 80,
    icon: Cloud,
    summary: "Deploying production apps with CI workflows and monitoring in place."
  },
  {
    name: "Web Performance",
    level: 88,
    icon: Globe,
    summary: "Improving Core Web Vitals through audits, caching, and optimizations."
  }
];

const projects: Project[] = [
  {
    title: "WebTechlo",
    description:
      "Business website with modern service presentation, conversion-focused sections, and responsive layout.",
    stack: ["React", "Tailwind CSS", "Responsive UI"],
    image: "/projects/webtechlo.png",
    live: "https://webtechlo.netlify.app/"
  },
  {
    title: "Abundant Visas",
    description:
      "Visa and immigration platform with clear service flows, trust-building content, and lead-friendly UX.",
    stack: ["Next.js", "SEO", "Service Website"],
    image: "/projects/abundant-visas.png",
    live: "https://www.abundantvisas.com/"
  },
  {
    title: "Placeyo",
    description:
      "Product-focused web experience designed for fast browsing, clean navigation, and polished visual identity.",
    stack: ["React", "Web Performance", "UI/UX"],
    image: "/projects/placeyo.png",
    live: "https://placeyo.com"
  },
  {
    title: "CourseZilla",
    description:
      "Learning-focused platform concept with content-first layout and scalable sections for future courses.",
    stack: ["Landing Page", "Content Blocks", "Scalable UI"],
    image: "/projects/app.webp",
    live: "https://google.com"
  }
];

const techStack = [
  { name: "React.js", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/111111" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "Express.js", logo: "https://cdn.simpleicons.org/express/111111" },
  { name: "NestJS", logo: "https://cdn.simpleicons.org/nestjs/E0234E" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "SQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/111111" },
  { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/111111" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" }
];

const testimonials: Testimonial[] = [
  {
    name: "Sana Tariq",
    role: "Product Manager",
    quote:
      "Hussain shipped our MVP ahead of schedule and improved onboarding conversion with thoughtful UX changes."
  },
  {
    name: "Ali Raza",
    role: "Startup Founder",
    quote:
      "He translates product ideas into production-ready features quickly, with clean architecture and clear communication."
  },
  {
    name: "Mina Azhar",
    role: "Engineering Lead",
    quote:
      "His Next.js and API work was fast, stable, and easy for our team to maintain after handoff."
  }
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/hussainislive", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hussainislive/", icon: Linkedin },
  { label: "Email", href: "mailto:developer.hussain125@gmail.com", icon: Mail }
];

const resumeCandidates = [
  "/Hussain-Ahmed.pdf",
  "/Hussain Ahmed.pdf",
  "/Hussain-Ahmed.docx",
  "/Hussain Ahmed.docx"
];

const whatsappHref = "https://wa.me/923229817456";
const formspreeEndpoint = "https://formspree.io/f/mbdzwojp";

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const atEnd = subIndex === current.length;
    const atStart = subIndex === 0;

    const timeout = atEnd && !deleting ? 1250 : atStart && deleting ? 460 : deleting ? 40 : 80;

    const timer = window.setTimeout(() => {
      if (!deleting && atEnd) {
        setDeleting(true);
        return;
      }

      if (deleting && atStart) {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, timeout);

    return () => window.clearTimeout(timer);
  }, [deleting, subIndex, wordIndex, words]);

  return `${words[wordIndex].slice(0, subIndex)}|`;
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

export function PortfolioPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [resumeHref, setResumeHref] = useState("/Hussain-Ahmed.pdf");

  const typedRole = useTypewriter(roles);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.18 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const fromStorage = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = fromStorage ? fromStorage === "dark" : prefersDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    const slider = window.setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4700);

    return () => window.clearInterval(slider);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";
  }, [mobileOpen]);

  useEffect(() => {
    let active = true;

    const resolveResume = async () => {
      for (const candidate of resumeCandidates) {
        try {
          const response = await fetch(candidate, { method: "HEAD" });
          if (response.ok) {
            if (active) {
              setResumeHref(candidate);
            }
            return;
          }
        } catch {
          // Keep trying other candidate paths/extensions.
        }
      }
    };

    void resolveResume();

    return () => {
      active = false;
    };
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const handleContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setFormError("");
    setSent(false);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      form.reset();
      setSent(true);
    } catch {
      setFormError("Message failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const year = new Date().getFullYear();

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-sky-500 via-cyan-500 to-orange-400"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`container-wrap transition-all duration-300 ${
            scrolled
              ? "rounded-2xl glass shadow-card"
              : "rounded-none border-b border-transparent bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#hero" className="font-display text-lg font-semibold tracking-wide md:text-xl">
              Hussain <span className="text-accent">A</span>
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm font-medium text-textMuted transition hover:text-textMain"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/60 text-textMain transition hover:-translate-y-0.5 hover:border-accent/70 dark:border-white/15 dark:bg-surfaceAlt"
              >
                {mounted && isDark ? <SunMedium size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="#contact"
                className="hidden rounded-full bg-textMain px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent dark:bg-accent dark:text-slate-950 md:inline-block"
              >
                Let&apos;s Talk
              </a>

              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Open menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/60 lg:hidden dark:border-white/15 dark:bg-surfaceAlt"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ y: -22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -22, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="glass mx-4 mt-24 rounded-2xl p-6"
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-textMain transition hover:bg-accentSoft"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="hero" className="container-wrap relative min-h-screen pt-36 md:pt-44 lg:min-h-[80vh]">
          <div className="grid items-center gap-12 pb-14 lg:pb-2 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accentSoft/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:bg-accentSoft/35">
                Available for freelance + remote roles
              </p>

              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Hussain Ahmed
                <span className="block text-2xl font-medium text-textMuted md:text-4xl">aka Hussain A</span>
              </h1>

              <p className="mt-6 font-mono text-base text-accent md:text-lg">{typedRole}</p>

              <p className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-textMuted md:text-lg">
                I design and ship polished web and mobile products using the MERN stack, Next.js, and
                React Native. My focus is fast performance, clean UX, and scalable architecture that
                supports real business growth.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={resumeHref}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-textMain px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent dark:bg-accent dark:text-slate-950"
                >
                  Download Resume <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-textMain transition hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accentSoft dark:border-white/15"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="glass relative overflow-hidden rounded-[2rem] p-8 shadow-card">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />
                <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-orange-300/30 blur-3xl" />

                <div className="relative">
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl font-bold text-white shadow-xl">
                    <Image className="rounded-full"
                      src="/profile.PNG"
                      alt="Hussain Ahmed" width={200} height={100} />
                  </div>
                  <h3 className="mt-6 text-center font-display text-2xl font-semibold">Full-Stack Engineer</h3>
                  <p className="mt-2 text-center text-sm text-textMuted">Next.js • MERN • React Native</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-white/65 p-3 dark:bg-surface/60">
                      <p className="font-display text-xl font-semibold">2+</p>
                      <p className="text-xs text-textMuted">Years</p>
                    </div>
                    <div className="rounded-xl bg-white/65 p-3 dark:bg-surface/60">
                      <p className="font-display text-xl font-semibold">25+</p>
                      <p className="text-xs text-textMuted">Projects</p>
                    </div>
                    <div className="rounded-xl bg-white/65 p-3 dark:bg-surface/60">
                      <p className="font-display text-xl font-semibold">14</p>
                      <p className="text-xs text-textMuted">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="container-wrap py-20 md:py-24 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="glass rounded-3xl p-7 md:p-10"
          >
            <SectionHeader
              title="About Me"
              description="I am Hussain Ahmed, a full-stack developer focused on turning complex product requirements into elegant, maintainable systems."
            />

            <div className="mt-9 grid gap-8 md:grid-cols-2">
              <p className="text-sm leading-relaxed text-textMuted md:text-base">
                I started with frontend development and quickly expanded into backend engineering to
                build complete products end-to-end. Today, I work across UI architecture, API design,
                data modeling, and deployment workflows to ship production-ready applications.
              </p>
              <p className="text-sm leading-relaxed text-textMuted md:text-base">
                My development style combines speed with reliability: rapid iteration during prototyping,
                then focused hardening around performance, accessibility, and maintainability. I enjoy
                solving business problems with clean code and thoughtful user experiences.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="container-wrap py-20 md:py-24">
          <SectionHeader
            title="Skills & Expertise"
            description="Technical strengths across frontend, backend, mobile, and cloud workflows."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.article
                  key={skill.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-accentSoft text-accent dark:bg-accentSoft/35">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display text-lg font-semibold">{skill.name}</h3>
                    </div>
                    <span className="font-mono text-sm text-textMuted">{skill.level}%</span>
                  </div>

                  <p className="text-sm text-textMuted">{skill.summary}</p>

                  <div className="mt-5 h-2 rounded-full bg-black/10 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="container-wrap py-20 md:py-24">
          <SectionHeader
            title="Featured Projects"
            description="A sample of products I have designed and built with full-stack ownership."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group glass overflow-hidden rounded-2xl"
              >
                <Link href={project.live} target="_blank" rel="noreferrer" className="block">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textMuted">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className="rounded-full bg-accentSoft px-3 py-1 text-xs font-medium text-accent dark:bg-accentSoft/35"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4 text-sm font-semibold">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-textMain transition hover:text-accent"
                    >
                      <ExternalLink size={16} /> Visit Website
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="tech-stack" className="container-wrap py-20 md:py-24">
          <SectionHeader
            title="Tools & Technologies"
            description="Modern tech stack I work with to build scalable, production-ready web and mobile products."
          />

          <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2">
            <div className="relative overflow-hidden border-y border-black/10 bg-white/70 py-7 dark:border-white/10 dark:bg-surfaceAlt/70 md:py-8">
              <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/35 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-orange-300/30 blur-3xl" />
              <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-surface via-surface/85 to-transparent dark:from-surface dark:via-surface/90 md:w-40" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-surface via-surface/85 to-transparent dark:from-surface dark:via-surface/90 md:w-40" />

              <div className="relative z-[5] overflow-hidden">
                <div className="marquee-track flex w-max items-center gap-5 pr-5 will-change-transform">
                  {[...techStack, ...techStack].map((tech, index) => (
                    <div
                      key={`${tech.name}-${index}`}
                      className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/95 px-6 py-3.5 shadow-sm dark:border-white/10 dark:bg-surface/85"
                    >
                      <img
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        loading="lazy"
                        decoding="async"
                        className="h-10 w-10 object-contain"
                      />
                      <span className="whitespace-nowrap text-base font-semibold text-textMain">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="container-wrap py-20 md:py-24">
          <SectionHeader
            title="Testimonials"
            description="What collaborators say about working with me."
          />

          <div className="mt-10 glass overflow-hidden rounded-3xl p-6 md:p-10">
            <div className="relative min-h-40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[testimonialIndex].name}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.38 }}
                >
                  <p className="max-w-4xl text-lg leading-relaxed text-textMain md:text-2xl">
                    “{testimonials[testimonialIndex].quote}”
                  </p>
                  <p className="mt-6 font-display text-xl font-semibold">
                    {testimonials[testimonialIndex].name}
                  </p>
                  <p className="text-sm text-textMuted">{testimonials[testimonialIndex].role}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-7 flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setTestimonialIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === testimonialIndex ? "w-8 bg-accent" : "w-2.5 bg-black/20 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container-wrap py-20 md:py-24">
          <div className="grid gap-7 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-7 md:p-10"
            >
              <SectionHeader
                title="Let&apos;s Build Something Great"
                description="Send me a quick message about your idea, role, or product and I will get back to you."
              />

              <div className="mt-8 space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:border-accent/60 dark:border-white/10 dark:bg-surfaceAlt/70"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Icon size={16} />
                        {social.label}
                      </span>
                      <ArrowUpRight size={16} className="text-textMuted" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleContact}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="glass rounded-3xl p-7 md:p-10"
            >
              <div className="grid gap-4">
                <label className="text-sm font-medium text-textMain">
                  Full Name
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Hussain Ahmed"
                    className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-white/85 px-4 text-sm outline-none transition focus:border-accent dark:border-white/10 dark:bg-surface/70"
                  />
                </label>

                <label className="text-sm font-medium text-textMain">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-white/85 px-4 text-sm outline-none transition focus:border-accent dark:border-white/10 dark:bg-surface/70"
                  />
                </label>

                <label className="text-sm font-medium text-textMain">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-accent dark:border-white/10 dark:bg-surface/70"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-textMain px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent dark:bg-accent dark:text-slate-950"
                >
                  {sending ? "Sending..." : "Send Message"} <ArrowRight size={15} />
                </motion.button>

                <AnimatePresence>
                  {sent && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="text-sm text-emerald-600 dark:text-emerald-400"
                    >
                      Thanks, message received. I&apos;ll reply soon.
                    </motion.p>
                  )}
                </AnimatePresence>

                {formError && <p className="text-sm text-red-500 dark:text-red-400">{formError}</p>}
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[70] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_-12px_rgba(37,211,102,0.95)] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <MessageCircle size={24} />
      </a>

      <footer className="border-t border-black/10 py-10 dark:border-white/10">
        <div className="container-wrap flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-textMuted">© {year} Hussain Ahmed (Hussain A). All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={`footer-${social.label}`}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-textMuted transition hover:text-accent"
                >
                  <Icon size={15} />
                  {social.label}
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}
