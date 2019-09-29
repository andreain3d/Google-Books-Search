import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { getThemeProps } from "@material-ui/styles";

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
                  name="title"
                  label="Book Title"
                  //   value={title}
                  //   onChange={this.handleChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Button type="submit" color="secondary" variant="contained">
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
