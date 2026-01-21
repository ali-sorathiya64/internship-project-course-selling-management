import React from 'react'

const Companies = () => {
  const categories = [
    { name: "Web Dev", icon: "💻" }, // Mobile ke liye chota naam
    { name: "Data Science", icon: "📊" },
    { name: "UI/UX", icon: "🎨" },
    { name: "Marketing", icon: "📈" },
    { name: "Business", icon: "💼" }
  ];

  return (
    <div className='pt-12 md:pt-20 pb-10'>
      <p className='text-center text-gray-500 text-xs md:text-sm font-medium tracking-widest uppercase mb-8 md:mb-10 px-4'>
        Explore Top Categories
      </p>
      
      {/* Mobile pe: grid-cols-2 (2 columns)
          Tablet pe: md:grid-cols-3 (3 columns)
          Laptop pe: lg:flex (Ek line mein)
      */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap items-center justify-center gap-3 md:gap-6 px-6 max-w-6xl mx-auto'>
        {categories.map((item, index) => (
          <div 
            key={index} 
            className='group cursor-pointer flex items-center justify-center lg:justify-start gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-3 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50'
          >
            <span className='text-lg md:text-xl group-hover:scale-110 transition-transform duration-300'>
              {item.icon}
            </span>
            <span className='text-gray-700 text-sm md:text-base font-medium group-hover:text-blue-700 whitespace-nowrap'>
              {item.name}
            </span>
          </div>
        ))}
      </div>
      
      <div className='mt-12 md:mt-16 w-1/3 mx-auto border-b border-gray-100'></div>
    </div>
  )
}

export default Companies