import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Download from "./Download";
import styled from "styled-components";
import Navbar from "./Navbar";

const Filtter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 50%;
  align-items: center;
  margin: 10px;
`;
const Dbox = styled.div`
  display: flex;
  /* gap: 10px 10px; */
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 65px;
 // width: 90%;
  //align-items: center;
`;
const Bttn = styled.button`
  border-radius: 19px;
`;
const Fbox = styled.div`
  width: 144px;
  height: 36px;
  background-color: white;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  //margin: auto;

`;

const Download_Page = () => {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    axios.get("https://pypbackendserver.herokuapp.com/upload/file").then((response) => {
        console.log(response);
        return response.data;
      }).then((res) => {
        console.log(res);
        setCardData(res);
      });
  }, []);
  console.log(cardData);
  return (
    <>
      <Navbar/>
      <Filtter>
        <span>sort by:</span>
        <Fbox>Branch</Fbox>
        <Fbox>Branch</Fbox>
        <Fbox>Branch</Fbox>
        <Fbox>Branch</Fbox>
      </Filtter>
      <Dbox>
      {cardData ? (
        cardData.map((data) => <Download data={data} />)
      ) : (
        <CircularProgress />
      )}
      </Dbox>
    </>
  );
};

export default Download_Page;
