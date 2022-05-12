import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Download from "./Download";
import styled from "styled-components";
import Navbar from "./Navbar";

const Filtter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 60%;
  align-items: center;
  margin: atuo;
`;
const Dbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  align-items: center;
`;
const Bttn = styled.button`
  border-radius: 19px;
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
        <ui>
          <li>Branch</li>
          <li>Year</li>
          <li>Branch</li>
          <li>Branch</li>
        </ui>
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
