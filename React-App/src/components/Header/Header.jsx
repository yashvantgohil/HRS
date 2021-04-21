import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CommentIcon from "@material-ui/icons/Comment";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useDispatch, useSelector } from "react-redux";
import { userLoggout } from "../../store/auth/actions";

const Header = () => {
  const count = useSelector((state) => state.hacker.hackers.length);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    dispatch(userLoggout());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase></InputBase>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={count} color="secondary">
                <NotificationsIcon></NotificationsIcon>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={count} color="secondary">
                <CommentIcon></CommentIcon>
              </Badge>
            </IconButton>
            <IconButton onClick={logout}>
              <PowerSettingsNewIcon
                style={{ color: "white" }}
              ></PowerSettingsNewIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
