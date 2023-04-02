import React from "react";
import styled from "styled-components";
import "./customlink.css";

const A = styled.a`
  color: #64ffdb;
  position: relative;
  text-decoration: none;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -5px;
    left: 0;
    background-color: #64ffdb;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.4s ease-in-out;
  }
  :hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const CustomLink = ({
  text,
  link,
  color = "white",
  display = "flex",
  underlineColor = "white",
}) => {
  return (
    <p style={{ display: display }}>
      <A
        href={link}
        textColor={color}
        underlineColor={underlineColor}
        className="underline-movement"
      >
        {text}
      </A>
    </p>
  );
};

export default CustomLink;
