import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Paper,
  IconButton,
  Button,
  Typography,
  Link,
  Input,
  TextField,
  Autocomplete,
  Stack,
  FormControl,
} from "@mui/material";
// import { makeStyles } from '@mui/styles';
import InputAdornment from "@mui/material/InputAdornment";
import styled from "@emotion/styled";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import baseApi from "../../config";

// const useStyles = makeStyles({
//   textfield: {
//     fontWeight: "bold",
//     outline: "none",
//     padding: "0 20px",
//     border: "2px solid #dddfe2",
//     borderRadius: "25px",
//     margin: "10px"
//   }
// })

const paperStyle = {
  paddingTop: "25px",
  height: "75vh",
  width: "356px",
  margin: "20px auto",
  borderRadius: "30px",
};

const InputStyle = styled(Input)`
  font-weight: bold;
  outline: none;
  padding: 0 20px;
  border: 2px solid #dddfe2;
  border-radius: 25px;
  margin: 10px;

  &:hover {
    border: 2px solid #5987ff;
    ::placeholder {
      color: #5987ff;
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 54px;
  margin-bottom: 5px;
  border-radius: 25px;
  background-color: #5987ff;
  padding: 12px;
  width: 16rem;
  font-size: 17px;
  height: 40px;
  text-transform: none;
`;

const GridStyle = styled(Grid)`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const TextFieldStyle = styled(TextField)`

`;

const branch = [
  {
    key: "cse",
    title: "CSE",
  },
  {
    key: "agri",
    title: "AGRI",
  },
  {
    key: "ece",
    title: "ECE",
  },
  {
    key: "ee",
    title: "EE",
  },
  {
    key: "forest",
    title: "FORESTRY",
  },
  {
    key: "civil",
    title: "CIVIL",
  },
];

function SignUpForm() {
  // const classes = useStyles()
  const [SignupData, setSignupData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hi");
    await baseApi.post("/createuser", { ...SignupData });
  };

  const handleInput = (e) => {
    // console.log(e.target.name,e.target.value)
    setSignupData({ ...SignupData, [e.target.name]: e.target.value });
  };
  console.log(SignupData);

  //For SubmitButton: Disable after one click
  const [disable, setDisable] = React.useState(false);

  //for password : Show
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // for Confirm Password: Show
  const [cvalues, setCvalues] = React.useState({
    password: "",
    showConfPassword: false,
  });

  const handleClickShowConfPassword = () => {
    setCvalues({ ...cvalues, showConfPassword: !cvalues.showConfPassword });
  };
  // console.log(setCvalues)

  const handleMouseDownConfPassword = (event) => {
    event.preventDefault();
  };

  const handleConfPasswordChange = (prop) => (event) => {
    setCvalues({ ...cvalues, [prop]: event.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("");
  //   try {
  //     const res = await baseApi.post("/auth/signup", { ...loginData });
  //     console.log(res.data);
  //     localStorage.setItem("authToken", res.data.authToken);
  //     localStorage.setItem("user", res.data.user);
  //     props.handleClose();
  //   } catch (error) {
  //     Swal.fire("Error", "Incorrect password", "error");
  //     props.handleClose();
  //   }
  // };

  return (
      <Paper style={paperStyle} elevation={10}>
    <form variant="form">
        <GridStyle>
          <h2>Sign Up</h2>

          <InputStyle
            placeholder="User name"
            disableUnderline={true}
            name="username"
            id="outlined-adornment-password"
            onChange={handleInput}
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlinedIcon sx={{ color: "black" }} />
              </InputAdornment>
            }
          />

          <InputStyle
            placeholder="Registration no."
            disableUnderline={true}
            name="registration_no"
            id="outlined-adornment-password"
            onChange={handleInput}
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlinedIcon sx={{ color: "black" }} />
              </InputAdornment>
            }
          />

          {/* <InputStyle
            placeholder="Branch"
            disableUnderline={true}
            name="branch"
            id="outlined-adornment-password"
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlinedIcon sx={{ color: "black" }} />
              </InputAdornment>
            }
          /> */}

          {/* <Stack spacing={2} sx={{ width: 300, padding: "0" }}> */}
          <Autocomplete
            freeSolo
            sx={{
              padding: "0",
            }}
            options={branch.map((option) => option.title)}
            renderInput={(params) => (
              <TextFieldStyle className="textField-root"{...params} placeholder="Branch"    startadornment={
                <InputAdornment position="start">
                  <PersonOutlinedIcon sx={{ color: "black" }} />
                </InputAdornment>
              } />
            )}
          ></Autocomplete>
          {/* </Stack> */}

          <InputStyle
            placeholder="Email"
            disableUnderline={true}
            name="email"
            // value={user.email}
            //onChange={handleInput}
            onChange={handleInput}
            startAdornment={
              <InputAdornment position="start">
                <EmailOutlinedIcon sx={{ color: "black" }} />
              </InputAdornment>
            }
          />

          <InputStyle
            placeholder="Password"
            name="password"
            sx={{ width: "265px", paddingRight: "3px" }}
            type={values.showPassword ? "text" : "password"}
            onChange={handlePasswordChange("password")}
            value={values.password}
            // onChange={handleInput}
            disableUnderline={true}
            startAdornment={
              <InputAdornment position="start">
                <HttpsOutlinedIcon sx={{ color: "black" }} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <InputStyle
            placeholder="Confirm Password"
            name="Cpassword"
            sx={{ width: "265px", paddingRight: "3px" }}
            type={cvalues.showConfPassword ? "text" : "password"}
            onChange={handleConfPasswordChange("Cpassword")}
            value={cvalues.password}
            disableUnderline={true}
            startAdornment={
              <InputAdornment position="start">
                <HttpsOutlinedIcon sx={{ color: "black" }} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfPassword}
                  onMouseDown={handleMouseDownConfPassword}
                  edge="end"
                >
                  {cvalues.showConfPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />

          <StyledButton
            // disabled={disable}
            // onClick={() => setDisable(true)}
            type="submit"
            color="primary"
            variant="contained"
            // onClick={handleSubmit}
            onSubmit={handleSubmit}
            sx={{
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#5987FF",
              },
            }}
          >
            Create Account
          </StyledButton>
          <Typography sx={{ position: "relative", top: "0.8rem" }}>
            Already have an account?{" "}
            <Link
              disabled={disable}
              onClick={() => setDisable(true)}
              href="#"
              underline="none"
              sx={{ fontWeight: "bold", color: "#5987FF" }}
            >
              Sign In
            </Link>
          </Typography>
        </GridStyle>
    </form>
      </Paper>
  );
}

export default SignUpForm;
