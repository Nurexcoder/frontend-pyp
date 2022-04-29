import axios from "axios";
import React, { useEffect, useState } from "react";

const Download_Page = () => {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    axios.get("https://pypbackendserver.herokuapp.com/upload/file").then((response) => {
        console.log(response);
        return response.data;
      })
      .then((res) => {
        console.log(res);
        setCardData(res);
      });
  }, []);
  console.log(cardData);
  return (
    <div>
      {cardData.map(() => {
            return <h1>Hi</h1>;
          })
        }
    </div>
  );
};

export default Download_Page;
