import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import { playSound } from '../components/audio'

const Layout2 = ({ data, setPage, page, headerText, component1, component2, nextButtonDisabled, feedbackText }) => {
  return (
    <>
      <div className=' h-screen w-screen justify-center items-center'>
        <div className=' h-[10vh] w-screen flex justify-center items-center'>
          <Header data={data} />
        </div>
        <div className=' h-[78vh] w-[99vw] justify-center items-center m-[1vh] flex gap-2'>
          <div className="h-full w-[70%]  bg-[rgba(255,255,255,0.05)] rounded-md  flex items-center justify-center">
            {component1}
          </div>

          <div className="h-full w-[30%] bg-[rgba(255,255,255,0.05)] rounded-md flex flex-col justify-start items-center">

            {component2}
            {/* <div className=" flex justify-center items-center text-[3.5vh] text-center text-white">
            {feedbackText}
          </div> */}


          </div>
        </div>

        <div className='h-[10vh] w-screen justify-center items-center'>
          <Footer data={data} page={page} setPage={(page) => {
            setPage(page)
            playSound('click')
          }} nextButtonDisabled={nextButtonDisabled} />
        </div>
      </div>
    </>
  );
};

export default Layout2;

