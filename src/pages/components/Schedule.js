import * as React from "react";
import { Typography, Paper } from "@material-ui/core";

const Schedule = (props) => {
  return (
    <Paper className="paper">
      <Typography variant="h2" color="secondary">
        Schedule
      </Typography>
      {props.schedule
        ? props.schedule.map((item) => (
            <h4 className="schedule-body-text">
              {item.time} - {item.event}
            </h4>
          ))
        : null}
    </Paper>
  );
};

export default Schedule;
