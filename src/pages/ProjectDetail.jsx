import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    const container = document.querySelector('.max-w-screen-2xl');
    const docEl = document.documentElement;
    if (container) {
      const r = container.getBoundingClientRect();
      const cs = getComputedStyle(container);
      console.log('ProjectDetail container bounding box:', r);
      console.log('ProjectDetail container styles:', {
        display: cs.display,
        position: cs.position,
        marginLeft: cs.marginLeft,
        marginRight: cs.marginRight,
        left: cs.left,
        right: cs.right,
        transform: cs.transform
      });

      // log parent chain up to body
      let el = container.parentElement;
      while (el) {
        const s = getComputedStyle(el);
        console.log('Parent', el.tagName, {
          display: s.display,
          position: s.position,
          marginLeft: s.marginLeft,
          marginRight: s.marginRight,
          paddingLeft: s.paddingLeft,
          paddingRight: s.paddingRight,
          width: s.width
        });
        if (el.tagName === 'BODY') break;
        el = el.parentElement;
      }

      console.log('Viewport width (documentElement.clientWidth):', docEl.clientWidth);
    } else {
      console.log('ProjectDetail container not found');
    }
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Project Not Found</h1>
          <button onClick={() => navigate('/')} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-4 outline outline-red-400">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <div className="text-3xl font-black text-blue-600">Teja</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 lg:py-20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 outline outline-green-400">
          <div className="mb-4 inline-block px-4 py-2 bg-blue-400 rounded-full text-sm font-bold uppercase tracking-wider">
            {project.course}
          </div>
          <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">{project.title}</h1>
          <p className="text-xl font-semibold text-blue-100">{project.semester}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 space-y-16">
          
          {/* Demo Video */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-gray-900">Project Demo</h2>
            <div className="relative w-full bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={project.videoUrl}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="space-y-6 py-8 border-t border-b border-gray-200">
            <h2 className="text-4xl font-black text-gray-900">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {project.problemStatement}
            </p>
          </div>

          {/* My Contribution */}
          <div className="space-y-6 py-8 border-b border-gray-200">
            <h2 className="text-4xl font-black text-gray-900">My Contribution</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {project.contribution}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-6 py-8">
            <h2 className="text-4xl font-black text-gray-900">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.technologies.map((tech, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 font-bold text-center hover:bg-blue-100 transition"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Repository Link */}
          <div className="space-y-6 py-8 bg-gray-50 px-8 rounded-2xl border border-gray-200">
            <h2 className="text-3xl font-black text-gray-900">Source Code</h2>
            <p className="text-gray-700 font-medium mb-4">
              Check out the complete project implementation on GitHub.
            </p>
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Hugging Face Demo Link */}
          {project.huggingfaceUrl && (
            <div className="space-y-6 py-8 bg-orange-50 px-8 rounded-2xl border border-orange-200">
              <h2 className="text-3xl font-black text-gray-900">Live Demo</h2>
              <p className="text-gray-700 font-medium mb-4">
                Try the interactive demo hosted on Hugging Face Spaces.
              </p>
              <a
                href={project.huggingfaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a2 2 0 110 4 2 2 0 010-4zm-4.5 5.5c.69 0 1.348.18 1.92.494A4.504 4.504 0 0012 10c.857 0 1.66.24 2.34.644A3.5 3.5 0 1116.5 17H7.5a3.5 3.5 0 010-7 3.48 3.48 0 01.-.001z" />
                </svg>
                Open in Hugging Face Spaces
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Related Projects */}
      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-black text-gray-900 mb-12">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData
              .filter(p => p.id !== project.id)
              .map(relatedProject => (
                <div
                  key={relatedProject.id}
                  onClick={() => navigate(`/project/${relatedProject.id}`)}
                  className="cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-700 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-black text-white">{relatedProject.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 font-medium mb-4">{relatedProject.shortDescription}</p>
                    <div className="text-right">
                      <span className="text-blue-600 font-bold hover:text-blue-700 transition">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <footer className="w-full bg-gray-900 text-gray-400 py-16">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-black text-2xl mb-4">Teja</h3>
              <p className="font-medium">Full-stack engineer crafting innovative solutions.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white transition font-semibold">Home</a></li>
                <li><a href="/#projects" className="hover:text-white transition font-semibold">Projects</a></li>
                <li><a href="/#contact" className="hover:text-white transition font-semibold">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Education</h3>
              <p className="font-medium text-sm">MSc Computer Science & Engineering<br/>Technical University of Denmark</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Contact</h3>
              <p className="font-medium text-sm">teja@example.com<br/>Copenhagen, Denmark</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="font-semibold">© 2024 Teja. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
