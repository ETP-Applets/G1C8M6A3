import React from 'react'

const header = ({ data }) => {
    return (
        <div className='text-[2.45vw] text-[#F9A942]'>
            {data.headers.title}
        </div>
    )
}

export default header