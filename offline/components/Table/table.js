const table = ({
  data,
  selectedName1,
  selectedName2,
  headerOutline,
  tbodyRef,
  highlightName
}) => {
  const isRowPlaced = rowName => {
    return rowName === selectedName1 || rowName === selectedName2;
  };
  const getRowOpacity = rowName => {
    if (selectedName1 && selectedName2 && !isRowPlaced(rowName)) {
      return 'opacity-40';
    }
    return '';
  };
  const getRowClass = rowName => {
    const opacityClass = getRowOpacity(rowName);
    const isHighlighted = highlightName && rowName === highlightName;
    const highlightClass = isHighlighted ? 'shadow-[0_0_1vh_0.3vh_rgba(255,255,255,1)] rounded-[1vh] bg-[rgba(255,255,255,0.1)]' : '';
    return `${opacityClass} ${highlightClass}`.trim();
  };

  // Get animal image path based on animal name
  const getAnimalImage = animalName => {
    if (!animalName) return null;
    return "./public/assets/images/" + animalName + ".png";
  };
  const animalImage1 = getAnimalImage(data.Table.tableBody.row1.cell1);
  const animalImage2 = getAnimalImage(data.Table.tableBody.row2.cell1);
  const animalImage3 = getAnimalImage(data.Table.tableBody.row3.cell1);
  const animalImage4 = getAnimalImage(data.Table.tableBody.row4.cell1);
  return /*#__PURE__*/React.createElement(React.Fragment, null, "  ", /*#__PURE__*/React.createElement("table", {
    className: "w-full border-white text-[2.45vw] text-white border-separate border-spacing-[1vh] table-fixed"
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    className: "w-[40%]"
  }), /*#__PURE__*/React.createElement("col", {
    className: "w-[50%]"
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "text-[#0c57ce] bg-gray-300 "
  }, /*#__PURE__*/React.createElement("th", {
    colSpan: 2,
    className: "rounded-[1vh]"
  }, data.Table.title))), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "rounded-[1vh] bg-[#0c57ce] text-[2vw] px-[2vh] border-[0.4vh] border-[#0c57ce]"
  }, data.Table.tableHeader.header1), /*#__PURE__*/React.createElement("th", {
    className: "rounded-[1vh] bg-[#0c57ce] text-[2vw] border-[0.4vh] border-[#0c57ce]"
  }, data.Table.tableHeader.header2))), /*#__PURE__*/React.createElement("tbody", {
    ref: tbodyRef
  }, /*#__PURE__*/React.createElement("tr", {
    className: getRowClass(data.Table.tableBody.row1.cell1)
  }, /*#__PURE__*/React.createElement("td", {
    className: "rounded-[1vh] border-[0.4vh] border-[#60a5fa] flex items-center justify-center gap-[1vh]"
  }, data.Table.tableBody.row1.cell1, animalImage1 && /*#__PURE__*/React.createElement("img", {
    className: "w-[4vw] h-[4vw] object-contain",
    src: animalImage1,
    alt: data.Table.tableBody.row1.cell1
  })), /*#__PURE__*/React.createElement("td", {
    className: "rounded-[1vh] border-[0.4vh] border-[#60a5fa]"
  }, data.Table.tableBody.row1.cell2)), /*#__PURE__*/React.createElement("tr", {
    className: getRowClass(data.Table.tableBody.row2.cell1)
  }, /*#__PURE__*/React.createElement("td", {
    className: "rounded-[1vh] border-[0.4vh] border-[#60a5fa] flex items-center justify-center gap-[1vh]"
  }, data.Table.tableBody.row2.cell1, animalImage2 && /*#__PURE__*/React.createElement("img", {
    className: "w-[4vw] h-[4vw] object-contain",
    src: animalImage2,
    alt: data.Table.tableBody.row2.cell1
  })), /*#__PURE__*/React.createElement("td", {
    className: "rounded-[1vh] border-[0.4vh] border-[#60a5fa]"
  }, data.Table.tableBody.row2.cell2)), /*#__PURE__*/React.createElement("tr", {
    className: getRowClass(data.Table.tableBody.row3.cell1)
  }, /*#__PURE__*/React.createElement("td", {
    className: "rounded-[1vh] border-[0.4vh] border-[#60a5fa] flex items-center justify-center gap-[1vh]"
  }, data.Table.tableBody.row3.cell1, animalImage3 && /*#__PURE__*/React.createElement("img", {
    className: "w-[4vw] h-[4vw] object-contain",
    src: animalImage3,
    alt: data.Table.tableBody.row3.cell1
  })), /*#__PURE__*/React.createElement("td", {
    className: "rounded-[1vh] border-[0.4vh] border-[#60a5fa]"
  }, data.Table.tableBody.row3.cell2)), /*#__PURE__*/React.createElement("tr", {
    className: getRowClass(data.Table.tableBody.row4.cell1)
  }, /*#__PURE__*/React.createElement("td", {
    className: "rounded-[1vh] border-[0.4vh] border-[#60a5fa] flex items-center justify-center gap-[1vh]"
  }, data.Table.tableBody.row4.cell1, animalImage4 && /*#__PURE__*/React.createElement("img", {
    className: "w-[4vw] h-[4vw] object-contain",
    src: animalImage4,
    alt: data.Table.tableBody.row4.cell1
  })), /*#__PURE__*/React.createElement("td", {
    className: "rounded-[1vh] border-[0.4vh] border-[#60a5fa]"
  }, data.Table.tableBody.row4.cell2)))));
};
window.Table = table;