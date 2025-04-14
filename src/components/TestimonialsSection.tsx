
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Emma Thompson',
    position: 'Marketing Director at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 5,
    text: 'Working with this developer was an absolute pleasure. They took our vague ideas and transformed them into a stunning website that perfectly represents our brand. The attention to detail and commitment to quality was evident throughout the project.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder at StartUp Inc.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 5,
    text: 'The developer delivered our project on time and exceeded our expectations. Their technical knowledge combined with creative problem-solving resulted in a solution that not only looks great but performs exceptionally well. Would definitely hire again!',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    position: 'E-commerce Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    rating: 5,
    text: 'Our e-commerce platform needed a complete overhaul, and this developer was up to the challenge. They created a user-friendly, visually appealing site that has significantly increased our conversion rates. Their communication throughout the project was excellent.',
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 4,
    text: 'As a creative director, I have high standards for design and functionality. This developer not only met those standards but often suggested improvements that enhanced our original concepts. They are technically skilled and also understand the importance of aesthetics.',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonialsData.length - 1 : current - 1
    );
  };
  
  const nextTestimonial = () => {
    setActiveIndex((current) => 
      current === testimonialsData.length - 1 ? 0 : current + 1
    );
  };
  
  const activeTestimonial = testimonialsData[activeIndex];
  
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
            <p className="text-sm font-medium text-neon-green">TESTIMONIALS</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What my <span className="text-neon-green">clients</span> say
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients and collaborators who have worked with me on various projects.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="absolute top-8 right-8 text-neon-green opacity-20">
              <Quote size={64} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index} 
                      size={16} 
                      className={index < activeTestimonial.rating ? 'text-neon-yellow fill-neon-yellow' : 'text-muted-foreground'} 
                    />
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold">
                  {activeTestimonial.name}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {activeTestimonial.position}
                </p>
              </div>
              
              <div>
                <p className="italic text-lg">
                  "{activeTestimonial.text}"
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-neon-green hover:text-neon-green transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-neon-green hover:text-neon-green transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  index === activeIndex ? 'bg-neon-green w-6' : 'bg-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.trustpilot.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-neon-green transition-colors"
          >
            View more reviews on Trustpilot →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
