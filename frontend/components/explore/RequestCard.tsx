import React from 'react';

/**
 * RequestCard Component
 * Recreates the community request UI with dynamic status and urgency styling.
 */

interface RequestCardProps {
  category: string;
  urgency: 'High' | 'Medium' | 'Low';
  status: 'Solved' | 'Open';
  title: string;
  description: string;
  tags?: string[];
  author: string;
  location: string;
  helpersCount?: number;
}

export default function RequestCard({
  category,
  urgency,
  status,
  title,
  description,
  tags = [],
  author,
  location,
  helpersCount = 1,
}: RequestCardProps) {
  
  // Style mapping for Urgency levels
  const urgencyStyles = {
    High: "bg-red-50 text-red-600",
    Medium: "bg-blue-50 text-blue-600",
    Low: "bg-green-50 text-green-600"
  };

  // Style mapping for Status
  const statusStyles = status === 'Solved' 
    ? "bg-green-50 text-green-600" 
    : "bg-gray-100 text-gray-500";

  return (
    <div className="bg-[#FBF9F4] p-8 rounded-[2.5rem] shadow-sm border border-gray-100/50 flex flex-col justify-between hover:shadow-md transition-all duration-300">
      <div>
        {/* Header Badges */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="bg-[#EAF5F3] text-[#208779] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {category}
          </span>
          <span className={`${urgencyStyles[urgency]} text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider`}>
            {urgency}
          </span>
          <span className={`${statusStyles} text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider`}>
            {status}
          </span>
        </div>

        {/* Text Content */}
        <h3 className="font-bold text-xl text-gray-900 mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          {description}
        </p>

        {/* Skill Tags */}
        {tags.length > 0 && (
          <div className="flex gap-2 mb-8 flex-wrap">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-[#EAF5F3]/60 text-[#208779] text-[10px] font-bold px-3 py-1.5 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Meta Data */}
      <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100/50">
        <div>
          <p className="text-sm font-bold text-gray-900">{author}</p>
          <p className="text-xs text-gray-400 mt-1">
            {location} • {helpersCount} helper{helpersCount !== 1 ? 's' : ''} interested
          </p>
        </div>
        <button className="bg-white border border-gray-100 px-6 py-2.5 rounded-full text-xs font-bold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors active:scale-95">
          Open details
        </button>
      </div>
    </div>
  );
}