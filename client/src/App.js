import React, { Component } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Searchbox from "./components/searchbox";
import Results from "./components/results";
import Footer from "./components/footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e1e1e1",
      main: "#660000",
      dark: "#121212",
      contrastText: "#faa42a"
    },
    secondary: {
      main: "#faa42a"
    }
  }
});

class App extends Component {
  state = {};

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Grid container justify="center">
          <Grid item xs={8}>
            <Banner />
            <Searchbox />
            <Results />
          </Grid>
        </Grid>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
