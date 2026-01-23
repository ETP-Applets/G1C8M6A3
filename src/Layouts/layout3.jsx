import React from 'react'
import Button from '../components/Buttons/button'
import { playSound } from '../components/audio'


const Layout3 = ({ page, data, setPage, onStart, resetApplication }) => {
    return (
        <>
            <div className='h-full w-full'>
                <div className='h-[10vh] w-full text-[4vw] flex justify-center items-center text-[#F9A942] text-center'>
                    {data.workingArea.header}
                </div>
                <div className='h-[65vh] w-full flex justify-center items-center'>
                    <div className='w-[65vw] justify-center items-center text-[3vw] text-white text-center'>
                        {data.workingArea.title}
                        <div className='text-[3vw] text-white text-center'>
                            {data.workingArea.Text}<span className='text-[#F9A942]'>{data.workingArea.TextBold}</span>{data.workingArea.TextBold1}<span className='text-[#F9A942]'>{data.workingArea.TextBold2}</span> {data.workingArea.TextBy}<span className='text-[#F9A942]'>{data.workingArea.TextBold3}</span>.
                        </div>
                        
                        <div className='text-[3vw] text-white text-center pt-[6vh]'>
                            {data.workingArea.Text3}
                        </div>
                    </div>
                </div>

                <div className='h-[25vh] w-full flex justify-center items-start'>

                    <Button
                        className='h-[10vh] w-[20vw] bg-[#F9A942] text-[3vw] text-black cursor-pointer'
                        text={data.workingArea.startText}
                        onClick={() => {
                            if (resetApplication) {
                                resetApplication()
                            } else {
                                setPage(1)
                            }
                            playSound('click')
                        }}
                    />
                    <img src="/assets/gif/finger tap.gif" className=' absolute top-[80%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 h-[15%]  pointer-events-none' />
                </div>
            </div>
        </>
    );
};

export default Layout3;