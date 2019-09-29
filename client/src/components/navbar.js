import React from "react";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function Navbar() {
  return (
    <Appbar position="static">
      <Toolbar>
        <Typography variant="h4">Google Books Search</Typography>
        <Tabs
          value={0}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Search" />
          <Tab label="Saved" />
        </Tabs>
      </Toolbar>
    </Appbar>
  );
}

export default Navbar;
