
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-neon-green font-bold text-xl">PORTFOLIO.</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating digital experiences that stand out with clean design and innovative development solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-green transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-green transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-green transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-green transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-neon-green flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-neon-green flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>About Me</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-neon-green flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-neon-green flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-neon-green flex items-center transition-colors">
                  <ChevronRight size={16} className="mr-1" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">New York, USA</p>
              <a href="tel:+11234567890" className="text-muted-foreground hover:text-neon-green block transition-colors">
                +1 (123) 456-7890
              </a>
              <a href="mailto:hello@portfolio.com" className="text-muted-foreground hover:text-neon-green flex items-center transition-colors">
                <Mail size={16} className="mr-2" />
                <span>hello@portfolio.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Portfolio. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-neon-green transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-neon-green transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
