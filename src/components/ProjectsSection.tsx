
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully functional e-commerce platform with cart, checkout, and payment processing capabilities.',
    image: 'https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Health & Fitness App',
    description: 'A mobile app for tracking fitness goals, nutrition, and workout routines with progress visualization.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Mobile Development',
    technologies: ['React Native', 'Firebase', 'Redux'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website with modern design, smooth animations, and responsive layout.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    category: 'Web Design',
    technologies: ['React', 'TailwindCSS', 'Framer Motion'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 4,
    title: 'Task Management System',
    description: 'A collaborative task management tool with real-time updates, assignees, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Web Application',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
];

// Filter categories
const categories = ['All', 'Web Development', 'Mobile Development', 'Web Design', 'Web Application'];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);
  
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
            <p className="text-sm font-medium text-neon-green">MY PROJECTS</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Recent <span className="text-neon-green">work</span> I've done
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through a selection of my latest projects showcasing my skills and expertise in various areas of web development and design.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-neon-green text-black font-medium'
                  : 'bg-muted text-muted-foreground hover:bg-neon-green/20 hover:text-neon-green'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-card border border-border rounded-lg overflow-hidden group transition-all duration-300 hover:border-neon-green/50 hover:shadow-[0_0_15px_rgba(170,255,0,0.15)]"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-neon-green bg-neon-green/20 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      
                      <div className="flex space-x-3">
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-neon-green hover:text-black transition-colors"
                          aria-label="View live demo"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-neon-green hover:text-black transition-colors"
                          aria-label="View code on GitHub"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-muted rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/projects" 
            className="neon-button"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
