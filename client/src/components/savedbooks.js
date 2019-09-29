import React, { Component } from "react";
import { Paper, Button, Typography, Grid } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import API from "../utils/API";

const styles = {
  savedbooks: { margin: 20, padding: 20 },
  buttons: { margin: 10 }
};

class SavedBooks extends Component {
  state = {
    id: this.props.id
  };

  handleDelete = event => {
    event.preventDefault();
    this.deleteBook(this.state.id);
  };

  deleteBook = id => {
    console.log(id);
    API.deleteBook(id);
  };

  render(props) {
    console.log(this.props.id);
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper className={this.props.classes.savedbooks}>
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
                    onClick={this.handleDelete}
                    id={this.props.id}
                  >
                    <Delete />
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <img alt="" src={this.props.image} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="body1">{this.props.summary}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SavedBooks);
