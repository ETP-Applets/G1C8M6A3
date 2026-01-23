import Page7 from '../../Pages/page7'
import { useState } from 'react'
const page7Lift = ({
  page,
  data,
  setPage,
  page5State,
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
  const [footerImage, setFooterImage] = useState('/public/assets/images/aisha_happy.png')
  const [imageProp, setImageProp] = useState('h-[53%] pl-[8vw]')
  if (page === 7) {
    return (
      <Page7
        page={page}
        data={data}
        setPage={setPage}
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
        page5State={page5State}
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

export default page7Lift
