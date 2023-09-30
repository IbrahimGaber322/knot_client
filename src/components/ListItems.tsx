import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "../actions/user";
import { useDispatch } from "react-redux";
export const MainListItems = ({
  activeOption,
  setActiveOption,
}: {
  activeOption: string;
  setActiveOption: Function;
}) => {
  return (
    <React.Fragment>
      <ListItemButton
        sx={{
          bgcolor: activeOption === "Linksections" ? "grey" : "white",
          ":hover": { bgcolor: "cyan" },
        }}
        onClick={() => setActiveOption("Linksections")}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Link Sections" />
      </ListItemButton>
      <ListItemButton
        sx={{
          bgcolor: activeOption === "Products" ? "grey" : "white",
          ":hover": { bgcolor: "cyan" },
        }}
        onClick={() => setActiveOption("Products")}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOut());
  };
  return (
    <React.Fragment>
      <ListItemButton sx={{":hover": { bgcolor: "cyan" }}} onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );
};
