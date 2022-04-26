import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from 'styled-components'


const Component=styled.div`
    color: aqua;
    width: 60%;
    height: 80vh;
    background-color: #FFFFFF;

`
const SubmitButton=styled(Button)`
  padding: 5px;

`

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <Button onClick={handleOpen} padding={0} margin={5} height={2}> */}
      {/* <Box>
      <Button onClick={handleOpen} sx={{
      }}>
        sign up
      </Button>
      </Box> */}
      
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
      <Component >
       
        {/* <SubmitButton>Submit</SubmitButton> */}
      </Component>
      {/* </Modal> */}
    </>
  );
}
