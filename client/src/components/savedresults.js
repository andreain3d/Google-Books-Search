import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import SavedBooks from "../components/savedbooks";

const styles = {
  results: { margin: 20, padding: 20 }
};

class SavedResults extends Component {
  render(props) {
    console.log(this.props.data);
    return (
      <Grid>
        <Grid item xs={12}>
          <Paper className={this.props.classes.results}>
            <Typography variant="h6">Your Saved Books</Typography>
            {this.props.data.map(book => (
              <SavedBooks
                title={book.title}
                author={book.author}
                image={book.image}
                summary={book.summary}
                key={book._id}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SavedResults);
