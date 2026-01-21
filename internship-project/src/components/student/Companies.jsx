import React from 'react'

const Companies = () => {
  const categories = [
    { name: "Web Development", icon: "💻" },
    { name: "Data Science", icon: "📊" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Marketing", icon: "📈" },
    { name: "Business", icon: "💼" }
  ];

  return (
    <div className='pt-20 pb-10'>
      <p className='text-center text-gray-500 text-sm font-medium tracking-widest uppercase mb-10'>
        Explore Top Categories
      </p>
      
      <div className='flex flex-wrap items-center justify-center gap-4 md:gap-6 px-4'>
        {categories.map((item, index) => (
          <div 
            key={index} 
            className='group cursor-pointer flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50'
          >
            <span className='text-xl group-hover:scale-125 transition-transform duration-300'>
              {item.icon}
            </span>
            <span className='text-gray-700 font-medium group-hover:text-blue-700'>
              {item.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Optional: Subtle line for transition */}
      <div className='mt-16 w-1/2 mx-auto border-b border-gray-100'></div>
    </div>
  )
}

export default Companies