
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative bg-hero-gradient bg-no-repeat bg-right-top">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
              <p className="text-sm font-medium text-neon-green">CREATIVE DEVELOPER</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Crafting Digital</span>
              <span className="text-neon-green">Experiences</span> 
              <span className="block">That Stand Out.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I create innovative web solutions with clean design and cutting-edge technology. Let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="neon-button">
                Explore My Work
              </Link>
              <Link to="/contact" className="group flex items-center justify-center px-6 py-3 border border-muted rounded-md text-foreground hover:border-neon-green transition-all duration-300">
                Let's Talk
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-border inline-flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-background flex items-center justify-center text-xs font-bold">JD</div>
                <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-background flex items-center justify-center text-xs font-bold">SK</div>
                <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-background flex items-center justify-center text-xs font-bold">RL</div>
                <div className="w-10 h-10 rounded-full bg-yellow-500 border-2 border-background flex items-center justify-center text-xs font-bold">AM</div>
              </div>
              <div className="ml-4">
                <p className="text-sm text-muted-foreground">Trusted by <span className="text-foreground font-medium">15+</span> clients worldwide</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <div className="relative">
                  <div className="absolute inset-0 bg-neon-glow animate-gradient rotate-45 -z-10 blur-3xl opacity-40"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                    alt="Developer working on code" 
                    className="w-full h-auto object-cover rounded-lg border border-border/50 shadow-lg neon-border animate-float"
                  />
                </div>
                
                <div className="absolute -bottom-10 -left-10 sm:bottom-auto sm:left-auto sm:-top-10 sm:-right-10 bg-card rounded-lg p-4 border border-border/50 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-neon-green text-xl font-bold">3+</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Years of</p>
                      <p className="text-xs text-muted-foreground">Experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 sm:-bottom-10 sm:-left-10 bg-card rounded-lg p-4 border border-border/50 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-neon-green text-xl font-bold">30+</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Projects</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <a 
          href="#about" 
          className="inline-flex flex-col items-center text-muted-foreground hover:text-neon-green transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium mb-2">Scroll Down</span>
          <span className="w-0.5 h-10 bg-muted animate-pulse"></span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
