"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const list = [
  {
    id: "/",
    value: "Home",
  },
  {
    id: "/about",
    value: "About Us",
  },
  {
    id: "/services",
    value: "Services",
  },
  {
    id: "/blog",
    value: "Blog",
  },
  {
    id: "/events",
    value: "Events",
  },
  {
    id: "/contact",
    value: "Contact US",
  },
];

function AppBar() {
  const pathname = usePathname();
  const value = list.findIndex((l) => l.id === pathname);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs indicatorColor="secondary" value={value}>
          {list.map((data) => (
            <Link key={data.id} href={data.id}>
              <Tab label={data.value} />
            </Link>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

export default AppBar;
