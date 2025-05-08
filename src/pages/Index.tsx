import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, BookOpen, Image } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TypeWriter from "@/components/TypeWriter";

const Index = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="inline-flex items-baseline">
                  1 in{" "}
                  <TypeWriter
                    text="10,00,000"
                    className="text-primary ml-2 bg-primary/5 px-3 py-1 rounded-md"
                    speed={120}
                    cursorStyle="blinking"
                  />
                </span>{" "}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-10">
                I design and build digital experiences that are minimal,
                intuitive, and performant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="hover-lift">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover-lift"
                >
                  <Link to="/skills">Explore Skills</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of my recent projects and explorations.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <AnimatedSection
                className="rounded-lg overflow-hidden bg-white shadow-sm hover-grow hover:shadow-md transition-all"
                animation="fade-in"
                delay={100}
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  <img src={`${import.meta.env.BASE_URL}image.png`} alt="Gallery" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                  Image Gallery
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                  An interactive & responsive image gallery built with Next.js, ImageKit, and Clerk, featuring smooth animations, Advance user authentication, image likes (hearts), and comment functionality.
                  </p>
                  <Link
                    to="/projects"
                    className="text-sm font-medium text-primary flex items-center underline-effect"
                  >
                    View Project
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* Project Card 2 */}
              <AnimatedSection
                className="rounded-lg overflow-hidden bg-white shadow-sm hover-grow hover:shadow-md transition-all"
                animation="fade-in"
                delay={200}
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  {/* <Image size={32} className="text-muted-foreground" /> */}
                  <img src={`${import.meta.env.BASE_URL}realtime-chat.png`} alt="Chat" className="w-full h-full pl-1 pr-1 object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                  Real-time Chat Application
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                  A multi-user chat application powered by WebSockets, WebContainers, and Gemini AI for smart message handling. Enables seamless real-time communication and collaboration within a single project environment.
                  </p>
                  <Link
                    to="/projects"
                    className="text-sm font-medium text-primary flex items-center underline-effect"
                  >
                    View Project
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* Project Card 3 */}
              <AnimatedSection
                className="rounded-lg overflow-hidden bg-white shadow-sm hover-grow hover:shadow-md transition-all"
                animation="fade-in"
                delay={300}
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  {/* <BookOpen size={32} className="text-muted-foreground" /> */}
                  <img src={`${import.meta.env.BASE_URL}uber.png`} alt="Uber" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Uber clone</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                  A real-time ride-hailing web app where users can book rides and track drivers, featuring separate rider and driver panels with GPS-based tracking and fare estimates.
                  </p>
                  <Link
                    to="/projects"
                    className="text-sm font-medium text-primary flex items-center underline-effect"
                  >
                    View Project
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="hover-lift">
                <Link to="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A snapshot of my technical skills and professional journey.
              </p>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="w-full md:w-1/2 max-w-md p-8 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-6 text-center">
                  Frontend Development
                </h3>
                <div className="space-y-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">React & Next.js</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          90%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                      <div
                        style={{ width: "90%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                      ></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">
                          Tailwind CSS
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          85%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                      <div
                        style={{ width: "85%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                      ></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">TypeScript</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          80%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                      <div
                        style={{ width: "80%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 max-w-md p-8 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-6 text-center">
                  Design Skills
                </h3>
                <div className="space-y-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">
                          UI/UX Design
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          85%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                      <div
                        style={{ width: "85%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                      ></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">Figma</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          90%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                      <div
                        style={{ width: "90%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                      ></div>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">GSAP</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          75%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary">
                      <div
                        style={{ width: "75%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="text-center mt-12">
              <Button asChild className="hover-lift">
                <Link to="/skills">
                  View Full Skillset
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have a project in mind? I'm currently available for freelance
                work.
              </p>
              <Button asChild size="lg" className="hover-lift">
                <a href="mailto:tusharmishra802@.com">Get In Touch</a>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
