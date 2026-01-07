import { useState, useEffect } from 'react'
import './App.css'
import Page1 from './Pages/page1'
import Page2 from './Pages/page2'
import Page3 from './Pages/page3'
import { initialPage1State } from './States/page1State'
import { initialPage2State } from './States/page2State'
import { initialPage3State } from './States/page3State'

function App() {

  const [data, setData] = useState(null)
  const [page, setPage] = useState(1)
  const [pageStates, setPageStates] = useState({
    1: initialPage1State,
    2: initialPage2State,
    3: initialPage3State,
  })

  const updatePageState = (pageNum, stateKey, value) => {
    setPageStates(prev => ({
      ...prev,
      [pageNum]: {
        ...prev[pageNum],
        [stateKey]: value
      }
    }))
  }


  let currentPage = null
  if (data?.id?.["standard-ui"]) {
    currentPage = data?.id?.["standard-ui"]?.[0]?.[`page${page}`]
  } else if (data?.en?.["standard-ui"]) {
    currentPage = data?.en?.["standard-ui"]?.[0]?.[`page${page}`]
  }


  useEffect(() => {

    // Now access the data
    if (window.appData) {
      console.log(window.appData)
      setData(window.appData)
      return
    }

  }, [])





  if (!data) {
    return (
      <div className='h-screen w-screen flex justify-center items-center text-2xl text-orange-600'>
        No data available
      </div>
    )
  }

  return (
    <>
      {page === 1 && <Page1 page={page} data={currentPage} setPage={setPage} />}
      {page === 2 && (
        <Page2 
          page={page} 
          data={currentPage} 
          setPage={setPage} 
          pageState={pageStates[2] || {}}
          updatePageState={updatePageState}
        />
      )}
      {page === 3 && (
        <Page3 
          page={page} 
          data={currentPage} 
          setPage={setPage} 
          pageState={pageStates[3] || {}}
          updatePageState={updatePageState}
        />
      )}
    </>
  )
}

export default App
