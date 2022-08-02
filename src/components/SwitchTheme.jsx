import React, { useContext } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";

const SwitchTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <DropdownButton
      variant={`${theme}`}
      title="Theme"
      id="sm-vertical-dropdown-1"
    >
      <Dropdown.Item onClick={() => changeTheme("primary")} eventKey="1">
        light
      </Dropdown.Item>
      <Dropdown.Item onClick={() => changeTheme("dark")} eventKey="2">
        dark
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default SwitchTheme;
