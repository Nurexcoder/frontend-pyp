import React from "react";

import { TextField, Paper, Button, Box, Input, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/system";
import { shadows } from "@mui/system";

const Style = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 38px;
`;

const PaperStyle = styled(Paper)`
  width: 34rem;
  height: 38rem;
  border-radius: 19px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    /* font-size: 6.1vh; */
    margin-top: 62px;
    margin-bottom: 32px;
  }
`;

const StyleName = {

  height: '42px',
  // border: '2px solid black',
  borderRadius: '5px',
  width: '22.6rem',
  paddingLeft: "15px",
  paddingTop: '8px',

  boxShadow: '0.5px 2px 9px #524f504d',
  // boxShadow: '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)',

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: '800',
  },
};

const BoxStyle = styled(Box)`
  display: flex;
`;

// Styling With Classes
const AutoStyle = {
  "& .MuiAutocomplete-inputRoot": {
    // border: "2px solid black",
    width: "24rem",
    height: '52px',
    borderRadius: "6px",
    paddingLeft: "15px",
    marginTop: "24px",
    marginBottom: "12px",

    boxShadow: '0.5px 2px 9px #524f504d',
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: 'bold',
  },

};

const AutoFirstText = {

  "& .MuiAutocomplete-inputRoot": {
    // border: "2px solid black",
    width: "11.7rem",
    height: '52px',
    borderRadius: "5px",
    paddingLeft: "15px",

    boxShadow: '0.5px 2px 9px #524f504d',
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: 'bold',
  }
};

const AutoSecondText = {
  "& .MuiAutocomplete-inputRoot": {
    // border: "2px solid black",
    width: "11.5rem",
    height: '52px',
    borderRadius: "5px",
    paddingLeft: "15px",
    marginLeft: "10px",

    boxShadow: '0.5px 2px 9px #524f504d',
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: 'bold',
  }
};

const ButtonStyle = {
  marginTop: '3rem',
  marginLeft: '19rem',
  minWidth: '86px',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '17px',
  lineHeight: '1.5',
  backgroundColor: '#2b92f8',

  "& 	.MuiButton-text": {
    backgroundColor: "black",
    border: "2px solid red",
  },
};

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
          <TextField
            id="standard-basic"
            variant="standard"
            sx={StyleName}
            placeholder="Name"
            InputProps={{disableUnderline: true}}
            elevation={5}
          />
          <Box>
            <Autocomplete
              options={subjectCode}
              // sx={{ width: 300 }}
              sx={AutoStyle}
              renderInput={(params) => (
                <TextField
                  placeholder="Subject Code"
                  variant="standard"
                  {...params}
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                />
              )}
            />
          </Box>

          <BoxStyle>
            <Autocomplete
              options={semester}
              // sx={{ width: 300 }}
              sx={AutoFirstText}
              renderInput={(params) => (
                <TextField
                  placeholder="Semester"
                  variant="standard"
                  {...params}
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                />
              )}
            />
            <Autocomplete
              options={year}
              // sx={{ width: 300 }}
              sx={AutoSecondText}
              renderInput={(params) => (
                <TextField
                  placeholder="Year"
                  variant="standard"
                  {...params}
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                />
              )}
            />
          </BoxStyle>

          
            <Autocomplete
              disablePortal
              options={Branch}
              // sx={{ width: 300 }}
              sx={AutoStyle}
              renderInput={(params) => (
                <TextField
                  placeholder="Branch"
                  variant="standard"
                  {...params}
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                />
              )}
            />
          

          {/* <Grid> */}
            <Button variant="contained" sx={ButtonStyle}>
              Done
            </Button>
          {/* </Grid> */}
        </form>
      </PaperStyle>
    </Style>
  );
}

export default UploadPage;
