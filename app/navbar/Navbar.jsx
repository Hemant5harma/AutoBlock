"use client";

import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";
import Link from "next/link";
import classes from "./NavbarNested.module.css";
import UserButton from "./userButton/UserButton";
import Logo from "./Logo";
import LinksGroup from "./linkGroup/LinksGroup";

const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Manage Rooms",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Room 1", link: "/admin" },
      { label: "Room 2", link: "/user" },
      { label: "Romm 3", link: "/" },
      { label: "Room 4", link: "/" },
      { label: "Room 5", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Manage Appliances", icon: IconPresentationAnalytics },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

export default function Navbar() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.header}>
          <Group justify="space-between">
            <Link href={"/"}>
            <Logo style={{ width: rem(120) }} />
            </Link>
            
            <Code fw={700}>v3.1.2</Code>
          </Group>
        </div>

        <ScrollArea className={classes.links}>
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>

        <div className={classes.footer}>
          <UserButton />
        </div>
      </nav>
    </div>
  );
}
