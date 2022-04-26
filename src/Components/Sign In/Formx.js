import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import { Icon, Input, Typography } from "@mui/material";

import PersonIcon from "@mui/icons-material/PersonOutline";
import { TextField } from "@mui/material";

// const formControl = styled(Card)`
//   color: antiquewhite;
//   background-color: antiquewhite;
//   border: 45px solid red;
// `

// const MyCard = styled('Card')`
//   background-color: red;
//`

const FormComponent = styled("Card")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  border: 3px solid black;
`;

styled("Input")``;
export default function Form() {
  return (
    <Card elevation={3}>
      <FormComponent>
        <Typography variant="h3" align="center">
          Sign Up
        </Typography>
        <Input
          iconStart={<PersonIcon />}
          type={"text"}
          disableUnderline={true}
          placeholder="User Name"
        />
        <Input
          type={"text"}
          disableUnderline={true}
          placeholder="Registration no."
        />
        <Input type={"text"} disableUnderline={true} placeholder="Branch" iconStart={<PersonIcon/>}/>
        <Input type={"text"} disableUnderline={true} placeholder="Email" />
        <Input type={"text"} disableUnderline={true} placeholder="Password" />
        <Input
          type={"text"}
          disableUnderline={true}
          placeholder="Confirm Password"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue="Small"
          variant="filled"
          size="small"
          disableUnderline={true}
          iconStart={<PersonIcon/>}
        />

        <span>
          Already have an account?<a href="http://google.com">Sign In</a>
        </span>
      </FormComponent>
    </Card>
  );
}
