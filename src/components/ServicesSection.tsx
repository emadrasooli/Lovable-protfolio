
import { Code, PenTool, LayoutGrid, Rocket, Zap, Globe } from 'lucide-react';

const servicesData = [
  {
    icon: <Code className="h-10 w-10 text-neon-green" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies to deliver fast, responsive, and scalable solutions.',
  },
  {
    icon: <PenTool className="h-10 w-10 text-neon-green" />,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces with a focus on user experience, accessibility, and visual appeal.',
  },
  {
    icon: <LayoutGrid className="h-10 w-10 text-neon-green" />,
    title: 'Frontend Development',
    description: 'Modern and responsive frontend implementations using React, Vue, or Angular with clean and maintainable code.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-neon-green" />,
    title: 'Performance Optimization',
    description: 'Speed up your existing websites and applications for better user experience and higher conversion rates.',
  },
  {
    icon: <Zap className="h-10 w-10 text-neon-green" />,
    title: 'API Development',
    description: 'RESTful and GraphQL API design and implementation for efficient data communication between systems.',
  },
  {
    icon: <Globe className="h-10 w-10 text-neon-green" />,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce websites with product management, shopping cart, and secure payment processing.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 bg-neon-glow animate-gradient -z-10 blur-3xl opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
            <p className="text-sm font-medium text-neon-green">MY SERVICES</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Services I <span className="text-neon-green">offer</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to help businesses and individuals establish their online presence, enhance user experience, and achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="card-container"
            >
              <div className="service-card bg-card border border-border rounded-lg p-8 h-full hover:border-neon-green/50 hover:shadow-[0_0_15px_rgba(170,255,0,0.15)] transition-all duration-300">
                <div className="mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-card border border-border rounded-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Need a custom solution?
              </h3>
              
              <p className="text-muted-foreground mb-6">
                I also offer custom development and design services tailored to your specific needs. Let's discuss your project and find the best approach to achieve your goals.
              </p>
              
              <a 
                href="/contact" 
                className="neon-button inline-block"
              >
                Request Custom Service
              </a>
            </div>
            
            <div className="bg-muted rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Popular Custom Requests</h4>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">•</span>
                  <span>Enterprise-level web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">•</span>
                  <span>Content management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">•</span>
                  <span>Dashboard and analytics platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">•</span>
                  <span>Mobile application development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">•</span>
                  <span>Integration with third-party services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
