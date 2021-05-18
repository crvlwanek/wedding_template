import * as React from "react";
import { Box, Button, Container, Grid, Link } from "@material-ui/core";

const LandingSection = (props) => {
  return (
    <Box className="hero header">
      <Box className="center">
        <Container className="avatar-box">
          <img className="avatar" />
        </Container>
        <Container className="title-box">
          <h1 className="avatar-name-text">
            {props.groom_name} & {props.bride_name}
          </h1>
          <Link
            href={"https://www.google.com/maps/place/" + props.location}
            target="_blank"
            rel="noopener"
            underline="none"
          >
            <h2 className="avatar-detail-text">{props.location}</h2>
          </Link>
          <h2 className="avatar-detail-text">
            {props.date} | {props.time}
          </h2>
        </Container>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="center"
          spacing={3}
        >
          <Grid item>
            <Button variant="contained">Hotel</Button>
          </Grid>
          <Grid item>
            <Button href="#schedule" variant="contained" color="secondary">
              Schedule
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LandingSection;
