import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import { playSound } from '../components/audio'

const Layout2 = ({ data, setPage, page, headerText, component1, component2, nextButtonDisabled, feedbackText, navTextOverride, footerImage, imageProp }) => {
  return (
    <>
      <div className=' h-screen w-screen justify-center items-center'>
        {/* <div className=' h-[10vh] w-screen flex justify-center items-center'>
          <Header data={data} />
        </div> */}
        <div className=' h-[88vh] w-[99vw] justify-center items-center m-[1vh] flex gap-2'>

        <div className='h-full w-[30%]'>
            <div className="relative h-[60%] w-full">
              <div className="h-full w-full bg-[rgba(255,255,255)] rounded-[2vh] border-[1vh] border-[#F9A942] ">
                {component1}
              </div>
              {/* Orange downward-pointing triangle */}
              <div className="absolute left-[20%] transform -translate-x-1/2 top-full w-0 h-0 border-l-[2vh] border-r-[2vh] border-t-[2vh] border-l-transparent border-r-transparent border-t-[#F9A942]"></div>
            </div>
            {footerImage && <img src={footerImage} className={imageProp} />}
          </div>

          <div className="h-full w-[70%] rounded-[2vh] flex flex-col justify-between items-center border-[0.5vh] border-[#F9A942]">
            {component2}
          </div>


        </div>

        <div className='h-[10vh] w-full'>
          <div className='h-[10vh] w-full flex justify-end items-center'>
            <Footer data={data} page={page} setPage={(page) => {
              setPage(page)
              playSound('click')
            }} nextButtonDisabled={nextButtonDisabled} navTextOverride={navTextOverride} />
            {!nextButtonDisabled && <img src="/assets/gif/finger tap.gif" className=' absolute top-[92%] left-[96%] h-[8vh]  pointer-events-none' />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout2;

