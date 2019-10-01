import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
  searchbox: { margin: 20, padding: 20 }
};

function SearchBox(props) {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Paper className={props.classes.searchbox}>
          <Typography variant="h6">Book Search</Typography>
          <form>
            <Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={props.handleInputChange}
                  name="title"
                  label="Book Title"
                  margin="normal"
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={props.handleFormSubmit}
              >
                <SearchIcon />
                Search
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SearchBox);
