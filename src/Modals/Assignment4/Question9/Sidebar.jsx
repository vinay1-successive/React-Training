import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
const Sidebar = ({ open, close }) => {
  return (
    <>
      <div>
        <Drawer anchor="left" open={open} close={close}>
          <List>
            <ListItem component={Link} to="/question1" onClick={close}>
              <ListItemText primary="Question1" />
            </ListItem>
            <ListItem component={Link} to="/question2" onClick={close}>
              <ListItemText primary="Question2" />
            </ListItem>
            <ListItem component={Link} to="/question3" onClick={close}>
              <ListItemText primary="Question3" />
            </ListItem>
            <ListItem component={Link} to="/question4" onClick={close}>
              <ListItemText primary="Question4" />
            </ListItem>
            <ListItem component={Link} to="/question5" onClick={close}>
              <ListItemText primary="Question5" />
            </ListItem>
            <ListItem component={Link} to="/question6" onClick={close}>
              <ListItemText primary="Question6" />
            </ListItem>
            <ListItem component={Link} to="/question7" onClick={close}>
              <ListItemText primary="Question7" />
            </ListItem>
            <ListItem component={Link} to="/question8" onClick={close}>
              <ListItemText primary="Question8" />
            </ListItem>
            <ListItem component={Link} to="/question9" onClick={close}>
              <ListItemText primary="Question9" />
            </ListItem>
            <ListItem component={Link} to="/question10" onClick={close}>
              <ListItemText primary="Question10" />
            </ListItem>
            <ListItem component={Link} to="/question11" onClick={close}>
              <ListItemText primary="Question11" />
            </ListItem>
            <ListItem component={Link} to="/question12" onClick={close}>
              <ListItemText primary="Question12" />
            </ListItem>
            <ListItem component={Link} to="/question13" onClick={close}>
              <ListItemText primary="Question13" />
            </ListItem>
            <ListItem component={Link} to="/question14" onClick={close}>
              <ListItemText primary="Question14" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
};
export default Sidebar;
