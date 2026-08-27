export default function ProjectCard({ project, onViewProject }) {
  const badgeText = project.course.includes('(') ? project.course.split('(')[0].trim() : project.course;

  return (
    <div 
      onClick={() => onViewProject(project.id)}
      className="h-full cursor-pointer group"
    >
      <div className="h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-400 flex flex-col hover:-translate-y-1">
        {/* Header */}
        <div className="h-44 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
          </div>
          
          <div className="relative z-10">
            <span className="inline-block px-3.5 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-extrabold uppercase tracking-wider border border-white/30 shadow-sm">
              {badgeText}
            </span>
          </div>

          <h3 className="text-2xl font-black text-white relative z-10 leading-tight drop-shadow-sm group-hover:text-blue-100 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Metadata */}
          <div className="mb-5 pb-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">Semester</p>
              <p className="text-sm font-bold text-gray-800">{project.semester}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6 flex-1 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-2.5">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50/80 rounded-lg border border-blue-200/60 hover:bg-blue-100 transition"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2.5 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-lg border border-gray-200">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Button */}
          <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md">
            <span>View Details</span>
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
