
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-neon-glow animate-gradient -z-10 blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-lg p-8 lg:p-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bring your <span className="text-neon-green">ideas</span> to life?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work. If you have a project that needs some creative touches, let's collaborate and create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="neon-button">
                Start a Project
              </Link>
              
              <Link to="/projects" className="group flex items-center justify-center px-6 py-3 border border-muted rounded-md text-foreground hover:border-neon-green transition-all duration-300">
                View My Work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
