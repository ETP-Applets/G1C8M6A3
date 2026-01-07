import React from 'react'

const pentagon = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-950 to-indigo-950 flex items-center justify-center p-8">
    <div className="w-full h-full flex items-center justify-center">
      {/* Main card */}
      <div className="w-[80%] h-[100%] flex-row bg-linear-to-br from-amber-50 to-yellow-100 rounded-3xl p-12 shadow-2xl border-4 border-blue-400 items-center justify-center">
        
        <p className=" relative top-[-3vh] w-[3vh] h-[0vh] left-[-3vh] text-[2vw] font-bold flex-row justify-center items-center">1</p>
        {/* Pentagon SVG from public folder */}
        <img
          src="/assets/images/pentagon.svg"
          alt="Pentagon"
          className="w-full h-full object-contain"
          style={{ paddingLeft: '7.5%', paddingRight: '7.5%' }}
        />
      </div>
    </div>
    // </div>
  )
}

export default pentagon