import * as React from "react";

import { Typography, Container, Link } from "@material-ui/core";

import IconBar from "./IconBar";
import getCurrentPath from "../utils/getCurrentPath";

const Footer = () => {
  const path = getCurrentPath();
  return (
    <footer>
      <Container className="footer-container">
        <Link href={path + "#"} underline="none">
          <Typography className="footer-text" variant="body1">
            Back to top
          </Typography>
        </Link>
        <Link
          href="https://github.com/crvlwanek/wedding-template"
          underline="none"
        >
          <Typography className="footer-text" variant="body1">
            View the GitHub Repo
          </Typography>
        </Link>
        <Typography className="footer-text" variant="body1">
          Chris VL-Wanek © {new Date().getFullYear()}
        </Typography>
        <IconBar />
      </Container>
    </footer>
  );
};

export default Footer;
