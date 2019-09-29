import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Banner from "../../components/banner";
import Searchbox from "../../components/searchbox";
import Results from "../../components/results";
import API from "../../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => {
        console.log(res.data.items);
        this.setState({ results: res.data.items });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Banner />
          <Searchbox
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleSave={this.handleSave}
          />
          <Results searchData={this.state.results} />
        </Grid>
      </Grid>
    );
  }
}

export default Search;
