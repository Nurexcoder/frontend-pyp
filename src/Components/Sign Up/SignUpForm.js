import React from "react";
import Grid from "@mui/material/Grid";
import {
  Paper,
  Avatar,
  Button,
  Typography,
  Link,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import styled from "@emotion/styled";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

function SignUpForm() {
  const paperStyle = {
    height: "83vh",
    width: 400,
    margin: "20px auto",
    borderRadius: "30px",
  };
  const avatarStyle = { backgroundColor: "#7689FF" };

  const StyledButton = styled(Button)`
    margin-top: 65px;
    margin-bottom: 5px;
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
    margin-top: 19px;
  `;

  const GridIcon = styled(Grid)`
    display: flex;
    justify-content: center;
    background-color: #5987ff;
    padding: 18px;
    border-radius: 20px 20px 0px 0px;
    height: 6rem;
  `;

  const FormControlmain = styled(FormControl)`
    margin: 10px;
    border-radius: 10px;
  `;

  return (
    <Grid>
      <Paper style={paperStyle} elevation={10}>
        <GridIcon>
          <Avatar style={avatarStyle}>
            <AccountCircleRoundedIcon sx={{ fontSize: 40 }} />
          </Avatar>
        </GridIcon>

        <GridStyle>
          <h2>Log in</h2>

          <FormControlmain variant="outlined" required>
            <OutlinedInput
              placeholder="Email"
              sx={{ fontWeight: "bold" }}
              id="outlined-adornment-password"
              startAdornment={
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControlmain>

          <FormControlmain variant="outlined" required>
            <OutlinedInput
              sx={{ fontWeight: "bold" }}
              placeholder="password"
              startAdornment={
                <InputAdornment position="start">
                  <HttpsOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControlmain>
          <Typography>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{
                fontSize: "13px",
                position: "relative",
                left: "85px",
              }}
            >
              Forgot password ?
            </Link>
          </Typography>

          <StyledButton
            type="submit"
            color="primary"
            variant="contained"
            sx={{
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
              fontWeight: "bold",
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              color: "#98979799",
            }}
          >
            or connect using
          </Link>
          <Typography sx={{ position: "relative", top: "8rem" }}>
            Don't have an account?{" "}
            <Link
              href="#"
              underline="none"
              sx={{ fontWeight: "bold", color: "#5987FF" }}
            >
              Sign Up
            </Link>
          </Typography>
        </GridStyle>
      </Paper>
    </Grid>
  );
}

export default SignUpForm;
