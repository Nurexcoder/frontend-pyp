import React from 'react'
import styled from 'styled-components'

const DownloadBox=styled.div`
    background-color: black;
`
const Download = () => {
  return (
    <DownloadBox >
        <div className="head"> header </div>
        <div className="pdfView">
        pdf
        </div>
        <div className="foot">
        footer
        </div>
    </DownloadBox>
  )
}

export default Download