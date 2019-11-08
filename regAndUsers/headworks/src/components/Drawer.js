import React from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";

export const HeaderDrawer = props => {
  return (
    <Drawer open={true}>
      <MenuItem>Customers List</MenuItem>
      <MenuItem>Registration</MenuItem>
      <MenuItem>About us</MenuItem>
    </Drawer>
  );
};
