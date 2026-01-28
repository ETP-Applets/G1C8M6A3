// const formatAnimalName = (name, count) => {
//   if (!name) return '';
//   if (count === 1) return name;
//   return `${name}s`;
// };
const page7 = ({
  data,
  page,
  setPage,
  isButtonClicked,
  setIsButtonClicked,
  page5State,
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
  setImageProp
}) => {
  // Get state from page5State (separate page state)
  const selectedImage1 = page5State?.selectedImage1 || null;
  const selectedImage2 = page5State?.selectedImage2 || null;
  const selectedName1 = page5State?.selectedName1 || null;
  const selectedName2 = page5State?.selectedName2 || null;

  // Local state for option button feedback (green / red)
  // Use lifted state from parent instead of local state so the selection persists
  const selectedOption = selectedBox;
  const isOptionCorrect = isCorrect; // true / false / null
  // Refs for table rows and outlines
  const tbodyRef = useRef(null);
  const rowOutlineRef1 = useRef(null);
  const rowOutlineRef2 = useRef(null);

  // Get row index from animal name
  const getRowIndex = animalName => {
    if (!animalName || !data?.Table?.tableBody) return null;
    const rows = ['row1', 'row2', 'row3', 'row4'];
    for (let i = 0; i < rows.length; i++) {
      if (data.Table.tableBody[rows[i]]?.cell1 === animalName) {
        return i;
      }
    }
    return null;
  };
  const selectedRowIndex1 = getRowIndex(selectedName1);
  const selectedRowIndex2 = getRowIndex(selectedName2);

  // Get numbers for each animal from table data
  const getAnimalNumber = animalName => {
    if (!animalName || !data?.Table?.tableBody) return 0;
    const rows = ['row1', 'row2', 'row3', 'row4'];
    for (const row of rows) {
      if (data.Table.tableBody[row]?.cell1 === animalName) {
        return data.Table.tableBody[row]?.cell2 || 0;
      }
    }
    return 0;
  };
  const number1 = getAnimalNumber(selectedName1);
  const number2 = getAnimalNumber(selectedName2);

  // Get animal image path based on animal name
  const getAnimalImage = animalName => {
    if (!animalName) return null;
    return `./public/assets/images/${animalName}.png`;
  };
  const animalImage1 = getAnimalImage(selectedName1);
  const animalImage2 = getAnimalImage(selectedName2);
  const selectedMoreAnimal = number1 < number2 ? selectedName1 : selectedName2;
  const selectedLessAnimal = number1 < number2 ? selectedName2 : selectedName1;

  // Calculate the difference between the two numbers
  const difference = Math.abs(number1 - number2);

  // Determine the correct option based on difference
  // difference 1 -> option1, difference 2 -> option2, difference 3 -> option3
  const correctOption = difference === 1 ? 'option1' : difference === 2 ? 'option2' : difference === 3 ? 'option3' : null;

  // Position row outlines
  useEffect(() => {
    const updateOutlines = () => {
      if (!tbodyRef.current) return;
      const tbodyRows = tbodyRef.current.querySelectorAll("tr");
      const wrapper = tbodyRef.current.closest(".table-wrapper");
      if (!wrapper) return;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Position outline for first selected row
      if (selectedRowIndex1 !== null && rowOutlineRef1.current && tbodyRows[selectedRowIndex1]) {
        const row = tbodyRows[selectedRowIndex1];
        const rowRect = row.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();
        const topPx = rowRect.top - wrapperRect.top;
        const leftPx = rowRect.left - wrapperRect.left;
        const widthPx = rowRect.width;
        const heightPx = rowRect.height;
        rowOutlineRef1.current.style.top = `${topPx / viewportHeight * 100}vh`;
        rowOutlineRef1.current.style.left = `${leftPx / viewportWidth * 100}vw`;
        rowOutlineRef1.current.style.width = `${widthPx / viewportWidth * 170}vw`;
        rowOutlineRef1.current.style.height = `${heightPx / viewportHeight * 100}vh`;
      }

      // Position outline for second selected row (if different from first)
      if (selectedRowIndex2 !== null && selectedRowIndex2 !== selectedRowIndex1 && rowOutlineRef2.current && tbodyRows[selectedRowIndex2]) {
        const row = tbodyRows[selectedRowIndex2];
        const rowRect = row.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();
        const topPx = rowRect.top - wrapperRect.top;
        const leftPx = rowRect.left - wrapperRect.left;
        const widthPx = rowRect.width;
        const heightPx = rowRect.height;
        rowOutlineRef2.current.style.top = `${topPx / viewportHeight * 100}vh`;
        rowOutlineRef2.current.style.left = `${leftPx / viewportWidth * 100}vw`;
        rowOutlineRef2.current.style.width = `${widthPx / viewportWidth * 170}vw`;
        rowOutlineRef2.current.style.height = `${heightPx / viewportHeight * 100}vh`;
      }
    };
    updateOutlines();
    window.addEventListener("resize", updateOutlines);
    return () => window.removeEventListener("resize", updateOutlines);
  }, [selectedName1, selectedName2, selectedRowIndex1, selectedRowIndex2]);
  const handleCorrectAnswer = optionKey => {
    playSound('correct');
    setNavTextOverride(data.navigationArea.text2);
    setSelectedBox(optionKey);
    setIsCorrect(true);
    setIsButtonClicked(true);
    const newFooterImage = "./public/assets/images/Aisha Claping Wide.png";
    const newImageProp = "h-[53%] pl-[2vw]";
    setFooterImage(newFooterImage);
    setImageProp(newImageProp);
  };
  const handleWrongAnswer = optionKey => {
    playSound('wrong');
    setSelectedBox(optionKey);
    setIsCorrect(false);
    const newFooterImage = "./public/assets/images/aisha_think.png";
    const newImageProp = "h-[53%] pl-[4vw]";
    setFooterImage(newFooterImage);
    setImageProp(newImageProp);
  };

  // Disable other options once a correct answer has been chosen
  const isOptionDisabled = optionKey => {
    // If a correct option is already selected, disable all others
    if (isCorrect === true && selectedOption && selectedOption !== optionKey) {
      return true;
    }
    return false;
  };

  // Get background color class for an option button based on selection + correctness
  const getOptionBgClass = optionKey => {
    if (selectedOption === optionKey) {
      if (isCorrect === true) return 'bg-[#70f942]';
      if (isCorrect === false) return 'bg-[#f94242]';
    }
    return 'bg-[#F9A942]';
  };
  const handleOptionClick = optionNumber => {
    const optionKey = `option${optionNumber}`;

    // Don't allow clicking disabled options
    if (isOptionDisabled(optionKey)) return;
    if (optionKey === correctOption) {
      handleCorrectAnswer(optionKey);
    } else {
      handleWrongAnswer(optionKey);
    }
  };
  const getFeedbackMessage = () => {
    // If no option has been selected yet, show initial feedback
    if (!selectedOption) {
      const moreCount = number1 > number2 ? number1 : number2;
      const lessCount = number1 > number2 ? number2 : number1;
      const moreNameForSentence = formatAnimalName(selectedMoreAnimal, moreCount);
      const lessNameForSentence = formatAnimalName(selectedLessAnimal, lessCount);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
        className: "text-[#F9A942]"
      }, data.feedbackArea.text1), " ", moreNameForSentence, " ", data.feedbackArea.text2, " ", lessNameForSentence, data.feedbackArea.text3, " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("strong", {
        className: "text-[#F9A942]"
      }, data.feedbackArea.hint, " ", moreNameForSentence));
    }

    // If correct option is selected, show correct feedback
    if (isCorrect === true && data.correctFeedbackArea) {
      const isPlural = difference !== 1;
      const verb = isPlural ? data.correctFeedbackArea.are : data.correctFeedbackArea.is;

      // Pluralize animal names based on counts
      const moreCount = number1 < number2 ? number1 : number2;
      const lessCount = number1 < number2 ? number2 : number1;
      const moreNameForSentence = formatAnimalName(selectedMoreAnimal, moreCount);
      const lessNameForSentence = formatAnimalName(selectedLessAnimal, lessCount);
      const missingAnimalName = formatAnimalName(selectedMoreAnimal, difference);
      return /*#__PURE__*/React.createElement(React.Fragment, null, data.correctFeedbackArea.text1, " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), " ", data.correctFeedbackArea.text2, " ", verb, " ", difference, " ", data.correctFeedbackArea.missing, " ", missingAnimalName, ". ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), " ", data.correctFeedbackArea.text3, " ", moreNameForSentence, " ", data.correctFeedbackArea.text4, " ", lessNameForSentence, " ", data.correctFeedbackArea.text5, " ", difference, ".");
    }

    // If wrong option is selected, show wrong feedback
    if (isCorrect === false && data.wrongFeedbackArea) {
      // Pluralize animal names based on counts
      const moreCount = number1 < number2 ? number1 : number2;
      const lessCount = number1 < number2 ? number2 : number1;
      const name1ForSentence = formatAnimalName(selectedName1, number1);
      const name2ForSentence = formatAnimalName(selectedName2, number2);
      const moreNameForSentence = formatAnimalName(selectedMoreAnimal, moreCount);
      const lessNameForSentence = formatAnimalName(selectedLessAnimal, lessCount);
      return /*#__PURE__*/React.createElement(React.Fragment, null, data.wrongFeedbackArea.text1, " ", name1ForSentence, " ", data.wrongFeedbackArea.and, " ", name2ForSentence, " ", data.wrongFeedbackArea.text2, ".", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong",{
        className: "text-[#F9A942]"
      }, data.wrongFeedbackArea.text3, " ", moreNameForSentence, " = ", data.wrongFeedbackArea.text4, " ", lessNameForSentence, " - ", data.wrongFeedbackArea.text4, " ", moreNameForSentence, "."));
    }
    return null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
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
    `), /*#__PURE__*/React.createElement(Layout2, {
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
      className: " w-full text-[2.45vw] px-[1vh] "
    }, getFeedbackMessage()))),
    component2: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "w-[60%] h-[60%] flex justify-start items-start text-center pl-[3vw] self-start table-wrapper"
    }, /*#__PURE__*/React.createElement(Table, {
      data: data,
      selectedName1: selectedName1,
      selectedName2: selectedName2,
      tbodyRef: tbodyRef
    }), selectedRowIndex1 !== null && /*#__PURE__*/React.createElement("div", {
      key: `row-outline-${selectedRowIndex1}`,
      className: "row-outline highlighted",
      ref: rowOutlineRef1
    }, animalImage1 && number1 > 0 && /*#__PURE__*/React.createElement("div", {
      className: "row-outline-images"
    }, Array.from({
      length: number1
    }).map((_, index) => /*#__PURE__*/React.createElement("div", {
      key: `img-${index}`,
      className: "row-outline-image"
    }, /*#__PURE__*/React.createElement("img", {
      src: animalImage1,
      alt: selectedName1
    }))), isCorrect === true && number1 < number2 && Array.from({
      length: difference
    }).map((_, index) => /*#__PURE__*/React.createElement("div", {
      key: `empty-${index}`,
      className: "row-outline-image empty-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-[4vw] h-[4vw] border-[0.45vh]  border-[#F9A942] rounded-[1vh]"
    }))))), selectedRowIndex2 !== null && selectedRowIndex2 !== selectedRowIndex1 && /*#__PURE__*/React.createElement("div", {
      key: `row-outline-${selectedRowIndex2}`,
      className: "row-outline highlighted",
      ref: rowOutlineRef2
    }, animalImage2 && number2 > 0 && /*#__PURE__*/React.createElement("div", {
      className: "row-outline-images"
    }, Array.from({
      length: number2
    }).map((_, index) => /*#__PURE__*/React.createElement("div", {
      key: `img-${index}`,
      className: "row-outline-image"
    }, /*#__PURE__*/React.createElement("img", {
      src: animalImage2,
      alt: selectedName2
    }))), isCorrect === true && number2 < number1 && Array.from({
      length: difference
    }).map((_, index) => /*#__PURE__*/React.createElement("div", {
      key: `empty-${index}`,
      className: "row-outline-image empty-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-[4vw] h-[4vw] border-[0.45vh]  border-[#F9A942] rounded-[1vh]"
    })))))), /*#__PURE__*/React.createElement("div", {
      className: "h-[18%] w-full flex justify-center items-center gap-[8vw]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-[20%] h-full rounded-[2vh] border-solid bg-blue-500 border-[0.4vh] flex items-center justify-center border-[#42b0f9] cursor-not-allowed"
    }, selectedImage1 && /*#__PURE__*/React.createElement("img", {
      src: selectedImage1,
      alt: "selected",
      className: "max-w-full max-h-full object-contain"
    })), /*#__PURE__*/React.createElement("div", {
      className: "w-[20%] h-full rounded-[2vh] border-solid bg-blue-500 border-[0.4vh] flex items-center justify-center border-[#42b0f9] cursor-not-allowed"
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
      className: `h-[7vw] w-[7vw] rounded-[1.5vh] flex justify-center items-center text-[3vw] ${isOptionDisabled('option1') ? 'pointer-events-none opacity-50' : 'cursor-pointer'} ${getOptionBgClass('option1')}`,
      onClick: () => handleOptionClick(1)
    }, "1"), /*#__PURE__*/React.createElement("div", {
      className: `h-[7vw] w-[7vw] rounded-[1.5vh] flex justify-center items-center text-[3vw] ${isOptionDisabled('option2') ? 'pointer-events-none opacity-50' : 'cursor-pointer'} ${getOptionBgClass('option2')}`,
      onClick: () => handleOptionClick(2)
    }, "2"), /*#__PURE__*/React.createElement("div", {
      className: `h-[7vw] w-[7vw] rounded-[1.5vh] flex justify-center items-center text-[3vw] ${isOptionDisabled('option3') ? 'pointer-events-none opacity-50' : 'cursor-pointer'} ${getOptionBgClass('option3')}`,
      onClick: () => handleOptionClick(3)
    }, "3")))
  }));
};
window.Page7 = page7;