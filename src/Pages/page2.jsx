import React from 'react'
import Layout2 from '../Layouts/layout2'
import Button from '../components/Buttons/button'

const page2 = ({ data, page, setPage, pageState = {}, updatePageState }) => {
  const isButtonClicked = pageState.isButtonClicked || false

return (
  <>
    <Layout2 data={data} page={page} setPage={setPage} nextButtonDisabled={!isButtonClicked} />
    <div className='top-[50vh] left-[50vw] absolute flex justify-center items-center'>
  
  



      <Button 
        text="Click Me" 
        className='h-[8vh] w-[12vw] bg-blue-500 text-white text-[2vw]'
        onClick={() => updatePageState(2, 'isButtonClicked', true)}
      />
    </div>
  </>
  )
}
export default page2