import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  savedbooks: { margin: 20, padding: 20 }
};

class SavedBooks extends Component {
  render(props) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper className={this.props.classes.savedbooks}>
            <Typography variant="h6">{this.props.title}</Typography>
            <Typography variant="h6">{this.props.author}</Typography>
            <Grid container>
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

export default withStyles(styles)(SavedBooks);
