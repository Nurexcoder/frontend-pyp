import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Paper,
  Avatar,
  Button,
  Typography,
  Link,
  Input,
  IconButton,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import styled from "@emotion/styled";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import baseApi from "../../config";
import Swal from "sweetalert2";

const paperStyle = {
  height: "75vh",
  width: "344px",
  // margin: "20px auto",
  position: 'absolute',
  top: '11%',
  left: '39%',
  borderRadius: "30px",
};
const avatarStyle = {
  backgroundColor: "#5987ff",
  width: "78px",
  height: "78px",
};

const StyledButton = styled(Button)`
  margin-top: 65px;
  /* margin-bottom: 5px; */
  border-radius: 25px;
  background-color: #5987ff;
  padding: 12px;
  width: 19rem;
  font-size: 17px;
  height: 40px;
  text-transform: none;
`;

const GridStyle = styled(Grid)`
  display: flex;
  align-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const GridIcon = styled(Grid)`
  display: flex;
  justify-content: center;
  background-color: #5987ff;
  padding: 18px;
  border-radius: 20px 20px 0px 0px;
  height: 6rem;
`;

const InputStyle = styled(Input)`
  font-weight: 400;
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

const AvatarIcon = styled(AccountCircleRoundedIcon)`
  transform: scale(2.9);
`;

function SignInForm(props) {
  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("");
    try {
      const res = await baseApi.post("/auth/login", { ...loginData });
      console.log(res.data);
      localStorage.setItem("authToken", res.data.authToken);
      localStorage.setItem("user", res.data.user);
      props.handleClose();
    } catch (error) {
      Swal.fire("Error", "Incorrect password", "error");
      props.handleClose();
    }
  };
  const handleChange = (e) => {
    // console.log(e.target.name,e.target.value)
    if (e.target.name === "password") {
      handlePasswordChange("password");
    }
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  console.log(loginData);

  //FOR THE PASSWORD
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

  return (
    <form onSubmit={handleSubmit} variant="form">
      <Paper style={paperStyle} elevation={10}>
        <GridIcon>
          <Avatar style={avatarStyle}>
            <AvatarIcon />
          </Avatar>
        </GridIcon>
        <GridStyle>
          <h2>Log in</h2>

          <InputStyle
            placeholder="Email"
            disableUnderline={true}
            name="email"
            sx={{
              fontWeight: "400",
              outline: "none",
              margin: "17px 0",
              padding: "0 20px ",
              borderRadius: "25px",
              border: "2px solid #dddfe2",
            }}
            onChange={handleChange}
            id="outlined-adornment-password"
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
            onChange={handleChange}
            value={loginData.password}
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
          <Typography>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{
                fontSize: "13px",
                position: "relative",
                left: "85px",
                fontWeight: "450",
              }}
            >
              Forgot password ?
            </Link>
          </Typography>

          <StyledButton
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: "266px",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#5987FF",
              },
            }}
          >
            sign in
          </StyledButton>

          <Link
            href="#"
            underline="none"
            color="inherit"
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              color: "#98979799",
              margin: "6px",
            }}
          >
            or connect using
          </Link>
          <Typography
            sx={{
              position: "relative",
              top: "6rem",
              fontWeight: "400",
              fontSize: "15px",
            }}
          >
            Don't have an account?{" "}
            <Link
              href="#"
              underline="none"
              sx={{ fontWeight: "450", color: "#5987FF" }}
            >
              Sign Up
            </Link>
          </Typography>
        </GridStyle>
      </Paper>
    </form>
  );
}

export default SignInForm;
