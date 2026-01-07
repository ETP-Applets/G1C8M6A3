import React from 'react'
import Button from '../components/Buttons/button'


const Layout1 = ({ page, data, setPage, onStart }) => {
    return (
        <>
            {/* <div className='h-[10vh] w-full text-[4vh] flex justify-center items-center text-[#F9A942] text-center'>
            {data.workingArea.welcomeText}
            </div>
            <div className='h-[70vh] w-full flex justify-center items-center text-[5vh] text-white text-center'>
                {data.workingArea.startWelcomeText}
            </div> */}
            <div className='h-[80vh] w-full justify-center items-center text-[5vh]  text-white p-[15vh] text-center'>
                <div className='h-[50vh] w-full justify-center items-center text-[5vh]   text-white'>
                    <div className='h-[40vh] w-full justify-center text-[7vh] text-white flex items-center'>
                        {data.workingArea.welcomeText}
                    </div>
                    <div className='h-[10vh] w-full justify-center items-center text-[5vh]  text-white'>
                        {data.workingArea.startWelcomeText}
                    </div>
                </div>
            </div>

            <div className='h-[20vh] w-full flex justify-center items-start text-[2.45vw]'>
             
                <Button 
                    className='h-[10vh] w-[15vw] bg-red-500 text-white text-[3vw]' 
                    text={data.workingArea.startText} 
                    onClick={() => setPage(2)}
                />
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