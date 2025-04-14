
import { Code, LayoutPanelTop, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-neon-glow animate-gradient -z-10 blur-3xl opacity-30"></div>
            <div className="relative z-10">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Portrait" 
                  className="w-full h-auto object-cover rounded-lg border border-border/50 shadow-lg"
                />
                
                <div className="absolute -top-6 -right-6 w-36 h-36 border border-neon-green/30 rounded-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-36 h-36 border border-neon-green/30 rounded-lg"></div>
                
                <div className="absolute top-1/2 -right-16 -translate-y-1/2 bg-card p-4 rounded-lg border border-border shadow-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-neon-green" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">UX Design</p>
                      <p className="text-xs text-muted-foreground">Award 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
              <p className="text-sm font-medium text-neon-green">ABOUT ME</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A passionate <span className="text-neon-green">developer</span> with a creative mindset
            </h2>
            
            <p className="text-muted-foreground mb-6">
              With over 3 years of experience in the digital industry, I specialize in creating engaging and functional websites and applications. My journey in web development started with a curiosity for how things work on the internet and grew into a passion for building digital experiences that make an impact.
            </p>
            
            <p className="text-muted-foreground mb-8">
              I combine technical expertise with creative thinking to develop solutions that not only meet client requirements but exceed their expectations. My approach is user-centered, focusing on creating products that are both visually appealing and easy to use.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-sm text-muted-foreground">
                  Building modern, responsive websites and applications
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mb-4">
                  <LayoutPanelTop className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">
                  Creating intuitive and engaging user experiences
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Working effectively with teams and clients
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated to producing high-quality work
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-muted rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">UI/UX</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">Figma</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
