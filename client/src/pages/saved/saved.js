import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Banner from "../../components/banner";
import SavedResults from "../../components/savedresults";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res.data);
        if (res.data) {
          this.setState({ results: res.data });
        }
      })
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={8}>
          <Banner />
          <SavedResults data={this.state.results} />
        </Grid>
      </Grid>
    );
  }
}

export default Saved;
