import React from 'react'

const hexagon = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Main card */}
      <div className="relative bg-linear-to-br from-amber-50 to-yellow-100 rounded-3xl p-12 shadow-2xl border-4 border-blue-400 w-[80%] h-[100%] flex-row items-center justify-center">
        <p className=" relative top-[-3vh] w-[3vh] h-[0vh] left-[-3vh] text-[2vw] font-bold flex-row justify-center items-center">6</p>

        {/* Hexagon SVG from public folder */}
        <img
          src="/assets/images/hexagon.svg"
          alt="Hexagon"
          className="w-full h-full object-contain"
          style={{ paddingLeft: '12.5%', paddingRight: '12.5%' }}
        />
      </div>
    </div>
  )
}

export default hexagon

