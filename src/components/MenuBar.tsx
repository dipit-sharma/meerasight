"use client";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import MeeraLogo from "./MeeraLogo";
import { list } from "./AppBar";
import Link from "next/link";

export const MenuBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box className="mobile-menu" sx={{ flexGrow: 1 }}>
      <AppBar className="app-bar" position="fixed">
        <Toolbar className="tool-bar">
          <IconButton
            size="large"
            edge="start"
            //color="rgb(108, 35, 104)"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
            style={{ color: "rgb(108, 35, 104)" }}
          >
            <MenuIcon />
          </IconButton>
          <MeeraLogo />
          <div style={{ width: "40px" }}></div>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {list.map((item) => (
            <Link key={item.id} href={item.id}>
              <div>
                <Button variant="text" style={{ color: "rgb(108, 35, 104)" }}>
                  {item.value}
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </Drawer>
    </Box>
  );
};
