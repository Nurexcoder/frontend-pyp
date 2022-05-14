import React from "react";

import { TextField, Paper} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  // width: "50%",
  // height: "100%"

  // border: '2px solid black'
};




const Branch = [{ label: "CSE" }];
const subjectCode = [{ label: "CS22101" }];
const semester = [{ label: "1" }];
const year = [{ label: "3000" }];


function UploadPage() {
  return (
    <>
        <Paper elevation={10} sx={style}>
      <form >
          <h1>The Art of Sharing</h1>
          <TextField placeholder="Name" />
          <Autocomplete
            placeholder="Subject Code"
            disablePortal
            options={subjectCode}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Autocomplete
            disablePortal
            options={semester}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Autocomplete
            disablePortal
            options={year}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Autocomplete
            disablePortal
            options={Branch}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
      </form>
        </Paper>
    </>
  );
}

export default UploadPage;
