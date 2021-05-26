import * as React from "react";
import { Box, Button, Container, Grid, Link } from "@material-ui/core";

import data from "../data.json";

if (typeof window !== "undefined") {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

const LandingSection = () => {
  return data ? (
    <Box className="hero header">
      <Box className="center">
        <Container className="avatar-box">
          <img className="avatar" />
        </Container>
        <Container className="title-box">
          <h1 className="avatar-name-text">
            {data.groom_name} & {data.bride_name}
          </h1>
          <Link
            href={"https://www.google.com/maps/place/" + data.location}
            target="_blank"
            rel="noopener"
            underline="none"
          >
            <h2 className="avatar-detail-text">{data.location}</h2>
          </Link>
          <h2 className="avatar-detail-text">
            {data.date} | {data.time}
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
  ) : null;
};

export default LandingSection;
