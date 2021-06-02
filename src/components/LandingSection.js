import * as React from "react";
import { Box, Container, Grid, Link } from "@material-ui/core";

import { Button } from "./Button";

import data from "../data.json";

const LandingSection = () => {
  return (
    <Box className="hero header">
      <Box className="center">
        <Container className="avatar-box">
          <img className="avatar" />
        </Container>
        <Container className="title-box">
          <h1 className="avatar-name-text">
            {data.groom_name} & {data.bride_name}
          </h1>
          <h2 className="avatar-date-text">{data.date}</h2>
          <Link
            href={data.location_link}
            target="_blank"
            rel="noopener"
            underline="none"
          >
            <h2 className="avatar-detail-text">{data.location}</h2>
          </Link>
          <Link
            href={"https://www.google.com/maps/place/" + data.address}
            target="_blank"
            rel="noopener"
            underline="none"
          >
            <h2 className="avatar-detail-text">{data.address}</h2>
          </Link>
        </Container>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="center"
          spacing={3}
        >
          <Grid item>
            <Button href="#travel">Travel Info</Button>
          </Grid>
          <Grid item>
            <Button href="#schedule" textColor="white" color="var(--theme5)">
              Schedule
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LandingSection;
