const footer = ({
  data,
  totalPages = 6,
  page,
  setPage,
  playSound,
  nextButtonDisabled = false,
  navTextOverride
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "h-[10vh] w-[70%] flex justify-between items-center p-[1vh]"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "h-[8vh] w-[9vw] bg-[#F9A942]  text-[4vw] pb-[1vh]",
    text: data.navigatorArea.button1.text,
    onClick: () => {
      if (setPage && page > 1) {
        setPage(page - 1);
      }
    }
  }), /*#__PURE__*/React.createElement(NavText, {
    data: data,
    navTextOverride: navTextOverride
  }), /*#__PURE__*/React.createElement(Button, {
    className: `h-[8vh] w-[9vw] text-[4vw] pb-[1vh] ${nextButtonDisabled ? 'bg-gray-400' : 'bg-[#F9A942]'}`,
    text: data.navigatorArea.button2.text,
    disabled: nextButtonDisabled,
    onClick: () => {
      if (!nextButtonDisabled && setPage) {
        setPage(page + 1);
      }
    }
  }));
};
window.Footer = footer;