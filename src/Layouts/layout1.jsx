import React from 'react'
import Button from '../components/Buttons/button'
import Table from '../components/Table/table'
import { playSound } from '../components/audio'


const Layout1 = ({ page, data, setPage, onStart }) => {
    return (
        <>
            <div className="h-screen w-full">
                <div className='h-[15%] w-full text-[4vw] flex justify-center items-center text-[#F9A942] text-center'>
                    {data.headers.title}
                </div>
                <div className=' h-[65%] w-full flex justify-center items-center text-[5vh] text-white text-center'>
                    <div className=" h-full w-[55%] text-[3vw] flex flex-col justify-center items-center">
                        <div className="w-[88%]">
                            {data.workingArea.welcomeText} 
                            <span className="text-[#F9A942]">{data.workingArea.welcomeText1}</span>, <span className="text-[#F9A942]">{data.workingArea.welcomeText2}</span>, {data.workingArea.and} <span className="text-[#F9A942]">{data.workingArea.welcomeText3}</span>.
                            
                        </div>
                        <br />
                        {data.workingArea.startWelcomeText}
                    </div>
                    <div className=" h-full w-[40%]  flex flex-col justify-center">

                      <Table data={data}/>

                    </div>
                </div>

                <div className='h-[20%] w-full flex justify-center items-start'>

                    <Button
                        className='h-[10vh] w-[15vw] bg-[#F9A942] text-black text-[3vw]'
                        text={data.workingArea.startText}
                        onClick={() => {
                            setPage(2)
                            playSound('click')
                        }}
                    />
                    <img src="/assets/gif/finger tap.gif" className=' absolute top-[85%] left-[57%] transform -translate-x-1/2 -translate-y-1/2 h-[15%]  pointer-events-none' />
                </div>
            </div>
        </>
    );
};

export default Layout1;

{/* <button
                    className='h-[10vh] w-[20vw] flex justify-center items-center text-black bg-[#F9A942] rounded-md'
                    onClick={() => {
                        if (onStart) {
                            onStart(page)
                        } else {
                            page === 10 ? setPage(1) : setPage((prev) => prev + 1)
                        }
                        playSound('click')
                    }}
                >
                    
                    Start
                </button> */}