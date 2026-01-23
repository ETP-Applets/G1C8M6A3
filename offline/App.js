const { StrictMode, useCallback, useEffect, useMemo, useRef, useState } = React;
const { createRoot } = ReactDOM;
const { motion } = window.Motion || {};

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [page2State, setPage2State] = useState(null);
  const [page3IsButtonClicked, setPage3IsButtonClicked] = useState(false);
  const [page3SelectedBox, setPage3SelectedBox] = useState(null);
  const [page3IsCorrect, setPage3IsCorrect] = useState(null);
  const [page3FeedbackText, setPage3FeedbackText] = useState(null);
  const [page3NavTextOverride, setPage3NavTextOverride] = useState(null);
  const [page4IsButtonClicked, setPage4IsButtonClicked] = useState(false);
  const [page4SelectedBox, setPage4SelectedBox] = useState(null);
  const [page4IsCorrect, setPage4IsCorrect] = useState(null);
  const [page4FeedbackText, setPage4FeedbackText] = useState(null);
  const [page4NavTextOverride, setPage4NavTextOverride] = useState(null);
  const [page5State, setPage5State] = useState(null);
  const [page6IsButtonClicked, setPage6IsButtonClicked] = useState(false);
  const [page6SelectedBox, setPage6SelectedBox] = useState(null);
  const [page6IsCorrect, setPage6IsCorrect] = useState(null);
  const [page6FeedbackText, setPage6FeedbackText] = useState(null);
  const [page6NavTextOverride, setPage6NavTextOverride] = useState(null);
  const [page7IsButtonClicked, setPage7IsButtonClicked] = useState(false);
  const [page7SelectedBox, setPage7SelectedBox] = useState(null);
  const [page7IsCorrect, setPage7IsCorrect] = useState(null);
  const [page7FeedbackText, setPage7FeedbackText] = useState(null);
  const [page7NavTextOverride, setPage7NavTextOverride] = useState(null);

  // Determine which language to use based on preferredLanguage
  const language = window.currentLanguage ;

  let currentPage = null;
  if (language === 'en' && data?.en?.["standard-ui"]) {
    currentPage = data?.en?.["standard-ui"]?.[0]?.[`page${page}`];
  } else if (language === 'id' && data?.id?.["standard-ui"]) {
    currentPage = data?.id?.["standard-ui"]?.[0]?.[`page${page}`];
  }
  useEffect(() => {
    // Now access the data
    if (window.appData) {
      console.log(window.appData);
      setData(window.appData);
      return;
    }
  }, []);
  if (!data) {
    return /*#__PURE__*/React.createElement("div", {
      className: "h-screen w-screen flex justify-center items-center text-2xl text-orange-600"
    }, "No data available");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, page === 1 && /*#__PURE__*/React.createElement(Page1, {
    page: page,
    data: currentPage,
    setPage: setPage
  }), /*#__PURE__*/React.createElement(Page2Lift, {
    page: page,
    data: currentPage,
    setPage: setPage,
    setPage2State: setPage2State
  }), /*#__PURE__*/React.createElement(Page3Lift, {
    page: page,
    data: currentPage,
    setPage: setPage,
    page2State: page2State,
    isButtonClicked: page3IsButtonClicked,
    setIsButtonClicked: setPage3IsButtonClicked,
    selectedBox: page3SelectedBox,
    setSelectedBox: setPage3SelectedBox,
    isCorrect: page3IsCorrect,
    setIsCorrect: setPage3IsCorrect,
    feedbackText: page3FeedbackText,
    setFeedbackText: setPage3FeedbackText,
    navTextOverride: page3NavTextOverride,
    setNavTextOverride: setPage3NavTextOverride
  }), /*#__PURE__*/React.createElement(Page4Lift, {
    page: page,
    data: currentPage,
    setPage: setPage,
    page2State: page2State,
    isButtonClicked: page4IsButtonClicked,
    setIsButtonClicked: setPage4IsButtonClicked,
    selectedBox: page4SelectedBox,
    setSelectedBox: setPage4SelectedBox,
    isCorrect: page4IsCorrect,
    setIsCorrect: setPage4IsCorrect,
    feedbackText: page4FeedbackText,
    setFeedbackText: setPage4FeedbackText,
    navTextOverride: page4NavTextOverride,
    setNavTextOverride: setPage4NavTextOverride
  }), /*#__PURE__*/React.createElement(Page5Lift, {
    page: page,
    data: currentPage,
    setPage: setPage,
    setPage5State: setPage5State
  }), /*#__PURE__*/React.createElement(Page6Lift, {
    page: page,
    data: currentPage,
    setPage: setPage,
    page5State: page5State,
    isButtonClicked: page6IsButtonClicked,
    setIsButtonClicked: setPage6IsButtonClicked,
    selectedBox: page6SelectedBox,
    setSelectedBox: setPage6SelectedBox,
    isCorrect: page6IsCorrect,
    setIsCorrect: setPage6IsCorrect,
    feedbackText: page6FeedbackText,
    setFeedbackText: setPage6FeedbackText,
    navTextOverride: page6NavTextOverride,
    setNavTextOverride: setPage6NavTextOverride
  }), /*#__PURE__*/React.createElement(Page7Lift, {
    page: page,
    data: currentPage,
    setPage: setPage,
    page5State: page5State,
    isButtonClicked: page7IsButtonClicked,
    setIsButtonClicked: setPage7IsButtonClicked,
    selectedBox: page7SelectedBox,
    setSelectedBox: setPage7SelectedBox,
    isCorrect: page7IsCorrect,
    setIsCorrect: setPage7IsCorrect,
    feedbackText: page7FeedbackText,
    setFeedbackText: setPage7FeedbackText,
    navTextOverride: page7NavTextOverride,
    setNavTextOverride: setPage7NavTextOverride
  }), page === 8 && /*#__PURE__*/React.createElement(Page8, {
    page: page,
    data: currentPage,
    setPage: setPage,
    resetApplication: () => window.location.reload()
  }));
}
window.App = App;