
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
              <p className="text-sm font-medium text-neon-green">MY WORK</p>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Projects & <span className="text-neon-green">Portfolio</span>
            </h1>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my recent projects and see the solutions I've built for various clients. Each project represents a unique challenge and approach.
            </p>
          </div>
        </div>
        
        <ProjectsSection />
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
