const page5 = ({
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
  setImageProp
}) => {
  const isImagePlaced = imageSrc => {
    return selectedImage1 === imageSrc || selectedImage2 === imageSrc;
  };
  const handleImageClick = (imageSrc, name) => {
    if (isImagePlaced(imageSrc)) return;
    if (selectedImage1 && selectedImage2) return;
    playSound('click');
    if (!selectedImage1) {
      setSelectedImage1(imageSrc);
      setSelectedName1(name);
    } else if (!selectedImage2) {
      setSelectedImage2(imageSrc);
      setSelectedName2(name);
      setIsButtonClicked(true);
      setNavTextOverride(data.navigationArea.text2);
      const newFooterImage = "./public/assets/images/Aisha Pointing Left Mid.png";
      const newImageProp = "h-[53%] pl-[4vw]";
      setFooterImage(newFooterImage);
      setImageProp(newImageProp);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Layout2, {
    data: data,
    page: page,
    setPage: setPage,
    nextButtonDisabled: !isButtonClicked,
    navTextOverride: navTextOverride,
    footerImage: footerImage,
    imageProp: imageProp,
    component1: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "h-full flex flex-col justify-center items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: " w-full text-[2.45vw] px-[1vh]"
    }, selectedName1 && selectedName2 ? /*#__PURE__*/React.createElement(React.Fragment, null, data.feedbackArea1.text1, " ", /*#__PURE__*/React.createElement("strong", {
      className: "text-[#F9A942]"
    }, selectedName1), " ", data.feedbackArea1.and, " ", /*#__PURE__*/React.createElement("strong", {
      className: "text-[#F9A942]"
    }, selectedName2)) : data.feedbackArea.text1))),
    component2: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: " w-[60%] h-[60%] text-center flex flex-col justify-start items-center"
    }, /*#__PURE__*/React.createElement(Table, {
      data: data,
      selectedName1: selectedName1,
      selectedName2: selectedName2
    })), /*#__PURE__*/React.createElement("div", {
      className: "h-[18%] w-full flex justify-center items-center gap-[8vw]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-[20%] h-full rounded-[2vh] border-dashed border-[0.4vh] border-[#747474] flex items-center justify-center"
    }, selectedImage1 && /*#__PURE__*/React.createElement("img", {
      src: selectedImage1,
      alt: "selected",
      className: "max-w-full max-h-full object-contain"
    })), /*#__PURE__*/React.createElement("div", {
      className: "w-[20%] h-full rounded-[2vh] border-dashed border-[0.4vh] border-[#747474] flex items-center justify-center"
    }, selectedImage2 && /*#__PURE__*/React.createElement("img", {
      src: selectedImage2,
      alt: "selected",
      className: "max-w-full max-h-full object-contain"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "h-[8%] w-full flex justify-center items-center text-[2vw] text-white gap-[8vw]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-[20%] h-full text-center "
    }, selectedName1), /*#__PURE__*/React.createElement("div", {
      className: "w-[20%] h-full text-center "
    }, selectedName2)), /*#__PURE__*/React.createElement("div", {
      className: "h-[20%] w-full flex justify-center items-center gap-[5vw]"
    }, /*#__PURE__*/React.createElement("div", {
      className: `h-[8vw]  ${isImagePlaced('./public/assets/images/Goat.png') ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`,
      onClick: () => handleImageClick('./public/assets/images/Goat.png', data.Table.tableBody.row1.cell1)
    }, /*#__PURE__*/React.createElement("img", {
      src: "./public/assets/images/Goat.png",
      alt: "goat",
      className: "w-full h-full"
    })), /*#__PURE__*/React.createElement("div", {
      className: `h-[8vw]  ${isImagePlaced('./public/assets/images/Chicken.png') ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`,
      onClick: () => handleImageClick('./public/assets/images/Chicken.png', data.Table.tableBody.row2.cell1)
    }, /*#__PURE__*/React.createElement("img", {
      src: "./public/assets/images/Chicken.png",
      alt: "chicken",
      className: "w-full h-full"
    })), /*#__PURE__*/React.createElement("div", {
      className: `h-[8vw]  ${isImagePlaced('./public/assets/images/Cow.png') ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`,
      onClick: () => handleImageClick('./public/assets/images/Cow.png', data.Table.tableBody.row3.cell1)
    }, /*#__PURE__*/React.createElement("img", {
      src: "./public/assets/images/Cow.png",
      alt: "cow",
      className: "w-full h-full"
    })), /*#__PURE__*/React.createElement("div", {
      className: `h-[8vw]  ${isImagePlaced('./public/assets/images/Rabbit.png') ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`,
      onClick: () => handleImageClick('./public/assets/images/Rabbit.png', data.Table.tableBody.row4.cell1)
    }, /*#__PURE__*/React.createElement("img", {
      src: "./public/assets/images/Rabbit.png",
      alt: "rabbit",
      className: "w-full h-full"
    }))))
  }));
};
window.Page5 = page5;