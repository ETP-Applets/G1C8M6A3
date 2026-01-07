import React from 'react'

const parallel = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Main card */}
      <div className="relative bg-linear-to-br from-amber-50 to-yellow-100 rounded-3xl p-12 shadow-2xl border-4 border-blue-400 w-[80%] h-[100%] flex-row items-center justify-center">
        <p className=" relative top-[-3vh] w-[3vh] h-[0vh] left-[-3vh] text-[2vw] font-bold flex-row justify-center items-center">4</p>

        {/* Parallelogram SVG from public folder */}
        <img
          src="/assets/images/parallel.svg"
          alt="Parallelogram"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

export default parallel

