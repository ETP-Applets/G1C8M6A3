import React from 'react'
import { useState } from 'react'
import Layout2 from '../Layouts/layout2'
import Table from '../components/Table/table'
import { playSound } from '../components/audio'

const formatAnimalName = (name, count) => {
  if (!name) return ''
  // singular when count === 1
  if (count === 1) return name
  // basic pluralisation for current animal names
  return `${name}s`
}

const page3 = ({ 
  data, 
  page, 
  setPage,
  isButtonClicked,
  setIsButtonClicked,
  page2State,
  selectedBox,
  setSelectedBox,
  isCorrect,
  setIsCorrect,
  feedbackText,
  setFeedbackText,
  navTextOverride,
  setNavTextOverride,
  footerImage,
  imageProp,
  setFooterImage,
  setImageProp,
}) => {
  // Get state from page2State (separate page state)
  const selectedImage1 = page2State?.selectedImage1 || null
  const selectedImage2 = page2State?.selectedImage2 || null
  const selectedName1 = page2State?.selectedName1 || null
  const selectedName2 = page2State?.selectedName2 || null
  const selectedNumber1 = page2State?.selectedNumber1 || null
  const selectedNumber2 = page2State?.selectedNumber2 || null

  // Get numbers for each animal from table data
  const getAnimalNumber = (animalName) => {
    if (!animalName || !data?.Table?.tableBody) return 0
    const rows = ['row1', 'row2', 'row3', 'row4']
    for (const row of rows) {
      if (data.Table.tableBody[row]?.cell1 === animalName) {
        return data.Table.tableBody[row]?.cell2 || 0
      }
    }
    return 0
  }

  const number1 = getAnimalNumber(selectedName1)
  const number2 = getAnimalNumber(selectedName2)
  const correctAnimalName =
    isCorrect && selectedBox
      ? selectedBox === 'box1'
        ? selectedName1
        : selectedName2
      : null

  const handleCorrectAnswer = (boxNumber) => {
    setSelectedBox(boxNumber)
    setIsCorrect(true)
    setIsButtonClicked(true)
    const newFeedbackText = {
      text1: data.correctFeedbackArea.text1,
      text2: data.correctFeedbackArea.text2,
      and: data.correctFeedbackArea.and,
      text3: data.correctFeedbackArea.text3,
      text4: data.correctFeedbackArea.text4,
      text5: data.correctFeedbackArea.text5,
    }
    setFeedbackText(newFeedbackText)
    setNavTextOverride(data.navigationArea.text2)
    playSound('correct')
    const newFooterImage = "/public/assets/images/Aisha Claping Wide.png"
    const newImageProp = "h-[53%] pl-[2vw]"
    setFooterImage(newFooterImage)
    setImageProp(newImageProp)
  }

  const handleWrongAnswer = (boxNumber) => {
    setSelectedBox(boxNumber)
    setIsCorrect(false)
    const newFeedbackText = {
      text1: data.wrongFeedbackArea.text1,
      text2: data.wrongFeedbackArea.text2,
      and: data.wrongFeedbackArea.and,
      text3: data.wrongFeedbackArea.text3,
    }
    setFeedbackText(newFeedbackText)
    playSound('wrong')
    const newFooterImage = "/public/assets/images/aisha_think.png"
    const newImageProp = "h-[53%] pl-[4vw]"
    setFooterImage(newFooterImage)
    setImageProp(newImageProp)
  }

  const handleBoxClick = (boxNumber) => {
    // Don't allow clicks if correct answer is already selected
    if (isCorrect) return

    if (boxNumber === 'box1') {
      
      const correct = number1 > number2
      if (correct) {
        handleCorrectAnswer(boxNumber)
      } else {
        handleWrongAnswer(boxNumber)
      }
    } else if (boxNumber === 'box2') {
      const correct = number2 > number1
      if (correct) {
        handleCorrectAnswer(boxNumber)
      } else {
        handleWrongAnswer(boxNumber)
      }
    }
  }

  const isBoxDisabled = (boxNumber) => {
    // Disable the other box if correct answer is selected
    if (isCorrect && selectedBox && selectedBox !== boxNumber) {
      return true
    }
    return false
  }

  const getBoxClassName = (boxNumber) => {
    let baseClass = "w-[20%] h-full rounded-[2vh] border-dashed border-[0.4vh] flex items-center justify-center transition-all"
    
    // Check if this box is disabled
    if (isBoxDisabled(boxNumber)) {
      return `${baseClass} border-[#747474] opacity-50 cursor-not-allowed`
    }
    
    if (selectedBox === boxNumber) {
      if (isCorrect) {
        return `${baseClass} border-green-500 bg-green-500/20 cursor-pointer`
      } else {
        return `${baseClass} border-red-500 bg-red-500/20 cursor-pointer`
      }
    }
    
    return `${baseClass} border-[#747474] hover:border-[#F9A942] cursor-pointer`
  }

  const getFeedbackMessage = () => {
    if (!feedbackText) {
      return (
        <>
          {data.feedbackArea.text1} <strong className="text-[#F9A942]">{data.feedbackArea.text1Bold}</strong> {data.feedbackArea.text11}
        </>
      )
    }

    if (isCorrect && feedbackText.text4) {
      const animalWithMore = selectedBox === 'box1' ? selectedName1 : selectedName2
      const animalWithLess = selectedBox === 'box1' ? selectedName2 : selectedName1
      
      // Determine which animal has larger and smaller values
      const largerNumber = number1 > number2 ? number1 : number2
      const smallerNumber = number1 > number2 ? number2 : number1
      const largerBaseName = number1 > number2 ? selectedName1 : selectedName2
      const smallerBaseName = number1 > number2 ? selectedName2 : selectedName1
      const largerName = formatAnimalName(largerBaseName, largerNumber)
      const smallerName = formatAnimalName(smallerBaseName, smallerNumber)
      
      return (
        <>
          {feedbackText.text1}<br/><br/> {feedbackText.text2} {largerNumber} {largerName} {feedbackText.and} {smallerNumber} {smallerName}. {feedbackText.text3} <strong className="text-[#F9A942]">{largerName} {feedbackText.text4} </strong> {feedbackText.text5} {animalWithLess}.
        </>
      )
    }
    // Determine which animal has larger and smaller values
    const largerNumber = number1 > number2 ? number1 : number2
    const smallerNumber = number1 > number2 ? number2 : number1
    const largerBaseName = number1 > number2 ? selectedName1 : selectedName2
    const smallerBaseName = number1 > number2 ? selectedName2 : selectedName1
    const largerName = formatAnimalName(largerBaseName, largerNumber)
    const smallerName = formatAnimalName(smallerBaseName, smallerNumber)
    
    return (
      <>
        {feedbackText.text1}<br/><br/> {feedbackText.text2} {largerNumber} {largerName} {feedbackText.and} {smallerNumber} {smallerName}. <br/><br/>{feedbackText.text3}
      </>
    )
  }

  return (
    <>
      <Layout2 data={data} page={page} setPage={setPage} nextButtonDisabled={!isButtonClicked}
  navTextOverride={navTextOverride}
  footerImage={footerImage}
  imageProp={imageProp}
        component1={
          <>
          <div className=' h-full flex flex-col justify-center items-center'>
            <div className=" w-full text-[2.45vw] px-[1vh]">
              {getFeedbackMessage()}
            </div>
          </div>
          </>
        }

        component2={
          <>
            <div className=" w-[60%] h-[60%] text-center flex flex-col justify-start items-center">
              <Table
                data={data}
                selectedName1={selectedName1}
                selectedName2={selectedName2}
                selectedNumber1={selectedNumber1}
                selectedNumber2={selectedNumber2}
                highlightName={correctAnimalName}
              />
            </div>
            <div className="h-[20%] w-full flex justify-center items-center gap-[8vw]">
              <div 
                className={getBoxClassName('box1')}
                onClick={() => !isBoxDisabled('box1') && handleBoxClick('box1')}
              >
                {selectedImage1 && (
                  <img src={selectedImage1} alt="selected" className="max-w-full max-h-full object-contain" />
                )}
              </div>
              <div 
                className={getBoxClassName('box2')}
                onClick={() => !isBoxDisabled('box2') && handleBoxClick('box2')}
              >
                {selectedImage2 && (
                  <img src={selectedImage2} alt="selected" className="max-w-full max-h-full object-contain" />
                )}
              </div>
            </div>
            <div className="h-[8%] w-full flex justify-center items-center text-[2vw] text-white gap-[8vw]">
              <div className="w-[20%] h-full text-center ">{selectedName1}</div>
              <div className="w-[20%] h-full text-center ">{selectedName2}</div>
            </div>
            <div className="h-[20%] w-full flex justify-center items-center gap-[5vw]">
              
            </div>

          </>
        }
      />
    </>
  )
}

export default page3