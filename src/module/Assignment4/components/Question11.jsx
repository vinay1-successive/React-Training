import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { styleAll } from "../../../helper/Styles";
const Question11 = (props) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <div style={styleAll.Ques}>{props.value}</div>
        <Button onClick={openDialog}>Open</Button>
        <Modal open={open} close={handleClose}>
          <Box style={styleAll.div1}>
            <Typography variant="h6" component="h2">
              Hello World
            </Typography>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Question11;
