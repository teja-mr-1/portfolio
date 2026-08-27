export default function ProjectCard({ project, onViewProject }) {
  const badgeText = project.course.includes('(') ? project.course.split('(')[0].trim() : project.course;

  return (
    <div 
      onClick={() => onViewProject(project.id)}
      className="h-full cursor-pointer group"
    >
      <div className="h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-400 flex flex-col hover:-translate-y-1">
        {/* Header */}
        <div className="h-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
          </div>
          
          <div className="relative z-10">
            <span className="inline-block px-2.5 py-0.5 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] font-extrabold uppercase tracking-wider border border-white/30 shadow-sm">
              {badgeText}
            </span>
          </div>

          <h3 className="text-base font-extrabold text-white relative z-10 leading-snug drop-shadow-sm group-hover:text-blue-100 transition-colors line-clamp-2">
            {project.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Metadata */}
          <div className="mb-3 pb-3 border-b border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-0.5">Semester</p>
              <p className="text-xs font-bold text-gray-800">{project.semester}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-xs leading-relaxed font-medium mb-4 flex-1 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <p className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1.5">Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 text-[11px] font-semibold text-blue-700 bg-blue-50/80 rounded-md border border-blue-200/60 hover:bg-blue-100 transition"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-1.5 py-0.5 text-[10px] font-semibold text-gray-500 bg-gray-100 rounded-md border border-gray-200">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Button */}
          <button className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 group/btn shadow-sm hover:shadow-md">
            <span>View Details</span>
            <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
