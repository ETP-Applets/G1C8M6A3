const button = ({
  text = '',
  onClick,
  className = '',
  textSize = '2.45vw',
  textColor = 'black',
  disabled = false
}) => {
  const baseClasses = "flex justify-center items-center rounded-[1vh]";
  return /*#__PURE__*/React.createElement("button", {
    className: `${baseClasses} text-[${textSize}] text-${textColor} ${className}`,
    onClick: onClick,
    disabled: disabled
  }, text);
};
window.Button = button;