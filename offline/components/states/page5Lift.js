const page5Lift = ({
  page,
  data,
  setPage,
  setPage5State
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedName1, setSelectedName1] = useState(null);
  const [selectedName2, setSelectedName2] = useState(null);
  const [navTextOverride, setNavTextOverride] = useState(null);
  const [footerImage, setFooterImage] = useState('./public/assets/images/aisha_happy.png');
  const [imageProp, setImageProp] = useState('h-[53%] pl-[8vw]');
  // Update parent with current state whenever it changes
  useEffect(() => {
    if (setPage5State) {
      setPage5State({
        selectedImage1,
        selectedImage2,
        selectedName1,
        selectedName2,
        isButtonClicked
      });
    }
  }, [selectedImage1, selectedImage2, selectedName1, selectedName2, isButtonClicked, setPage5State]);
  if (page === 5) {
    return /*#__PURE__*/React.createElement(Page5, {
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
window.Page5Lift = page5Lift;