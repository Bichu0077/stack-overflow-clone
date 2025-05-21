import React from "react";

const Avatar = ({
  children,
  backgroundColor = "#dcdcdc",
  px = "10px",
  py = "10px",
  color = "#000",
  borderRadius = "50%",
  fontSize = "1rem",
  cursor = "pointer",
  style = {},
  onClick = () => {},
}) => {
  const defaultStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor,
    padding: `${py} ${px}`,
    color,
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor,
    textDecoration: "none",
    width: "fit-content",
    minWidth: "40px",
    minHeight: "40px",
    userSelect: "none",
    ...style,
  };

  return (
    <div style={defaultStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default Avatar;
