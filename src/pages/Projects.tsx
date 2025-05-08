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
    title: "Image Gallery",
    description: "An interactive & responsive image gallery built with Next.js, ImageKit, and Clerk, featuring smooth animations, Advance user authentication, image likes (hearts), and comment functionality..",
    image: `${import.meta.env.BASE_URL}image.png`,
    icon: Layout,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Image-kit", "Clerk"],
    link: "#",
    github: "https://github.com/TM23-sanji/Share-It",
    featured: true
  },
  {
    id: 2,
    title: "Uber clone",
    description: "A real-time ride-hailing web app where users can book rides and track drivers, featuring separate rider and driver panels with GPS-based tracking and fare estimates.",
    image:`${import.meta.env.BASE_URL}uber.png`,
    icon: FileText,
    tags: ["React", "WebSocktes", "Leaflet.js", "Tailwind CSS", "OpenStreetMap API"],
    link: "#",
    github: "https://github.com/TM23-sanji/uber-clone",
    featured: true
  },
  {
    id: 4,
    title: "Real-time Chat",
    description: "A multi-user chat application powered by WebSockets, WebContainers, and Gemini AI for smart message handling. Enables seamless real-time communication and collaboration within a single project environment.",
    image: `${import.meta.env.BASE_URL}realtime-chat.png`,
    icon: Image,
    tags: ["React", "WebContainers", "WebSockets", "TypeScript", "WebSockets"],
    link: "#",
    github: "https://github.com/TM23-sanji/real-time-chat",
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
                      <img src={project.image} alt={project.title} className="w-full h-full  object-cover" />
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
                        {/* <Button asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <span>View Project</span>
                            <ExternalLink size={16} className="ml-2" />
                          </a>
                        </Button> */}
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
                      {/* <project.icon size={32} className="text-primary/70" /> */}
                      <img src={project.image} alt={project.title} className="w-full h-full pl-2 pr-2 object-cover" />

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
                <a href="mailto:tusharmishra802@gmail.com">
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
