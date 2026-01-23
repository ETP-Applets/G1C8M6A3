import React from 'react'

const table = ({ data, selectedName1, selectedName2, headerOutline, tbodyRef, highlightName }) => {
    const isRowPlaced = (rowName) => {
        return rowName === selectedName1 || rowName === selectedName2
    }

    const getRowOpacity = (rowName) => {
        if (selectedName1 && selectedName2 && !isRowPlaced(rowName)) {
            return 'opacity-40'
        }
        return ''
    }

    const getRowClass = (rowName) => {
        const opacityClass = getRowOpacity(rowName)
        const isHighlighted = highlightName && rowName === highlightName
        const highlightClass = isHighlighted
            ? 'ring-[0.5vh] rounded-[1vh] bg-[rgba(116,116,116,0.5)]'
            : ''

        return `${opacityClass} ${highlightClass}`.trim()
    }

      // Get animal image path based on animal name
  const getAnimalImage = (animalName) => {
    if (!animalName) return null
    return `/assets/images/${animalName}.png`
  }

  const animalImage1 = getAnimalImage(data.Table.tableBody.row1.cell1)
  const animalImage2 = getAnimalImage(data.Table.tableBody.row2.cell1)
  const animalImage3 = getAnimalImage(data.Table.tableBody.row3.cell1)
  const animalImage4 = getAnimalImage(data.Table.tableBody.row4.cell1)

    return (
        <>  <table className="w-full border-white text-[2.45vw] text-white border-separate border-spacing-[1vh] table-fixed">
            <colgroup>
                <col className="w-[40%]" />
                <col className="w-[50%]" />
            </colgroup>
            <thead>
                <tr className="text-[#0c57ce] bg-gray-300 ">
                    <th colSpan={2} className="rounded-[1vh]">{data.Table.title}</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th className="rounded-[1vh] bg-[#0c57ce] text-[2vw] px-[2vh] border-[0.4vh] border-[#0c57ce]">{data.Table.tableHeader.header1}</th>
                    <th className="rounded-[1vh] bg-[#0c57ce] text-[2vw] border-[0.4vh] border-[#0c57ce]">{data.Table.tableHeader.header2}</th>
                </tr>
            </thead>
            <tbody ref={tbodyRef}>
                <tr className={getRowClass(data.Table.tableBody.row1.cell1)}>
                    <td className="rounded-[1vh] border-[0.4vh] border-[#60a5fa] flex items-center justify-center gap-[1vh]">{data.Table.tableBody.row1.cell1}{animalImage1 && <img className="w-[4vw] h-[4vw] object-contain" src={animalImage1} alt={data.Table.tableBody.row1.cell1} />}</td>
                    <td className="rounded-[1vh] border-[0.4vh] border-[#60a5fa]">{data.Table.tableBody.row1.cell2}</td>
                </tr>
                <tr className={getRowClass(data.Table.tableBody.row2.cell1)}>
                    <td className="rounded-[1vh] border-[0.4vh] border-[#60a5fa] flex items-center justify-center gap-[1vh]">{data.Table.tableBody.row2.cell1}{animalImage2 && <img className="w-[4vw] h-[4vw] object-contain" src={animalImage2} alt={data.Table.tableBody.row2.cell1} />}</td>
                    <td className="rounded-[1vh] border-[0.4vh] border-[#60a5fa]">{data.Table.tableBody.row2.cell2}</td>
                </tr>
                <tr className={getRowClass(data.Table.tableBody.row3.cell1)}>
                    <td className="rounded-[1vh] border-[0.4vh] border-[#60a5fa] flex items-center justify-center gap-[1vh]">{data.Table.tableBody.row3.cell1}{animalImage3 && <img className="w-[4vw] h-[4vw] object-contain" src={animalImage3} alt={data.Table.tableBody.row3.cell1} />}</td>
                    <td className="rounded-[1vh] border-[0.4vh] border-[#60a5fa]">{data.Table.tableBody.row3.cell2}</td>
                </tr>
                <tr className={getRowClass(data.Table.tableBody.row4.cell1)}>
                    <td className="rounded-[1vh] border-[0.4vh] border-[#60a5fa] flex items-center justify-center gap-[1vh]">{data.Table.tableBody.row4.cell1}{animalImage4 && <img className="w-[4vw] h-[4vw] object-contain" src={animalImage4} alt={data.Table.tableBody.row4.cell1} />}</td>
                    <td className="rounded-[1vh] border-[0.4vh] border-[#60a5fa]" >{data.Table.tableBody.row4.cell2}</td>
                </tr>
            </tbody>
        </table></>
    )
}

export default table