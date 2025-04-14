
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
              <p className="text-sm font-medium text-neon-green">GET IN TOUCH</p>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Let's <span className="text-neon-green">Connect</span>
            </h1>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to learn more about my services? I'm just a message away. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
