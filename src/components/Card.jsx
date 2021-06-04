import * as React from "react";
import { Button } from "./Button";

const cardStyles = {
  background: "white",
  borderRadius: "5px",
  boxShadow:
    "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  width: "100%",
  height: "100%",
  position: "relative",
};

const imageStyles = {
  width: "auto",
  height: "200px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "5px 5px 0 0",
};

const textBoxStyles = {
  padding: "10px 20px 40px",
};

const headingStyles = {
  margin: "10px 0",
  fontFamily: '"Montserrat", sans-serif',
};

const textStyles = {
  margin: "10px 0",
  fontFamily: '"Roboto", sans-serif',
  color: "#666666",
  lineHeight: "1.7",
  fontSize: "0.9rem",
};

const buttonStyles = {
  position: "absolute",
  bottom: "10px",
  right: "0px",
  borderColor: "transparent",
  boxShadow: "",
};

export const Card = ({
  bodyText,
  buttonText,
  customStyles,
  heading,
  image,
  link,
}) => {
  return (
    <div style={{ ...cardStyles, ...customStyles }}>
      <div style={{ ...imageStyles, backgroundImage: `url(${image})` }} />
      <div style={textBoxStyles}>
        <h1 style={headingStyles}>{heading}</h1>
        <p style={textStyles}>{bodyText}</p>
        <Button
          customStyles={buttonStyles}
          customHover={{ filter: "" }}
          variant="transparent"
          theme="primary"
          href={link}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
