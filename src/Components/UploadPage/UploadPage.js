import React from "react";

import { TextField, Paper, Button, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/system";

const Style = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 38px;
`;

const PaperStyle = styled(Paper)`
  width: 76rem;
  height: 42rem;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    font-size: 6.1vh;
    margin-top: 32px;
  }
`;

const Branch = [{ label: "CSE" }];
const subjectCode = [{ label: "CS22101" }];
const semester = [{ label: "1" }];
const year = [{ label: "3000" }];

function UploadPage() {
  return (
    <Style>
      <PaperStyle elevation={10}>
        <form>
          <h1>The Art of Sharing</h1>
          <TextField placeholder="Name" />
          <Autocomplete
            options={subjectCode}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField placeholder="Subject Code" {...params} />}
          />
          <Autocomplete
            options={semester}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField placeholder="Semester" {...params} />}
          />
          <Autocomplete
            options={year}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField placeholder="Year" {...params} />}
          />
          <Autocomplete
            disablePortal
            options={Branch}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField placeholder="Branch" {...params} />}
          />

          <Button variant="contained">Done</Button>
        </form>
      </PaperStyle>
    </Style>
  );
}

export default UploadPage;
