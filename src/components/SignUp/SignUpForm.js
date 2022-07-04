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
} from "@mui/material";
// import { makeStyles } from '@mui/styles';
import InputAdornment from "@mui/material/InputAdornment";
// import InputUnstyled from "@mui/base/InputUnstyled";
import styled from "@emotion/styled";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import baseApi from "../../config";
import Swal from "sweetalert2";

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
  margin: "95px auto",
  borderRadius: "30px",
};

const InputStyle = styled(Input)`
  /* font-weight: bold; */
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

// const textStyle = {
//   width: "16rem",
//   borderRadius: "14px",
//   padding: "0px",
//   margin: "0px",
// };

const branch = [
  {
    key: "cse",
    title: "Department of Computer Science And Engneering",
  },
  {
    key: "agri",
    title: "Department of Agricultural Engineering",
  },
  {
    key: "ece",
    title: "Department of Electronics and Communication Engineering",
  },
  {
    key: "ee",
    title: "Department of Electrical Engineering",
  },
  {
    key: "forest",
    title: "Department of Forestry",
  },
  {
    key: "civil",
    title: "Department of Civil Engineering",
  },
  {
    key: "mechanical",
    title: "Department of Mechanical Engineering",
  },
];

const autoStyle = {
  "& .MuiOutlinedInput-notchedOutline":{
    border: '2px solid #dddfe2',
    borderRadius: '27px',
    width: '15rem',
    marginLeft: '-6px'
  },
  "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
    padding: '4px !important'
  }
}

function SignUpForm(props) {
  // const classes = useStyles()
  const [SignupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    regNo: "",
  });

  // const handleChange = (e) => {
  //   // console.log(e.target.name,e.target.value)
  //   setSignupData({ ...SignupData, [e.target.name]: e.target.value });
  // };
  // console.log(SignupData);

  const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log("Hi");
      const res = await baseApi.post("/auth/createuser", { ...SignupData });
      console.log(res.data);
      localStorage.setItem("authToken", res.data.authToken);
      localStorage.setItem("user", res.data.user);
      props.handleClose();
  }

  const handleChange = (e) => {
    if (e.target.name === "password") {
      handlePasswordChange("password");
    }
    if (e.target.name === "Cpassword") {
      handleConfPasswordChange("password");
    }
    setSignupData({ ...SignupData, [e.target.name]: e.target.value });
  };

  //For SubmitButton: Disable after one click
  const [disable, setDisable] = React.useState(false);

  //for password : Show
  const [password, setPassword] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };

  // for Confirm Password: Show
  const [confpassword, setConfPassword] = React.useState({
    password: "",
    showConfPassword: false,
  });

  const handleClickShowConfPassword = () => {
    setConfPassword({
      ...confpassword,
      showConfPassword: !confpassword.showConfPassword,
    });
  };
  // console.log(setCvalues)

  const handleMouseDownConfPassword = (event) => {
    event.preventDefault();
  };

  const handleConfPasswordChange = (prop) => (event) => {
    setConfPassword({ ...confpassword, [prop]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} variant="form">
      <Paper style={paperStyle} elevation={10}>
        <GridStyle>
          <h2>Sign Up</h2>

          

          <InputStyle
            placeholder="Name"
            disableUnderline={true}
            name="name"
            // id="outlined-adornment-password"
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlinedIcon sx={{ color: "black" }} />
              </InputAdornment>
            }
          />

          <InputStyle
            placeholder="Registration no."
            disableUnderline={true}
            name="regNumber"
            // id="outlined-adornment-password"
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlinedIcon sx={{ color: "black" }} />
              </InputAdornment>
            }
          />
          <Stack spacing={2} width="250px">
            <Autocomplete
            sx={autoStyle}
              disablePortal
              options={branch.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlinedIcon sx={{ color: "black" }} />
                    </InputAdornment>
                  ),
                }}
                  placeholder="Branch"
                  size="small"
                ></TextField>
              )}
            ></Autocomplete>
          </Stack>

          <InputStyle
            placeholder="Email"
            disableUnderline={true}
            name="email"
            onChange={handleChange}
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
            type={password.showPassword ? "text" : "password"}
            // onChange={handlePasswordChange("password")}
            onChange={handleChange}
            value={SignupData.password}
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
                  {password.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <InputStyle
            placeholder="Confirm Password"
            name="Cpassword"
            sx={{ width: "265px", paddingRight: "3px" }}
            type={confpassword.showConfPassword ? "text" : "password"}
            onChange={handleChange}
            value={SignupData.cpassword}
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
                  {confpassword.showConfPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />

          <StyledButton
            type="submit"
            color="primary"
            variant="contained"
            // onClick={handleSubmit ? setDisable(true) : setDisable(false)}
            onClick={handleSubmit}
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
      </Paper>
    </form>
  );
}

export default SignUpForm;
