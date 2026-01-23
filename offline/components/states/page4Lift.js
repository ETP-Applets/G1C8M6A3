const page4Lift = ({
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
  setNavTextOverride
}) => {
  const [footerImage, setFooterImage] = useState('./public/assets/images/aisha_happy.png');
  const [imageProp, setImageProp] = useState('h-[53%] pl-[8vw]');
  if (page === 4) {
    return /*#__PURE__*/React.createElement(Page4, {
      page: page,
      data: data,
      setPage: setPage,
      isButtonClicked: isButtonClicked,
      setIsButtonClicked: setIsButtonClicked,
      page2State: page2State,
      selectedBox: selectedBox,
      setSelectedBox: setSelectedBox,
      isCorrect: isCorrect,
      setIsCorrect: setIsCorrect,
      feedbackText: feedbackText,
      setFeedbackText: setFeedbackText,
      navTextOverride: navTextOverride,
      setNavTextOverride: setNavTextOverride,
      footerImage: footerImage,
      imageProp: imageProp,
      setFooterImage: setFooterImage,
      setImageProp: setImageProp
    });
  }
  return null;
};
window.Page4Lift = page4Lift;