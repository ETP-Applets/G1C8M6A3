import React from 'react'

const navText = ({ data, navTextOverride }) => {
    return (
        <div className="h-[8vh] w-full text-[2.45vw] flex justify-center items-center text-white bg-[rgba(255,255,255,0.05)] rounded-md  " >
            {navTextOverride || data.navigationArea.text}
            
        </div>
    )
}

export default navText