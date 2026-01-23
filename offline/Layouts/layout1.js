const Layout1 = ({
  page,
  data,
  setPage,
  onStart
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "h-screen w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-[15%] w-full text-[4vw] flex justify-center items-center text-[#F9A942] text-center"
  }, data.headers.title), /*#__PURE__*/React.createElement("div", {
    className: " h-[65%] w-full flex justify-center items-center text-[5vh] text-white text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: " h-full w-[55%] text-[3vw] flex flex-col justify-center items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[88%]"
  }, data.workingArea.welcomeText, /*#__PURE__*/React.createElement("span", {
    className: "text-[#F9A942]"
  }, data.workingArea.welcomeText1), ", ", /*#__PURE__*/React.createElement("span", {
    className: "text-[#F9A942]"
  }, data.workingArea.welcomeText2), ", ", data.workingArea.and, " ", /*#__PURE__*/React.createElement("span", {
    className: "text-[#F9A942]"
  }, data.workingArea.welcomeText3), "."), /*#__PURE__*/React.createElement("br", null), data.workingArea.startWelcomeText), /*#__PURE__*/React.createElement("div", {
    className: " h-full w-[40%]  flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement(Table, {
    data: data
  }))), /*#__PURE__*/React.createElement("div", {
    className: "h-[20%] w-full flex justify-center items-start"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "h-[10vh] w-[15vw] bg-[#F9A942] text-black text-[3vw]",
    text: data.workingArea.startText,
    onClick: () => {
      setPage(2);
      playSound('click');
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "./public/assets/gif/finger tap.gif",
    className: " absolute top-[85%] left-[57%] transform -translate-x-1/2 -translate-y-1/2 h-[15%]  pointer-events-none"
  }))));
};
window.Layout1 = Layout1;
{/* <button
                    className='h-[10vh] w-[20vw] flex justify-center items-center text-black bg-[#F9A942] rounded-md'
                    onClick={() => {
                        if (onStart) {
                            onStart(page)
                        } else {
                            page === 10 ? setPage(1) : setPage((prev) => prev + 1)
                        }
                        playSound('click')
                    }}
                >
                    
                    Start
                </button> */}