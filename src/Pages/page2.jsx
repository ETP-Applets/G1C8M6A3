import React from 'react'
import Layout2 from '../Layouts/layout2'
import Button from '../components/Buttons/button'
import Table from '../components/Table/table'
import { playSound } from '../components/audio'

const page2 = ({
  data,
  page,
  setPage,
  isButtonClicked,
  setIsButtonClicked,
  selectedImage1,
  setSelectedImage1,
  selectedImage2,
  setSelectedImage2,
  selectedName1,
  setSelectedName1,
  selectedName2,
  setSelectedName2,
  navTextOverride,
  setNavTextOverride,
  footerImage,
  imageProp,
  setFooterImage,
  setImageProp,
}) => {
  const isImagePlaced = (imageSrc) => {
    return selectedImage1 === imageSrc || selectedImage2 === imageSrc


  }

  const handleImageClick = (imageSrc, name) => {
    if (isImagePlaced(imageSrc)) return
    if (selectedImage1 && selectedImage2) return
    playSound('click')
    if (!selectedImage1) {
      setSelectedImage1(imageSrc)
      setSelectedName1(name)
    } else if (!selectedImage2) {
      setSelectedImage2(imageSrc)
      setSelectedName2(name)
      setIsButtonClicked(true)
      setNavTextOverride(data.navigationArea.text2)
      const newFooterImage = "/public/assets/images/aisha_happy.png"
      const newImageProp = "h-[53%] pl-[8vw]"
      setFooterImage(newFooterImage)
      setImageProp(newImageProp)
    }
  }

  return (
    <>
      <Layout2 data={data} page={page} setPage={setPage}
        nextButtonDisabled={!isButtonClicked}
        navTextOverride={navTextOverride}
        footerImage={footerImage}
        imageProp={imageProp}

        component1={
          <>
            <div className=" w-full h-[30%] mt-[6vw] text-[2.45vw] px-[1vh]">
              {selectedName1 && selectedName2 ? (
                <>{data.feedbackArea1.text1} <strong className='text-[#F9A942]'>{selectedName1}</strong> {data.feedbackArea1.and} <strong className='text-[#F9A942]'>{selectedName2}</strong></>
              ) : (
                data.feedbackArea.text1
              )}
            </div>
          </>
        }

        component2={
          <>
            <div className=" w-[60%] h-[60%] text-center flex flex-col justify-start items-center">
              <Table data={data} selectedName1={selectedName1} selectedName2={selectedName2} />
            </div>
            <div className="h-[20%] w-full flex justify-center items-center gap-[8vw]">
              <div className="w-[20%] h-full rounded-[2vh] border-dashed border-[0.4vh] border-[#747474] flex items-center justify-center">
                {selectedImage1 && (
                  <img src={selectedImage1} alt="selected" className="max-w-full max-h-full object-contain" />
                )}
              </div>
              <div className="w-[20%] h-full rounded-[2vh] border-dashed border-[0.4vh] border-[#747474] flex items-center justify-center">
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
                className={`h-[8vw]  ${isImagePlaced('/public/assets/images/Goat.png') ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
                onClick={() => handleImageClick('/public/assets/images/Goat.png', data.Table.tableBody.row1.cell1)}
              >
                <img src="/public/assets/images/Goat.png" alt="goat" className='w-full h-full' />
              </div>
              <div
                className={`h-[8vw]  ${isImagePlaced('/public/assets/images/Chicken.png') ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
                onClick={() => handleImageClick('/public/assets/images/Chicken.png', data.Table.tableBody.row2.cell1)}
              >
                <img src="/public/assets/images/Chicken.png" alt="chicken" className='w-full h-full' />
              </div>
              <div
                className={`h-[8vw]  ${isImagePlaced('/public/assets/images/Cow.png') ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
                onClick={() => handleImageClick('/public/assets/images/Cow.png', data.Table.tableBody.row3.cell1)}
              >
                <img src="/public/assets/images/Cow.png" alt="cow" className='w-full h-full' />
              </div>
              <div
                className={`h-[8vw]  ${isImagePlaced('/public/assets/images/Rabbit.png') ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
                onClick={() => handleImageClick('/public/assets/images/Rabbit.png', data.Table.tableBody.row4.cell1)}
              >
                <img src="/public/assets/images/Rabbit.png" alt="rabbit" className='w-full h-full' />
              </div>
            </div>

          </>
        }
      />
    </>
  )
}
export default page2