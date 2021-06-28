import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1 }}></div>
        <Typography variant="h6">App Name</Typography>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit">Button</Button>
      </Toolbar>
    </AppBar>
  );
}
