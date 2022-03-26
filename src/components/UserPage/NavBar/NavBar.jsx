import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Avatar,
  Button,
  Container,
  Link,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  SearchIconWrapper,
  SearchWrapper,
  StyledCartCount,
  StyledContainerAvatar,
  StyledIconButton,
  StyledInputBase,
  StyledMenuList,
  StyledRightNavWrapper,
} from "./NavBar.styled";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { StyledListItemText } from "../../AdminPage/SideBar/SideBar.styled";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { NavLink as RouterLink } from "react-router-dom";

const isLogin = false;

export default function NavBar({ user, cartCount, isLogin, isAdmin }) {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", position: "fixed" , zIndex: 1000}}
    >
      <Toolbar>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" component="a" sx={{ textDecoration: "none" }}>
            <Typography variant="u-bold-36" color="primary" letterSpacing={1}>
              Shopy
            </Typography>
          </Link>
          {!isAdmin && (
            <SearchWrapper>
              <SearchIconWrapper>
                <SearchIcon color="text"></SearchIcon>
              </SearchIconWrapper>
              <StyledInputBase
                type="text"
                placeholder="Search ..."
              ></StyledInputBase>
              <Button
                component="button"
                variant="contained"
                size="large"
                sx={{
                  height: "100%",
                  borderTopRightRadius: "40px",
                  borderBottomRightRadius: "40px",
                }}
              >
                <Typography
                  variant="u-regular-14"
                  sx={{ textTransform: "none" }}
                >
                  Search
                </Typography>
              </Button>
            </SearchWrapper>
          )}

          <StyledRightNavWrapper>
            {!isAdmin && (
              <StyledIconButton sx={{ position: "relative" }}>
                <ShoppingCartCheckoutIcon sx={{ fontSize: "inherit" }} />
                {cartCount && (
                  <StyledCartCount>
                    <span>{cartCount}</span>
                  </StyledCartCount>
                )}
              </StyledIconButton>
            )}

            {isLogin ? (
              user && (
                <StyledContainerAvatar>
                  <Avatar
                    alt={user.username}
                    src={user.avatar}
                    sx={{
                      width: 44,
                      height: 44,
                      marginRight: "12px",
                    }}
                  ></Avatar>
                  <StyledMenuList>
                    <ListItemButton>
                      <PermIdentityOutlinedIcon />
                      <ListItem
                        component={RouterLink}
                        to="/profile"
                        sx={{ color: "inherit" }}
                      >
                        <StyledListItemText>Profile</StyledListItemText>
                      </ListItem>
                    </ListItemButton>
                    <ListItemButton>
                      <LogoutOutlinedIcon />
                      <ListItem
                        component={RouterLink}
                        to="/login"
                        sx={{ color: "inherit" }}
                      >
                        <StyledListItemText>Logout</StyledListItemText>
                      </ListItem>
                    </ListItemButton>
                  </StyledMenuList>
                </StyledContainerAvatar>
              )
            ) : (
              <StyledIconButton>
                <PersonOutlineIcon sx={{ fontSize: "inherit" }} />
              </StyledIconButton>
            )}
          </StyledRightNavWrapper>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
