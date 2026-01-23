const navText = ({
  data,
  navTextOverride
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "h-[8vh] w-full text-[2.45vw] flex justify-center items-center text-white bg-[rgba(255,255,255,0.05)] rounded-md  "
  }, navTextOverride || data.navigationArea.text);
};
window.NavText = navText;