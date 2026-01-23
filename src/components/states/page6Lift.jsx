import Page6 from '../../Pages/page6'
import { useState } from 'react'
const page6Lift = ({
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
  if (page === 6) {
    return (
      <Page6
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

export default page6Lift
