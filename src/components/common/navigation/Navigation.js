import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Navigation.scss";

const Nav = styled.nav`
  background: rgb(126, 35, 255);
  background: -moz-linear-gradient(
    180deg,
    rgba(126, 35, 255, 1) 35%,
    rgba(106, 0, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(126, 35, 255, 1) 35%,
    rgba(106, 0, 255, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(126, 35, 255, 1) 35%,
    rgba(106, 0, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7e23ff",endColorstr="#6a00ff",GradientType=1);
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  align-items: center;
  height: 5em;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  font-size: 1.5rem;
`;

const links = [
  { path: "/home", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/create", name: "Create" },
];

const Navigation = () => {
  return (
    <Nav>
      <Ul>
        {links.map((link) => (
          <Li key={link.path}>
            <NavLink
              strict
              className="nav-link"
              activeClassName="nav-link-active"
              to={link.path}
            >
              {link.name}
            </NavLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default Navigation;
