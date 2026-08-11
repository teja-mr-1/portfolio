export default function ProjectCard({ project, onViewProject }) {
  return (
    <div 
      onClick={() => onViewProject(project.id)}
      className="h-full cursor-pointer group"
    >
      <div className="h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-300 flex flex-col hover:-translate-y-1">
        {/* Header */}
        <div className="h-40 bg-gradient-to-br from-blue-600 to-blue-700 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white rounded-full blur-2xl" />
          </div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-blue-100 bg-opacity-20 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              {project.course.split('(')[0].trim()}
            </span>
          </div>
          <h3 className="text-2xl font-black text-white relative z-10 leading-tight">{project.title}</h3>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Metadata */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Semester</p>
            <p className="text-sm font-bold text-gray-900">{project.semester}</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed font-medium mb-6 flex-1 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 rounded-lg border border-gray-300">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Button */}
          <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md">
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
