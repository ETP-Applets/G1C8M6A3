const Layout3 = ({
  page,
  data,
  setPage,
  onStart,
  resetApplication
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "h-full w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-[10vh] w-full text-[4vw] flex justify-center items-center text-[#F9A942] text-center"
  }, data.workingArea.header), /*#__PURE__*/React.createElement("div", {
    className: "h-[65vh] w-full flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[65vw] justify-center items-center text-[3vw] text-white text-center"
  }, data.workingArea.title, /*#__PURE__*/React.createElement("div", {
    className: "text-[3vw] text-white text-center"
  }, data.workingArea.Text, /*#__PURE__*/React.createElement("span", {
    className: "text-[#F9A942]"
  }, data.workingArea.TextBold), data.workingArea.TextBold1, /*#__PURE__*/React.createElement("span", {
    className: "text-[#F9A942]"
  }, data.workingArea.TextBold2), " ", data.workingArea.TextBy, /*#__PURE__*/React.createElement("span", {
    className: "text-[#F9A942]"
  }, data.workingArea.TextBold3), "."), /*#__PURE__*/React.createElement("div", {
    className: "text-[3vw] text-white text-center pt-[6vh]"
  }, data.workingArea.Text3))), /*#__PURE__*/React.createElement("div", {
    className: "h-[25vh] w-full flex justify-center items-start"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "h-[10vh] w-[20vw] bg-[#F9A942] text-[3vw] text-black cursor-pointer",
    text: data.workingArea.startText,
    onClick: () => {
      if (resetApplication) {
        resetApplication();
      } else {
        setPage(1);
      }
      playSound('click');
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "./public/assets/gif/finger tap.gif",
    className: " absolute top-[80%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 h-[15%]  pointer-events-none"
  }))));
};
window.Layout3 = Layout3;