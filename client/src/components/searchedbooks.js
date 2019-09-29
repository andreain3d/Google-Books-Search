import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import API from "../utils/API";

const styles = {
  savedbooks: { margin: 20, padding: 20 }
};

class SearchedBooks extends Component {
  state = {
    title: this.props.title,
    author: this.props.author,
    summary: this.props.summary,
    image: this.props.image
  };

  handleSave = event => {
    event.preventDefault();
    let bookData = {
      title: this.state.title,
      author: this.state.author,
      summary: this.state.summary,
      image: this.state.image
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
          <Paper className={this.props.classes.savedbooks}>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h6">{this.props.title}</Typography>
                <Typography variant="h6">{this.props.author}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.handleSave}
                  key={this.props.key}
                >
                  Save
                </Button>
              </Grid>

              <Grid item xs={4}>
                <img alt="" src={this.props.image} />
              </Grid>
              <Grid item xs={8}>
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
