import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

export default function Home() {
  const navigate = useNavigate();

  const handleViewProject = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-black text-blue-600 hover:text-blue-700 transition cursor-pointer">
              Teja
            </div>
            <div className="hidden md:flex items-center gap-1">
              <a href="#projects" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-semibold text-sm transition-all">
                Projects
              </a>
              <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-semibold text-sm transition-all">
                Contact
              </a>
              <a href="#contact" className="ml-4 px-6 py-2.5 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="w-full space-y-8 animate-fadeInUp">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                  Welcome to my portfolio
                </span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                  Hi, I'm <span className="text-blue-600">Teja</span>
                </h1>
                <p className="text-xl lg:text-2xl font-bold text-blue-600">
                  MSc Computer Science & Engineering
                </p>
                <p className="text-base lg:text-lg text-gray-600 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Technical University of Denmark
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Full-stack engineer specialized in <span className="font-bold text-blue-600">distributed systems</span>, <span className="font-bold text-blue-600">machine learning</span>, and <span className="font-bold text-blue-600">scalable architecture</span>. Building innovative solutions that drive technology forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#projects" className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-center flex items-center justify-center gap-2">
                  View My Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#contact" className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="w-full relative flex items-center justify-center lg:justify-end animate-fadeInUp animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 w-full max-w-md aspect-square flex flex-col items-center justify-center shadow-2xl border border-blue-400/30">
                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                <svg className="relative w-36 h-36 text-white mb-6 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="relative text-white font-black text-center text-xl drop-shadow-lg">Engineering Excellence</p>
                <div className="relative mt-4 flex gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse animation-delay-200"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse animation-delay-400"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Core Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Specialized skills across the full technology stack</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Backend', skills: 'Python, Node.js, Distributed Systems', icon: '⚙️', color: 'from-blue-500 to-cyan-500' },
              { title: 'Frontend', skills: 'React, TypeScript, Tailwind CSS', icon: '🎨', color: 'from-purple-500 to-pink-500' },
              { title: 'ML/AI', skills: 'TensorFlow, PyTorch, Data Science', icon: '🧠', color: 'from-green-500 to-emerald-500' },
              { title: 'DevOps', skills: 'Docker, Kubernetes, Cloud Arch', icon: '☁️', color: 'from-orange-500 to-red-500' }
            ].map((expertise, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${expertise.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">{expertise.icon}</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{expertise.title}</h3>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed">{expertise.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-gradient-to-b from-gray-50 to-white py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              DTU Group Projects showcasing expertise in cutting-edge technologies and innovative problem-solving. Each project demonstrates real-world engineering challenges and creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} onViewProject={handleViewProject} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTYgMzZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto text-center relative space-y-8">
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            Ready to Collaborate?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto">
            Let's discuss how I can contribute to your team and drive innovation forward. I'm always excited to explore new opportunities and tackle challenging problems.
          </p>
          <div className="pt-4">
            <a 
              href="mailto:teja@example.com" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 py-16 lg:py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4 lg:col-span-1">
              <h3 className="text-white font-black text-3xl mb-4">Teja</h3>
              <p className="text-gray-400 leading-relaxed">
                Full-stack engineer crafting innovative solutions for complex problems.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:w-3 transition-all"></span>
                  Projects
                </a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:w-3 transition-all"></span>
                  Contact
                </a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">Education</h4>
              <div className="space-y-2">
                <p className="text-white font-bold">MSc Computer Science</p>
                <p className="text-gray-400 text-sm">Technical University of Denmark (DTU)</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">Contact</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-bold mb-1 text-sm">Email</p>
                  <a href="mailto:teja@example.com" className="text-gray-400 hover:text-white transition-colors text-sm">teja@example.com</a>
                </div>
                <div>
                  <p className="text-white font-bold mb-1 text-sm">Location</p>
                  <p className="text-gray-400 text-sm">Copenhagen, Denmark</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Teja. All rights reserved. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
