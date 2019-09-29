import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import API from "../utils/API";

const styles = {
  searchedbooks: { margin: 20, padding: 20 },
  buttons: { margin: 10 }
};

class SearchedBooks extends Component {
  state = {
    title: this.props.title,
    author: this.props.author,
    summary: this.props.summary,
    image: this.props.image,
    link: this.props.link
  };

  handleSave = event => {
    event.preventDefault();
    let bookData = {
      title: this.state.title,
      author: this.state.author,
      summary: this.state.summary,
      image: this.state.image,
      link: this.state.link
    };
    this.saveBook(bookData);
  };

  saveBook = bookData => {
    console.log(bookData);
    API.saveBook(bookData);
  };

  render(props) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper className={this.props.classes.searchedbooks}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Typography variant="h6">
                  <strong>{this.props.title}</strong>
                </Typography>
                <Typography variant="h6">{this.props.author}</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container justify="flex-end">
                  <Button
                    className={this.props.classes.buttons}
                    color="secondary"
                    variant="contained"
                    href={this.props.link}
                  >
                    View
                  </Button>
                  <Button
                    className={this.props.classes.buttons}
                    color="secondary"
                    variant="contained"
                    onClick={this.handleSave}
                    key={this.props.key}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12} md={4}>
                <img alt="" src={this.props.image} />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="body1">{this.props.summary}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SearchedBooks);
