import React from 'react';
import { ExternalLink, Github, Code, Layout, Image, FileText } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  tags: string[];
  link: string;
  github?: string;
  featured: boolean;
}

// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist Dashboard",
    description: "A clean and intuitive dashboard interface with data visualization. Built with React, Tailwind CSS, and Recharts.",
    image: "bg-gradient-to-br from-blue-50 to-indigo-100",
    icon: Layout,
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    link: "#",
    github: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio Gallery",
    description: "An elegant image gallery with smooth transitions and animations, designed for showcasing creative work.",
    image: "bg-gradient-to-br from-emerald-50 to-teal-100",
    icon: Image,
    tags: ["React", "Framer Motion", "CSS Grid"],
    link: "#",
    github: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A minimalist blog platform focused on content and readability. Features a clean design and markdown support.",
    image: "bg-gradient-to-br from-amber-50 to-yellow-100",
    icon: FileText,
    tags: ["Next.js", "Markdown", "Tailwind CSS"],
    link: "#",
    github: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "Weather Application",
    description: "A clean weather application that displays current conditions and forecasts with smooth animations.",
    image: "bg-gradient-to-br from-sky-50 to-blue-100",
    icon: Code,
    tags: ["React", "Weather API", "CSS Animations"],
    link: "#",
    github: "https://github.com",
    featured: false
  },
  {
    id: 5,
    title: "E-commerce UI Kit",
    description: "A comprehensive collection of reusable UI components for e-commerce applications.",
    image: "bg-gradient-to-br from-rose-50 to-pink-100",
    icon: Layout,
    tags: ["React", "Styled Components", "Storybook"],
    link: "#",
    github: "https://github.com",
    featured: false
  },
  {
    id: 6,
    title: "Task Management App",
    description: "A minimalist task management application with drag-and-drop functionality and subtle animations.",
    image: "bg-gradient-to-br from-violet-50 to-purple-100",
    icon: Code,
    tags: ["React", "Redux", "React DnD"],
    link: "#",
    featured: false
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-32">
        {/* Header */}
        <section className="pb-12 md:pb-20">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
              <p className="text-xl text-muted-foreground">
                A curated collection of my work, featuring web applications, design systems, and experiments.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {projects
                .filter(project => project.featured)
                .map((project, index) => (
                  <AnimatedSection 
                    key={project.id} 
                    className="flex flex-col rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                    delay={index * 100}
                  >
                    <div className={`h-56 ${project.image} flex items-center justify-center`}>
                      <project.icon size={48} className="text-primary/70" />
                    </div>
                    <div className="flex flex-col flex-grow p-6">
                      <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <span>View Project</span>
                            <ExternalLink size={16} className="ml-2" />
                          </a>
                        </Button>
                        {project.github && (
                          <Button asChild variant="outline">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <Github size={16} className="mr-2" />
                              <span>Source</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))
              }
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Other Projects</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => !project.featured)
                .map((project, index) => (
                  <AnimatedSection 
                    key={project.id} 
                    className="rounded-lg overflow-hidden bg-white border border-gray-100 shadow-sm hover-grow hover:shadow-md transition-all"
                    animation="fade-in"
                    delay={index * 100}
                  >
                    <div className={`h-36 ${project.image} flex items-center justify-center`}>
                      <project.icon size={32} className="text-primary/70" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">+{project.tags.length - 3}</Badge>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <Button asChild size="sm" variant="outline">
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <span>View</span>
                            <ExternalLink size={14} className="ml-1" />
                          </a>
                        </Button>
                        {project.github && (
                          <Button asChild size="sm" variant="ghost">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github size={14} />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))
              }
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project and see how I can help bring your ideas to life.
              </p>
              <Button asChild size="lg" className="hover-lift">
                <a href="mailto:hello@example.com">
                  Get In Touch
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;
