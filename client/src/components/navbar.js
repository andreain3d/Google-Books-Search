import React, { Component } from "react";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  brand: { marginRight: "20px" }
};

class Navbar extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <Appbar position="static">
        <Toolbar>
          <Typography variant="h4" className={this.props.classes.brand}>
            Google Books Search
          </Typography>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            {/* <Link to="/"> */}
            <Tab label="Search" to="/" component={Link} />
            {/* </Link> */}
            {/* <Link to="/saved"> */}
            <Tab label="Saved" to="/saved" component={Link} />
            {/* </Link> */}
          </Tabs>
        </Toolbar>
      </Appbar>
    );
  }
}

export default withStyles(styles)(Navbar);
