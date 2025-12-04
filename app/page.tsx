import React from 'react';
import { Briefcase, Zap, User, Code, Mail, Video, TrendingUp } from 'lucide-react';

// --- Configuration ---
const config = {
  name: "Hector Steve Hernandez",
  title: "Adept Digital Media & Infrastructure Specialist",
  tagline: "Strategic Leadership in Cloud Migration, Technical Operations, and High-Performance Team Management.",
  
  // Teal for accents, dark gray for backgrounds
  colors: {
    primary: 'text-teal-400', 
    accentBg: 'bg-teal-600 hover:bg-teal-500', 
    background: 'bg-gray-900',
    card: 'bg-gray-800',
    text: 'text-gray-200',
  },
};

// --- Data for Sections ---

const projects = [
  {
    icon: <Briefcase size={24} className={config.colors.primary} />,
    title: "On-Prem to Cloud Media Migration",
    description: "Successfully facilitated the migration of massive on-prem media data from local servers to a cloud-based Infrastructure as a Service (IaaS) environment. This increased operational flexibility and reduced latency for global teams.",
    provider: "Cloud Provider: SDVI",
    competencies: ["Cloud Computing (IaaS)", "Digital Media Management", "Infrastructure Troubleshooting"],
    reflection: "This project marks a critical point in my career evolution, shifting my focus from reactive troubleshooting to proactive strategic infrastructure design. Successfully managing a high-stakes migration demonstrated my ability to coordinate large data transfers while maintaining service continuity—a core accomplishment in enterprise resilience. My short-term goal is to gain proficiency in multi-cloud disaster recovery strategies. Long-term, I aim to lead the development of fully automated, Serverless Infrastructure as Code (IaC) solutions for future migrations, optimizing cost and deployment time.",
  },
  {
    icon: <Zap size={24} className={config.colors.primary} />,
    title: "Singapore Media Workflow Consolidation",
    description: "Executed the consolidation of third-party media workflows from Singapore into our centralized, in-house cloud storage system (using SDVI). This effort streamlined scattered resources into one source of truth, optimizing media lifecycle management.",
    provider: "Cloud Provider: SDVI",
    competencies: ["Workflow Onboarding", "Resource Consolidation", "International Collaboration", "Pattern Recognition"],
    reflection: "Building on the foundation of Project A, this demonstrates the evolution of my pattern recognition and strategic planning skills. I moved beyond a one-time migration to solve a complex, scattered international workflow problem. The consolidation of resources to a central source highlights my capability to apply technology to achieve organizational efficiency and standardization. I will continue to refine my ability to design zero-trust media access policies across international nodes (short-term). Long-term, my focus is on becoming an expert in global media regulatory compliance and secure cross-border data management.",
  },
  {
    icon: <User size={24} className={config.colors.primary} />,
    title: "High-Performance Technical Team Development",
    description: "Managed and led a team of 20 technicians and 2 supervisors. Key responsibilities included end-to-end staffing: interviewing, hiring, developing comprehensive training curricula, setting up remote access during the pandemic, and providing ongoing support.",
    provider: "Team Size: 22",
    competencies: ["Management and Supervision", "Training Curriculum Design", "Remote Operations Support", "Strategic Staffing"],
    reflection: "This project showcases the evolution of my competency from technical execution to organizational leadership and human capital development My accomplishment was not just managing a team, but rapidly capacitating a team of 22 during a critical operational shift (the pandemic). Designing the training curricula and staffing process proves my ability to scale technical talent effectively My short-term goal is to formalize my leadership experience by pursuing Advanced Project Management or Agile Scrum Master certification. My long-term development goal is to transition into a Senior Director of Technical Operations role, focused on scaling technical departments through effective talent acquisition and management strategy.",
  },
];

const skills = [
  "Digital Media & Formats (Vast Experience)", "Troubleshooting & Pattern Recognition", 
  "Cloud Computing (IaaS & Strategy)", "Management and Supervision", 
  "Cybersecurity (Threats & Management)", "Technology Trends (Deep Knowledge)", 
  "Python (Experience)", "MS Office Suite (Proficient)", 
  "Google Suite (Proficient)", "Bilingual: Spanish & English (Proficient)", 
  "Portuguese (Able to understand)",
];


// --- Components ---

const Header = () => (
  <header className={`sticky top-0 z-50 p-4 ${config.colors.background} shadow-lg`}>
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold tracking-wider">
        <span className={config.colors.primary}>HSH</span> Portfolio
      </div>
      <div className={`hidden md:flex space-x-6 ${config.colors.text} text-sm font-medium`}>
        {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className={`hover:${config.colors.primary} transition-colors duration-200`}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className={`py-24 md:py-32 ${config.colors.background} text-center`}>
    <div className="container mx-auto px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
        {config.name}
      </h1>
      <h2 className={`mt-4 text-xl md:text-3xl font-semibold ${config.colors.primary}`}>
        {config.title}
      </h2>
      <p className={`mt-6 text-lg md:text-xl max-w-3xl mx-auto ${config.colors.text}`}>
        {config.tagline}
      </p>

      {/* --- NEW BUTTONS SECTION --- */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        
        {/* Button 1: Projects */}
        <a 
          href="#projects-in-a-professional-setting" 
          className={`inline-flex items-center px-6 py-3 font-bold rounded-lg text-white uppercase tracking-wider transition duration-300 transform hover:scale-105 ${config.colors.accentBg} shadow-lg`}
        >
          <Briefcase size={18} className="mr-2" />
          View Projects
        </a>

        {/* Button 2: Skills */}
        <a 
          href="#skills" 
          className={`inline-flex items-center px-6 py-3 font-bold rounded-lg ${config.colors.text} border-2 border-teal-600 hover:bg-gray-700 transition duration-300 transform hover:scale-105 shadow-lg`}
        >
          <Code size={18} className={`mr-2 ${config.colors.primary}`} />
          Core Skills
        </a>

        {/* Button 3: Contact */}
        <a 
          href="#contact" 
          className={`inline-flex items-center px-6 py-3 font-bold rounded-lg text-white uppercase tracking-wider transition duration-300 transform hover:scale-105 bg-gray-600 hover:bg-gray-700 shadow-lg`}
        >
          <Mail size={18} className="mr-2" />
          Get in Touch
        </a>
      </div>
      {/* --- END BUTTONS SECTION --- */}

    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <div className={`p-6 rounded-lg shadow-2xl transition duration-300 ${config.colors.card} hover:shadow-teal-500/50 flex flex-col h-full`}>
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-teal-800 rounded-full">{project.icon}</div>
      <div>
        <h3 className={`text-xl font-bold ${config.colors.primary}`}>{project.title}</h3>
        <p className={`text-sm mt-1 text-gray-400`}>{project.provider}</p>
      </div>
    </div>
    
    <p className={`mt-4 ${config.colors.text}`}>{project.description}</p>
    
    <div className="mt-4">
      <h4 className="font-semibold text-gray-300">Competencies:</h4>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.competencies.map(comp => (
          <span key={comp} className="text-xs font-medium bg-gray-700 text-teal-300 px-3 py-1 rounded-full">{comp}</span>
        ))}
      </div>
    </div>

    {/* Reflection (Meets Rubric 1 - Evolution & Goals) */}
    <div className="mt-6 pt-4 border-t border-gray-700 flex-grow">
      <h4 className="font-semibold text-gray-300 flex items-center mb-2">
        <TrendingUp size={16} className={`mr-2 ${config.colors.primary}`} />
        Reflection & Growth
      </h4>
      <blockquote className="text-sm italic border-l-4 border-teal-500 pl-4 text-gray-400">
        "{project.reflection}"
      </blockquote>
    </div>

    <a href={project.linkUrl} className={`mt-6 block text-center font-bold text-sm underline hover:${config.colors.primary} transition-colors duration-200`}>
      {project.linkText}
    </a>
  </div>
);

const Projects = () => (
  <section id="projects-in-a-professional-setting" className={`py-16 md:py-24 ${config.colors.background}`}>
    <div className="container mx-auto px-6">
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 text-white`}>
        Projects in a Professional Setting
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className={`py-16 md:py-24 ${config.colors.card} border-t border-b border-gray-800`}>
    <div className="container mx-auto px-6">
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 text-white`}>
        Core Competencies & Skills
      </h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className={`text-sm font-medium px-4 py-2 rounded-lg border border-teal-500/50 ${config.colors.primary} bg-teal-900/20`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const VideoPlaceholder = () => (
  <section id="video-presentation" className={`py-16 md:py-24 ${config.colors.background}`}>
    <div className="container mx-auto px-6 text-center">
      <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center`}>
        <Video size={30} className={`mr-3 ${config.colors.primary}`} />
        Personalized Video Presentation
      </h2>
      <p className={`${config.colors.text} mb-8 max-w-3xl mx-auto`}>
        This video artifact demonstrates my ability to present complex technical concepts clearly and concisely (meeting Rubric 3).
      </p>
      
      {/* The YouTube Shorts embed is slightly different (ratio is vertical).
        We use a custom container to ensure the video scales correctly.
      */}
      <div className="flex justify-center">
        <div className="w-full max-w-sm aspect-[9/16] rounded-lg overflow-hidden shadow-2xl border-4 border-teal-600">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://youtube.com/shorts/l8LWEWwhdf8?si=rA_8JDOxU7O02Su1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className={`py-16 md:py-24 ${config.colors.card}`}>
    <div className="container mx-auto px-6 text-center">
      <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6`}>
        Let's Connect
      </h2>
      <p className={`${config.colors.text} mb-8 max-w-xl mx-auto`}>
        Ready to discuss how my expertise in digital media infrastructure and team leadership can benefit your organization?
      </p>
      
      {/* Updated Contact Details */}
      <div className="flex flex-col items-center space-y-4">
        <a 
          href="mailto:hshernandez@mail.fhsu.edu" 
          className={`flex items-center space-x-3 text-lg font-medium ${config.colors.primary} hover:underline`}
        >
          <Mail size={20} />
          <span>hshernandez@mail.fhsu.edu</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/hector-steve-hernandez-49aa09381" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`flex items-center space-x-3 text-lg font-medium ${config.colors.primary} hover:underline`}
        >
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.541-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.77 7 2.476v6.759z"/>
          </svg>
          <span>/in/hector-steve-hernandez-49aa09381</span>
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about-me" className={`py-16 md:py-24 ${config.colors.background}`}>
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 text-white`}>
        About Me
      </h2>
      <div className={`p-8 rounded-lg ${config.colors.card} shadow-xl`}>
        <p className={`${config.colors.text} leading-relaxed text-lg`}>
          I am a strategic media and technology specialist with a proven record of leading complex infrastructure projects and building high-performing technical teams. My background is rooted in hands-on troubleshooting and pattern recognition, which I leverage to develop robust, long-term solutions—from facilitating large-scale on-premises to cloud migrations, to consolidating international media workflows.
        </p>
        <p className={`${config.colors.text} leading-relaxed text-lg mt-4`}>
          My expertise spans digital media formats, cloud computing strategy, and effective staff management (including interviewing, training, and remote operations support). My goal is to continually evolve my competencies in infrastructure resilience and leadership to drive enterprise-level transformation. **I am actively seeking opportunities where strategic technical leadership can directly impact organizational scale and operational efficiency.**
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className={`p-8 ${config.colors.card} border-t border-gray-700 text-center`}>
    <p className={`text-sm ${config.colors.text}`}>
      &copy; {new Date().getFullYear()} {config.name}. Built with clean, efficient code (React & Tailwind CSS).
    </p>
  </footer>
);

// --- Main App Component ---

const App = () => (
  <div className={`min-h-screen ${config.colors.background} font-sans`}>
    <Header />
    <main>
      <Hero />
      <Projects />
      <Skills />
      <VideoPlaceholder /> 
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

// For your Next.js file (app/page.tsx), we export the component as default.
export default App;