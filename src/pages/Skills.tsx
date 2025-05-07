
import React from 'react';
import { ArrowRight, Code, Briefcase, BookOpen, Pencil, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Timeline entry type
interface TimelineEntry {
  id: number;
  year: string;
  title: string;
  description: string;
  organization?: string;
  skills?: string[];
  icon: React.ElementType;
  type: 'education' | 'experience' | 'certification';
}

// Timeline data
const timelineData: TimelineEntry[] = [
  {
    id: 1,
    year: '2022 - Present',
    title: 'Senior Frontend Developer',
    description: 'Lead frontend development for enterprise applications. Focus on React, TypeScript, and performance optimization.',
    organization: 'Tech Solutions Inc.',
    skills: ['React', 'TypeScript', 'NextJS', 'Performance Optimization'],
    icon: Code,
    type: 'experience'
  },
  {
    id: 2,
    year: '2020 - 2022',
    title: 'UI/UX Designer & Developer',
    description: 'Created user interfaces and implemented frontend solutions for various clients. Focused on design systems and component libraries.',
    organization: 'Design Studio',
    skills: ['UI/UX Design', 'Figma', 'React', 'Styled Components'],
    icon: Pencil,
    type: 'experience'
  },
  {
    id: 3,
    year: '2019 - 2020',
    title: 'Frontend Developer',
    description: 'Developed responsive web applications and interfaces using modern JavaScript frameworks.',
    organization: 'Web Innovations',
    skills: ['JavaScript', 'React', 'CSS', 'Responsive Design'],
    icon: Code,
    type: 'experience'
  },
  {
    id: 4,
    year: '2019',
    title: 'Master of Computer Science',
    description: 'Specialized in Human-Computer Interaction and Web Technologies.',
    organization: 'University of Technology',
    icon: BookOpen,
    type: 'education'
  },
  {
    id: 5,
    year: '2018',
    title: 'Advanced Frontend Certification',
    description: 'Comprehensive certification covering modern frontend development practices.',
    organization: 'Web Academy',
    skills: ['JavaScript', 'Advanced CSS', 'Performance'],
    icon: Star,
    type: 'certification'
  },
  {
    id: 6,
    year: '2017',
    title: 'Junior Developer',
    description: 'Started career as a junior web developer working on various projects.',
    organization: 'Digital Agency',
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    icon: Briefcase,
    type: 'experience'
  },
  {
    id: 7,
    year: '2017',
    title: 'Bachelor of Design',
    description: 'Focus on digital design and interactive media.',
    organization: 'Design Institute',
    icon: BookOpen,
    type: 'education'
  },
];

// Skill category type
interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

// Skills data
const skillsData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'NextJS', level: 80 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    name: 'UI/UX Design',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'UI Design', level: 85 },
      { name: 'UX Research', level: 75 },
      { name: 'Wireframing', level: 90 },
      { name: 'Prototyping', level: 85 },
    ],
  },
  {
    name: 'Development Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Webpack', level: 75 },
      { name: 'Jest', level: 80 },
      { name: 'Docker', level: 65 },
      { name: 'CI/CD', level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-32">
        {/* Header */}
        <section className="pb-12 md:pb-20">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Experience</h1>
              <p className="text-xl text-muted-foreground">
                My professional journey, technical expertise, and educational background.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((category, categoryIndex) => (
                <AnimatedSection 
                  key={category.name} 
                  animation="fade-in" 
                  delay={categoryIndex * 100} 
                  className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="relative">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline/Roadmap Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Experience & Education</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </AnimatedSection>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              {/* Timeline entries */}
              <div className="space-y-12">
                {timelineData.map((entry, index) => (
                  <AnimatedSection 
                    key={entry.id} 
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                    animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center z-10">
                      <entry.icon size={16} className="text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 md:px-8 ${index % 2 === 0 ? 'md:pl-8 md:pr-16' : 'md:pr-8 md:pl-16'} pl-12`}>
                      <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                        <div className="text-sm text-primary font-semibold mb-2">{entry.year}</div>
                        <h3 className="text-xl font-semibold mb-1">{entry.title}</h3>
                        {entry.organization && (
                          <div className="text-sm text-muted-foreground mb-3">{entry.organization}</div>
                        )}
                        <p className="text-muted-foreground mb-4">
                          {entry.description}
                        </p>
                        {entry.skills && entry.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {entry.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to collaborate?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to discussing new projects and opportunities.
              </p>
              <Button asChild size="lg" className="hover-lift">
                <a href="mailto:hello@example.com" className="flex items-center">
                  Contact Me
                  <ArrowRight size={16} className="ml-2" />
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

export default Skills;
