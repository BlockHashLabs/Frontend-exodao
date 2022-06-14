import { SwipeableDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavContent from "./NavContent";

const PREFIX = "NavDrawer";

const classes = {
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
};

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  [`& .${classes.drawer}`]: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  [`& .${classes.drawerPaper}`]: {
    width: drawerWidth,
    borderRight: 0,
  },
}));

const drawerWidth = 280;

type NavDrawerProps = {
  theme: string;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const NavDrawer: React.FC<NavDrawerProps> = ({ theme, mobileOpen, handleDrawerToggle }) => {
  const location = useLocation();

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    if (mobileOpen && handleDrawerToggle) {
      handleDrawerToggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <StyledSwipeableDrawer
      variant="temporary"
      anchor="left"
      open={mobileOpen}
      onOpen={handleDrawerToggle}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      disableBackdropTransition={!isIOS}
      disableDiscovery={isIOS}
    >
      {console.log("drawer", theme)}
      <NavContent theme={theme} />
    </StyledSwipeableDrawer>
  );
};

export default NavDrawer;
