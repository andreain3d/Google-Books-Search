import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Search from "./pages/search";
import Saved from "./pages/saved";
import { indigo, orange } from "@material-ui/core/colors";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange
  }
});

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Footer />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
