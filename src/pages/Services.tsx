
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
              <p className="text-sm font-medium text-neon-green">WHAT I OFFER</p>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              My <span className="text-neon-green">Services</span>
            </h1>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I offer a range of development and design services to help businesses and individuals achieve their digital goals. Browse my services below.
            </p>
          </div>
        </div>
        
        <ServicesSection />
        
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                My Work <span className="text-neon-green">Process</span>
              </h2>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I follow a structured approach to ensure that every project is completed efficiently and meets all requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-neon-green text-black flex items-center justify-center font-bold">
                  1
                </div>
                
                <h3 className="text-xl font-semibold mb-4 mt-2">Discovery</h3>
                
                <p className="text-muted-foreground">
                  Understanding your needs, goals, and challenges through in-depth discussions and research.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-neon-green text-black flex items-center justify-center font-bold">
                  2
                </div>
                
                <h3 className="text-xl font-semibold mb-4 mt-2">Planning</h3>
                
                <p className="text-muted-foreground">
                  Creating a detailed project roadmap with timelines, deliverables, and resource allocation.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-neon-green text-black flex items-center justify-center font-bold">
                  3
                </div>
                
                <h3 className="text-xl font-semibold mb-4 mt-2">Execution</h3>
                
                <p className="text-muted-foreground">
                  Developing the solution with regular updates and opportunities for feedback.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-neon-green text-black flex items-center justify-center font-bold">
                  4
                </div>
                
                <h3 className="text-xl font-semibold mb-4 mt-2">Delivery</h3>
                
                <p className="text-muted-foreground">
                  Final testing, deployment, and providing all necessary documentation and support.
                </p>
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

export default Services;
