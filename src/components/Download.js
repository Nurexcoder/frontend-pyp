import React from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

const DownloadBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 460px;
  width: 420px;
  //background: rgba(255, 254, 254, 0.83);
  //border: 1px solid rgba(168, 179, 207, 0.2);
  box-sizing: border-box;
  background: #F7F5F5;
  border: 1px solid #868686;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.36);
  border-radius: 1rem;
  padding: 1rem;
  margin: 16px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: black;
  box-sizing: border-box;
`;
const PdfView = styled.img`
  width: 302px;
  height: 160px;
  background: #ffffff;
  border-radius: 31px;
  cursor:pointer;
`;
const Foot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const More = styled(MoreVertIcon)`
  cursor: pointer;
`;
const DownloadIcon = styled(DownloadForOfflineOutlinedIcon)`
  font-weight: 100;
  /* cursor: pointer; */
`;
const Download = ({ data }) => {
  console.log(data);
const Tittle = styled.div`
    font-size: 75%;
`;
const UBy = styled.div`

`;
  return (
    <DownloadBox>
      <Head>
        <Tittle>
          <h1>SUBJECT NAMEkdsfjoiaewjnfjnew</h1>
        <UBy>Uploaded by</UBy>
        </Tittle>
        <More/>
      </Head>
      <PdfView src="/images/pdf.png" alt="img"></PdfView>
      <Foot>
        <a href={data.file} target="_blank">
        <DownloadIcon />
        </a>
        <DeleteIcon />
        <ShareIcon />
      </Foot>
    </DownloadBox>
  );
};

export default Download;
