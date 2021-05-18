import { Grid } from "@material-ui/core";
import * as React from "react";

const Photos = () => {
  return (
    <Grid
      item
      container
      xs={12}
      md={6}
      alignItems="center"
      justify="center"
      className="photo-box"
    >
      <Grid item className="box">
        <img className="photo photo1" />
      </Grid>
      <Grid item className="box">
        <img className="photo photo2" />
      </Grid>
      <Grid item className="box">
        <img className="photo photo3" />
      </Grid>
    </Grid>
  );
};

export default Photos;
