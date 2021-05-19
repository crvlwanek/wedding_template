import * as React from "react";
import { Grid } from "@material-ui/core";

import Photos from "./Photos";
import Schedule from "./Schedule";

const ScheduleSection = (props) => {
  return props ? (
    <section id="schedule">
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
        className="schedule-row"
      >
        <Grid item xs={12} md={6}>
          <Schedule schedule={props.schedule} />
        </Grid>

        <Photos />
      </Grid>
    </section>
  ) : null;
};

export default ScheduleSection;
