import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import React from "react";

const ListDoc = () => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "red" }}>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{/* <WorkIcon /> */}</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{/* <BeachAccessIcon /> */}</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    
    </>
  );
};

export default ListDoc;
