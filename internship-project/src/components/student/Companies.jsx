const Companies = () => {
  const categories = ["Web Development", "Data Science", "UI/UX Design", 
    "Cyber Security", "Cloud /DevOps",
     "Mobile Development", ];
  
  return (
    <div className='pt-16 text-center'>
      <p className='text-base text-gray-500 mb-6'>Popular categories our students love</p>
      <div className='flex flex-wrap items-center justify-center gap-4 md:gap-8'>
        {categories.map((item, index) => (
          <span key={index} className='px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100'>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
export default Companies;