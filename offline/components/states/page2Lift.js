const page2Lift = ({
  page,
  data,
  setPage,
  setPage2State
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedName1, setSelectedName1] = useState(null);
  const [selectedName2, setSelectedName2] = useState(null);
  const [navTextOverride, setNavTextOverride] = useState(null);
  const [footerImage, setFooterImage] = useState('./public/assets/images/Aisha Pointing Left Mid.png');
  const [imageProp, setImageProp] = useState('h-[53%] pl-[4vw]');

  // Update parent with current state whenever it changes
  useEffect(() => {
    if (setPage2State) {
      setPage2State({
        selectedImage1,
        selectedImage2,
        selectedName1,
        selectedName2,
        isButtonClicked
      });
    }
  }, [selectedImage1, selectedImage2, selectedName1, selectedName2, isButtonClicked, setPage2State]);
  if (page === 2) {
    return /*#__PURE__*/React.createElement(Page2, {
      page: page,
      data: data,
      setPage: setPage,
      isButtonClicked: isButtonClicked,
      setIsButtonClicked: setIsButtonClicked,
      selectedImage1: selectedImage1,
      setSelectedImage1: setSelectedImage1,
      selectedImage2: selectedImage2,
      setSelectedImage2: setSelectedImage2,
      selectedName1: selectedName1,
      setSelectedName1: setSelectedName1,
      selectedName2: selectedName2,
      setSelectedName2: setSelectedName2,
      navTextOverride: navTextOverride,
      setNavTextOverride: setNavTextOverride,
      footerImage: footerImage,
      imageProp: imageProp,
      setFooterImage: setFooterImage,
      setImageProp: setImageProp
    });
  }
};
window.Page2Lift = page2Lift;