import React from 'react'
import { Code2, Smartphone, Terminal, Cloud, ShieldCheck, BarChart3 } from 'lucide-react'

const Companies = () => {
  const categories = [
    { name: "Full Stack", icon: <Code2 size={20} /> },
    { name: "Mobile App", icon: <Smartphone size={20} /> },
    { name: "Python", icon: <Terminal size={20} /> },
    { name: "Cloud / DevOps", icon: <Cloud size={20} /> },
    { name: "Cyber Security", icon: <ShieldCheck size={20} /> },
    { name: "Data Science", icon: <BarChart3 size={20} /> }
  ];

  return (
    <div className='py-16'>
      <p className='text-center text-gray-500 text-sm font-medium mb-12 px-4 uppercase tracking-widest'>
        Explore Our Core Specialized Tracks
      </p>
      
      <div className='grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-4 md:gap-6 px-6 max-w-6xl mx-auto'>
        {categories.map((item, index) => (
          <div 
            key={index} 
            className='flex items-center justify-center md:justify-start gap-3 px-6 py-4 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(59,130,246,0.1)] hover:border-blue-500 hover:-translate-y-1 cursor-pointer group w-full md:w-auto'
          >
            <div className='text-gray-400 group-hover:text-blue-600 transition-colors duration-300'>
              {item.icon}
            </div>
            <span className='text-gray-800 font-bold text-sm md:text-base whitespace-nowrap tracking-tight'>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Companies