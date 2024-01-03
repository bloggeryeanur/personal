// ToggleThemeButton.js
import React from "react";
import { Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ToggleThemeButton = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <Switch
      onClick={toggleTheme}
      color={theme.palette.mode === "dark" ? "secondary" : "primary"}
    />
  );
};

export default ToggleThemeButton;
