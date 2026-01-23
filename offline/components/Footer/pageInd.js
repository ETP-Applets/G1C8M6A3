const pageInd = ({
  totalPages,
  page
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "h-[3vh] w-screen flex justify-center items-center gap-2 mb-2 "
  }, [...Array(totalPages)].map((_, index) => {
    const dotPage = index + 1;
    const isActive = page === dotPage;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: `w-[2.5vh] h-[2.5vh] rounded-full transition-all ${isActive ? 'bg-[#F9A942] border-2 border-white' : 'bg-gray-500'}`
    });
  }));
};
window.PageInd = pageInd;