import * as React from "react";

const themeColors = {
  primary: "#126e82",
  secondary: "#c72819",
  light: "#e0e0e0",
  dark: "#1b1717",
};

const buttonStyles = {
  borderStyle: "solid",
  borderRadius: "7px",
  cursor: "pointer",
  fontFamily: "var(--button__font)",
  fontSize: "1rem",
  boxShadow:
    "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  padding: "7px 16px",
  transition: "ease-in-out 0.2",
};

const hoverStyles = {
  filter: "brightness(95%) drop-shadow(0.5px 0.5px 4px black)",
};

const activeStyles = {
  filter: "brightness(65%) drop-shadow(2px 2px 7px black)",
};

const LinkWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export const Button = ({
  children,
  className,
  color = null,
  customActive,
  customHover,
  customStyles,
  disabled,
  href,
  onClick,
  textColor = null,
  theme = "light",
  variant = "solid",
}) => {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const buttonColor = color || themeColors[theme];
  var fontColor = textColor || "black";
  if (textColor === "match" || variant === "transparent") {
    fontColor = buttonColor;
  }
  const getStyles = (buttonColor, variant) => {
    console.log(variant, buttonColor, fontColor);
    if (variant === "solid") {
      return {
        background: buttonColor,
        color: fontColor,
        borderColor: "transparent",
      };
    }
    return {
      background: "transparent",
      color: fontColor,
      borderColor: variant === "transparent" ? "transparent" : buttonColor,
    };
  };
  const styles = {
    ...getStyles(buttonColor, variant),
    ...buttonStyles,
  };
  return (
    <LinkWrapper
      condition={href}
      wrapper={(children) => <a href={href}>{children}</a>}
    >
      <button
        className={`${className || ""}`}
        onClick={onClick}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onMouseDown={() => {
          setActive(true);
        }}
        onMouseUp={() => {
          setActive(false);
        }}
        style={{
          ...styles,
          ...customStyles,
          ...(hover ? { ...hoverStyles, ...customHover } : null),
          ...(active ? { ...activeStyles, ...customActive } : null),
        }}
      >
        {children}
      </button>
    </LinkWrapper>
  );
};
