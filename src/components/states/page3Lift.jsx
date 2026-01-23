import Page3 from '../../Pages/page3'
import { useState } from 'react'
const page3Lift = ({
  page,
  data,
  setPage,
  page2State,
  isButtonClicked,
  setIsButtonClicked,
  selectedBox,
  setSelectedBox,
  isCorrect,
  setIsCorrect,
  feedbackText,
  setFeedbackText,
  navTextOverride,
  setNavTextOverride, 
}) => {

  const [footerImage, setFooterImage] = useState('/public/assets/images/Aisha Pointing Left Mid.png')
  const [imageProp, setImageProp] = useState('h-[53%] pl-[4vw]')

  if (page === 3) {
    return (
      <Page3
        page={page}
        data={data}
        setPage={setPage}
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
        page2State={page2State}
        selectedBox={selectedBox}
        setSelectedBox={setSelectedBox}
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
        feedbackText={feedbackText}
        setFeedbackText={setFeedbackText}
        navTextOverride={navTextOverride}
        setNavTextOverride={setNavTextOverride}
        footerImage={footerImage}
        imageProp={imageProp}
        setFooterImage={setFooterImage}
        setImageProp={setImageProp}
      />
    )
  }

  return null
}

export default page3Lift
