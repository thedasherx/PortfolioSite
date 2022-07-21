import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavItem = styled(Link)`
  text-decoration: none;
  color: #f8f0e3;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #663399;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #463750;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">About</NavItem>
      <NavItem to="/404">Contact Me</NavItem>
      <NavItem to="/">Projects</NavItem>
      <NavItem to="/404">Work Experience</NavItem>
    </>
  );
};

export default NavbarLinks;
