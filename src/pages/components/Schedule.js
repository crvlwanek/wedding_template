import * as React from "react";
import { Typography, Paper } from "@material-ui/core";

const Schedule = (props) => {
  return (
    <Paper className="center paper">
      <Typography variant="h2" color="secondary">
        Schedule
      </Typography>
      {props.schedule.map((item) => (
        <h4>
          {item.time} - {item.event}
        </h4>
      ))}
    </Paper>
  );
};

export default Schedule;
