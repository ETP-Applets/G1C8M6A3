const Layout2 = ({
  data,
  setPage,
  page,
  headerText,
  component1,
  component2,
  nextButtonDisabled,
  feedbackText,
  navTextOverride,
  footerImage,
  imageProp
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: " h-screen w-screen justify-center items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: " h-[88vh] w-[99vw] justify-center items-center m-[1vh] flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full w-[30%]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-[60%] w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full w-full bg-[rgba(255,255,255)] rounded-[2vh] border-[1vh] border-[#F9A942] "
  }, component1), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-[20%] transform -translate-x-1/2 top-full w-0 h-0 border-l-[2vh] border-r-[2vh] border-t-[2vh] border-l-transparent border-r-transparent border-t-[#F9A942]"
  })), footerImage && /*#__PURE__*/React.createElement("img", {
    src: footerImage,
    className: imageProp
  })), /*#__PURE__*/React.createElement("div", {
    className: "h-full w-[70%] rounded-[2vh] flex flex-col justify-between items-center border-[0.5vh] border-[#F9A942]"
  }, component2)), /*#__PURE__*/React.createElement("div", {
    className: "h-[10vh] w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-[10vh] w-full flex justify-end items-center"
  }, /*#__PURE__*/React.createElement(Footer, {
    data: data,
    page: page,
    setPage: page => {
      setPage(page);
      playSound('click');
    },
    nextButtonDisabled: nextButtonDisabled,
    navTextOverride: navTextOverride
  }), !nextButtonDisabled && /*#__PURE__*/React.createElement("img", {
    src: "./public/assets/gif/finger tap.gif",
    className: " absolute top-[92%] left-[96%] h-[8vh]  pointer-events-none"
  })))));
};
window.Layout2 = Layout2;