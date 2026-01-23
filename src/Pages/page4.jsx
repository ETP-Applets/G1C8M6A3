import React, { useEffect, useRef, useState } from 'react'
import Layout2 from '../Layouts/layout2'
import Table from '../components/Table/table'
import { playSound } from '../components/audio'

const formatAnimalName = (name, count) => {
  if (!name) return ''
  if (count === 1) return name
  return `${name}s`
}

const page4 = ({
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

 
  // Local state for option button feedback (green / red)
  // Use lifted state from parent instead of local state so the selection persists
  const selectedOption = selectedBox
  const isOptionCorrect = isCorrect // true / false / null
  // Refs for table rows and outlines
  const tbodyRef = useRef(null)
  const rowOutlineRef1 = useRef(null)
  const rowOutlineRef2 = useRef(null)

  // Get row index from animal name
  const getRowIndex = (animalName) => {
    if (!animalName || !data?.Table?.tableBody) return null
    const rows = ['row1', 'row2', 'row3', 'row4']
    for (let i = 0; i < rows.length; i++) {
      if (data.Table.tableBody[rows[i]]?.cell1 === animalName) {
        return i
      }
    }
    return null
  }

  const selectedRowIndex1 = getRowIndex(selectedName1)
  const selectedRowIndex2 = getRowIndex(selectedName2)

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
  const minCount = Math.min(number1, number2)
  const shouldHighlightExtras = isCorrect === true

  // Get animal image path based on animal name
  const getAnimalImage = (animalName) => {
    if (!animalName) return null
    return `/assets/images/${animalName}.png`
  }

  const animalImage1 = getAnimalImage(selectedName1)
  const animalImage2 = getAnimalImage(selectedName2)

  const selectedMoreAnimal = number1 > number2 ? selectedName1 : selectedName2
  const selectedLessAnimal = number1 > number2 ? selectedName2 : selectedName1


  // Calculate the difference between the two numbers
  const difference = Math.abs(number1 - number2)


  // Determine the correct option based on difference
  // difference 1 -> option1, difference 2 -> option2, difference 3 -> option3
  const correctOption = difference === 1 ? 'option1' : difference === 2 ? 'option2' : difference === 3 ? 'option3' : null

  

  // Position row outlines
  useEffect(() => {
    const updateOutlines = () => {
      if (!tbodyRef.current) return

      const tbodyRows = tbodyRef.current.querySelectorAll("tr")
      const wrapper = tbodyRef.current.closest(".table-wrapper")
      if (!wrapper) return

      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // Position outline for first selected row
      if (selectedRowIndex1 !== null && rowOutlineRef1.current && tbodyRows[selectedRowIndex1]) {
        const row = tbodyRows[selectedRowIndex1]
        const rowRect = row.getBoundingClientRect()
        const wrapperRect = wrapper.getBoundingClientRect()

        const topPx = rowRect.top - wrapperRect.top
        const leftPx = rowRect.left - wrapperRect.left
        const widthPx = rowRect.width
        const heightPx = rowRect.height

        rowOutlineRef1.current.style.top = `${(topPx / viewportHeight) * 100}vh`
        rowOutlineRef1.current.style.left = `${(leftPx / viewportWidth) * 100}vw`
        rowOutlineRef1.current.style.width = `${(widthPx / viewportWidth) * 170}vw`
        rowOutlineRef1.current.style.height = `${(heightPx / viewportHeight) * 100}vh`
      }

      // Position outline for second selected row (if different from first)
      if (selectedRowIndex2 !== null && selectedRowIndex2 !== selectedRowIndex1 && rowOutlineRef2.current && tbodyRows[selectedRowIndex2]) {
        const row = tbodyRows[selectedRowIndex2]
        const rowRect = row.getBoundingClientRect()
        const wrapperRect = wrapper.getBoundingClientRect()

        const topPx = rowRect.top - wrapperRect.top
        const leftPx = rowRect.left - wrapperRect.left
        const widthPx = rowRect.width
        const heightPx = rowRect.height

        rowOutlineRef2.current.style.top = `${(topPx / viewportHeight) * 100}vh`
        rowOutlineRef2.current.style.left = `${(leftPx / viewportWidth) * 100}vw`
        rowOutlineRef2.current.style.width = `${(widthPx / viewportWidth) * 170}vw`
        rowOutlineRef2.current.style.height = `${(heightPx / viewportHeight) * 100}vh`
      }
    }

    updateOutlines()
    window.addEventListener("resize", updateOutlines)
    return () => window.removeEventListener("resize", updateOutlines)
  }, [selectedName1, selectedName2, selectedRowIndex1, selectedRowIndex2])

  const handleCorrectAnswer = (optionKey) => {
    playSound('correct')
    setNavTextOverride(data.navigationArea.text2)
    setSelectedBox(optionKey)
    setIsCorrect(true)
    setIsButtonClicked(true)
    const newFooterImage = "/public/assets/images/Aisha Claping Wide.png"
    const newImageProp = "h-[53%] pl-[2vw]"
    setFooterImage(newFooterImage)
    setImageProp(newImageProp)
  }

  const handleWrongAnswer = (optionKey) => {
    playSound('wrong')
    setSelectedBox(optionKey)
    setIsCorrect(false)
    const newFooterImage = "/public/assets/images/aisha_think.png"
    const newImageProp = "h-[53%] pl-[4vw]"
    setFooterImage(newFooterImage)
    setImageProp(newImageProp)
  }

  // Disable other options once a correct answer has been chosen
  const isOptionDisabled = (optionKey) => {
    // If a correct option is already selected, disable all others
    if (isCorrect === true && selectedOption && selectedOption !== optionKey) {
      return true
    }
    return false
  }

  // Get background color class for an option button based on selection + correctness
  const getOptionBgClass = (optionKey) => {
    if (selectedOption === optionKey) {
      if (isCorrect === true) return 'bg-[#70f942]'
      if (isCorrect === false) return 'bg-[#f94242]'
    }
    return 'bg-[#F9A942]'
  }

  

  const handleOptionClick = (optionNumber) => {
    const optionKey = `option${optionNumber}`

    // Don't allow clicking disabled options
    if (isOptionDisabled(optionKey)) return

    if (optionKey === correctOption) {
      handleCorrectAnswer(optionKey)
    } else {
      handleWrongAnswer(optionKey)
    }
  }

  // const getOptionClassName = (optionNumber) => {
  //   const optionKey = `option${optionNumber}`
  //   let baseClass = "h-[7vw] w-[7vw] bg-[#F9A942] rounded-[1.5vh] flex justify-center items-center text-[3vw] transition-all cursor-pointer"

  //   if (selectedBox === optionKey) {
  //     return `${baseClass} bg-[#747474]`
  //   }

  //   return `${baseClass} hover:bg-[#FFB84D] hover:scale-110`
  // }

  const getFeedbackMessage = () => {
    // If no option has been selected yet, show initial feedback
    if (!selectedOption) {
      // Pluralize animal names based on their counts
      const moreCount = number1 > number2 ? number1 : number2
      const lessCount = number1 > number2 ? number2 : number1
      const moreNameForSentence = formatAnimalName(selectedMoreAnimal, moreCount)
      const lessNameForSentence = formatAnimalName(selectedLessAnimal, lessCount)
      
      return (
        <>
          <strong className="text-[#F9A942]">{data.feedbackArea.text1}</strong> {moreNameForSentence} {data.feedbackArea.text2} {lessNameForSentence} {data.feedbackArea.text3} <br/><br/> <strong className='text-[#F9A942]'>{data.feedbackArea.hint} {moreNameForSentence}</strong>
        </>
      )
    }
    
    // If correct option is selected, show correct feedback
    if (isCorrect === true && data.correctFeedbackArea) {
      const isPlural = difference !== 1
      const verb = isPlural ? data.correctFeedbackArea.are : data.correctFeedbackArea.is

      // For the "extra" sentence, pluralise by difference
      const extraAnimalName = formatAnimalName(selectedMoreAnimal, difference)

      // For the comparison sentence, pluralise by actual table counts
      const moreCount = number1 > number2 ? number1 : number2
      const lessCount = number1 > number2 ? number2 : number1
      const moreBaseName = selectedMoreAnimal
      const lessBaseName = selectedLessAnimal
      const moreNameForSentence = formatAnimalName(moreBaseName, moreCount)
      const lessNameForSentence = formatAnimalName(lessBaseName, lessCount)

      return (
        <>
          {data.correctFeedbackArea.text1}
          <br />
          <br />
          {data.correctFeedbackArea.text2} {verb} {difference}{' '}
          {data.correctFeedbackArea.extra} {extraAnimalName}.
          <br />
          <br />
          {data.correctFeedbackArea.text3} {moreNameForSentence}{' '}
          {data.correctFeedbackArea.text4} {lessNameForSentence}{' '}
          {data.correctFeedbackArea.text5} {difference}.
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
    // If wrong option is selected, show wrong feedback
    if (isCorrect === false && data.wrongFeedbackArea) {
      return (
        <>
          {data.wrongFeedbackArea.text1} {largerName} {data.wrongFeedbackArea.and} {smallerName}.<br/> <strong className='text-[#F9A942]'>{data.wrongFeedbackArea.text3} {largerName} = {data.wrongFeedbackArea.text4} {largerName} - {data.wrongFeedbackArea.text4} {smallerName}</strong>.
        </>
      )
    }
    
    return null
  }

  return (
    <>
      <style>{`
      .table-wrapper {
        position: relative;
      }
      .row-outline {
        position: absolute;
        border-radius: 1.5vh;
        z-index: -1;
        pointer-events: none;
        transition: background-color 0.3s ease, outline 0.3s ease;
      }
      .row-outline.highlighted {
        background-color: rgba(116,116,116,0.5);
      }
      .row-outline-images {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5vh;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 100%;
        padding-left: 38vw;
        overflow: visible;
      }
      .row-outline-image {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .row-outline-image img {
        width: 4vw;
        height: 4vw;
        object-fit: contain;
      }
      .row-outline-image.extra img {
        outline: 0.45vh solid #F9A942;
        border-radius: 1vh;
        box-shadow: 0 0 0.8vh rgba(249, 169, 66, 0.55);
      }
    `}</style>
      <Layout2 data={data} page={page} setPage={setPage} nextButtonDisabled={!isButtonClicked}
        navTextOverride={navTextOverride}
        footerImage={footerImage}
        imageProp={imageProp}

        component1={
          <>
          <div className='h-full flex flex-col justify-center items-center '>
            <div className=" w-full text-[2.45vw] px-[1vh] ">
              {getFeedbackMessage()}
            </div>
            </div>
          </>
        }

        component2={
          <>
            <div className="w-[60%] h-[60%] flex justify-start items-start text-center pl-[3vw] self-start table-wrapper">

              <Table
                data={data}
                selectedName1={selectedName1}
                selectedName2={selectedName2}
                tbodyRef={tbodyRef}
              />

              {/* Row outline divs - only for selected rows */}
              {selectedRowIndex1 !== null && (
                <div
                  key={`row-outline-${selectedRowIndex1}`}
                  className="row-outline highlighted"
                  ref={rowOutlineRef1}
                >
                  {animalImage1 && number1 > 0 && (
                    <div className="row-outline-images">
                      {Array.from({ length: number1 }).map((_, index) => (
                        <div
                          key={index}
                          className={`row-outline-image ${
                            shouldHighlightExtras && number1 > number2 && index >= minCount ? 'extra' : ''
                          }`}
                        >
                          <img src={animalImage1} alt={selectedName1} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {selectedRowIndex2 !== null && selectedRowIndex2 !== selectedRowIndex1 && (
                <div
                  key={`row-outline-${selectedRowIndex2}`}
                  className="row-outline highlighted"
                  ref={rowOutlineRef2}
                >
                  {animalImage2 && number2 > 0 && (
                    <div className="row-outline-images">
                      {Array.from({ length: number2 }).map((_, index) => (
                        <div
                          key={index}
                          className={`row-outline-image ${
                            shouldHighlightExtras && number2 > number1 && index >= minCount ? 'extra' : ''
                          }`}
                        >
                          <img src={animalImage2} alt={selectedName2} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="h-[20%] w-full flex justify-center items-center gap-[8vw]">
              <div className="w-[20%] h-full rounded-[2vh] border-dashed border-[0.4vh] flex items-center justify-center border-[#747474] cursor-not-allowed">
                {selectedImage1 && (
                  <img src={selectedImage1} alt="selected" className="max-w-full max-h-full object-contain" />
                )}
              </div>
              <div className="w-[20%] h-full rounded-[2vh] border-dashed border-[0.4vh] flex items-center justify-center border-[#747474] cursor-not-allowed">
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
              <div
                className={`h-[7vw] w-[7vw] rounded-[1.5vh] flex justify-center items-center text-[3vw] ${
                  isOptionDisabled('option1') ? 'pointer-events-none opacity-50' : 'cursor-pointer'
                } ${getOptionBgClass('option1')}`}
                onClick={() => handleOptionClick(1)}
              >
                1
              </div>
              <div
                className={`h-[7vw] w-[7vw] rounded-[1.5vh] flex justify-center items-center text-[3vw] ${
                  isOptionDisabled('option2') ? 'pointer-events-none opacity-50' : 'cursor-pointer'
                } ${getOptionBgClass('option2')}`}
                onClick={() => handleOptionClick(2)}
              >
                2
              </div>
              <div
                className={`h-[7vw] w-[7vw] rounded-[1.5vh] flex justify-center items-center text-[3vw] ${
                  isOptionDisabled('option3') ? 'pointer-events-none opacity-50' : 'cursor-pointer'
                } ${getOptionBgClass('option3')}`}
                onClick={() => handleOptionClick(3)}
              >
                3
              </div>
            </div>

          </>
        }
      />
    </>
  )
}

export default page4