import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  MenuList,
} from "@mui/material";
import React, { useState } from "react";
import {
  StyledListItemText,
  StyledMenuItem,
  StyledSideBar,
} from "./SideBar.styled";
import { SideBarData } from "./SideBarData";
import { NavLink as RouterLink } from "react-router-dom";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

function SideBar() {
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [active, setActive] = useState("Dashboard");

  function handleClick() {
    setIsOpenProduct(!isOpenProduct);
  }

  return (
    <StyledSideBar>
      <MenuList sx={{paddingTop: 0}}>
        {SideBarData.map((item, index) =>
          item.subMenu ? (
            <div key={index}>
              <ListItemButton onClick={handleClick}>
                {item.icon}
                <ListItem>
                  <StyledListItemText primary={item.title}></StyledListItemText>
                </ListItem>
                {isOpenProduct ? (
                  <ExpandLessOutlinedIcon />
                ) : (
                  <ExpandMoreOutlinedIcon />
                )}
              </ListItemButton>
              <Collapse in={isOpenProduct} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subMenu.map((subMenuItem, index) => (
                    <StyledMenuItem
                      key={index}
                      sx={{ pl: 4 }}
                      active={active === subMenuItem.title ? 1 : 0}
                      onClick={() => setActive(subMenuItem.title)}
                    >
                      {subMenuItem.icon}
                      <ListItem
                        component={RouterLink}
                        to={subMenuItem.link}
                        sx={{ color: "inherit" }}
                      >
                        <StyledListItemText>
                          {subMenuItem.title}
                        </StyledListItemText>
                      </ListItem>
                    </StyledMenuItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ) : (
            <StyledMenuItem
              key={index}
              active={active === item.title ? 1 : 0}
              onClick={() => setActive(item.title)}
            >
              {item.icon}
              <ListItem
                component={RouterLink}
                to={item.link}
                sx={{ color: "inherit" }}
              >
                <StyledListItemText>{item.title}</StyledListItemText>
              </ListItem>
            </StyledMenuItem>
          )
        )}
      </MenuList>
    </StyledSideBar>
  );
}

export default SideBar;
