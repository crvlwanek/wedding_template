import * as React from "react";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="absolute" color="transparent" elevation="none">
      <Toolbar>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Typography variant="h5">Schedule</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Hotel</Typography>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
