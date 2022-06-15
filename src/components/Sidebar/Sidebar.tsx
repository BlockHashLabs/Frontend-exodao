import "./Sidebar.scss";

import { Drawer } from "@mui/material";
import React from "react";

import NavContent from "./NavContent";
import useTheme from "../../hooks/useTheme";

type SideBarProps = {
  theme: string;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const Sidebar: React.FC<SideBarProps> = ({ theme, mobileOpen, handleDrawerToggle }) => {
  // const [theme, toggleTheme] = useTheme();
  
  return(
  <div className="sidebar" id="sidebarContent">
    {/* <a>derg</a> */}
    {console.log("sidebar", theme)}
    <Drawer variant="permanent" anchor="left">
      <NavContent theme={theme} />
      
    </Drawer>
  </div>
);
};

export default Sidebar;
