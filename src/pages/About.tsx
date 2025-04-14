
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import { ArrowRight, UserCheck, Clock, Coffee, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
              <p className="text-sm font-medium text-neon-green">ABOUT ME</p>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Know more <span className="text-neon-green">about me</span>
            </h1>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer and designer with a focus on creating exceptional digital experiences. Learn more about my background, skills, and approach to work.
            </p>
          </div>
        </div>
        
        <AboutSection />
        
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
                  <p className="text-sm font-medium text-neon-green">MY JOURNEY</p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The path that led me <span className="text-neon-green">here</span>
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  My journey in web development began with a curiosity about how things work on the internet. What started as a hobby quickly evolved into a passion and then a career focused on creating meaningful digital experiences.
                </p>
                
                <p className="text-muted-foreground mb-8">
                  Over the years, I've worked with numerous clients across various industries, helping them establish their online presence and achieve their business goals through effective digital solutions.
                </p>
                
                <a 
                  href="/contact" 
                  className="group inline-flex items-center text-neon-green hover:underline"
                >
                  Let's connect
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mb-4">
                    <UserCheck className="w-6 h-6 text-neon-green" />
                  </div>
                  
                  <div className="text-3xl font-bold mb-2">30+</div>
                  <p className="text-muted-foreground">Satisfied Clients</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-neon-green" />
                  </div>
                  
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <p className="text-muted-foreground">Awards Won</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-neon-green" />
                  </div>
                  
                  <div className="text-3xl font-bold mb-2">5k+</div>
                  <p className="text-muted-foreground">Hours of Work</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mb-4">
                    <Coffee className="w-6 h-6 text-neon-green" />
                  </div>
                  
                  <div className="text-3xl font-bold mb-2">1k+</div>
                  <p className="text-muted-foreground">Cups of Coffee</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
