
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen flex items-center justify-center py-32">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="max-w-lg mx-auto text-center">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Button asChild size="lg" className="hover-lift">
              <Link to="/" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotFound;
