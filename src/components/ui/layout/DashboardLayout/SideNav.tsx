import {
  AccountCircle,
  Dashboard,
  Event,
  Folder,
  Group,
  Message,
  MoreHoriz,
  Receipt,
  Settings,
  Task,
} from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemContent } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { RoundIconButton } from "../../elements/buttons/IconButtons";
import { Link } from "@tanstack/react-router";

const SideMiniMainNav = () => (
  <Stack
    rowGap={1}
    sx={{
      borderRight: 1,
      borderRightColor: "neutral.300",
      flexGrow: 1,
      p: 1,
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Stack rowGap={1}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </Stack>
    <Stack rowGap={1}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </Stack>
  </Stack>
);

const SideSubNav = () => {
  const menuList = [
    {
      icon: <Dashboard />,
      link: "/",
      label: "Dashboard",
    },
    {
      icon: <Task />,
      link: "/task",
      label: "Task",
    },
    {
      icon: <Message />,
      link: "/messages",
      label: "Messages",
    },
    {
      icon: <Receipt />,
      link: "/invoices",
      label: "Invoices",
    },
    {
      icon: <Folder />,
      link: "/files",
      label: "Files",
    },
    {
      icon: <Event />,
      link: "/events",
      label: "Events",
    },
    {
      icon: <Group />,
      link: "/teams",
      label: "Teams",
    },
    {
      icon: <Settings />,
      link: "/setting",
      label: "Settings",
    },
  ];
  return (
    <Stack sx={{ flexGrow: 1 }} rowGap={4}>
      <Stack
        direction="row"
        sx={{
          p: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <RoundIconButton variant="soft">
          <AccountCircle />
        </RoundIconButton>
        <RoundIconButton size="sm" variant="soft">
          <MoreHoriz />
        </RoundIconButton>
      </Stack>
      <Stack rowGap={1} sx={{ px: 4, alignItems: "center" }}>
        <Avatar sx={{ height: 96, width: 96 }} />
        <Typography level="title-sm">Hello Alfred Bryant</Typography>
        <Typography level="body-xs">adrain.ander@yahoo.com</Typography>
      </Stack>
      <List>
        {menuList.map(({ icon, label, link }) => (
          <ListItem key={label}>
            <ListItemButton to={link} component={Link}>
              {icon}
              <ListItemContent>{label}</ListItemContent>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Stack sx={{ rowGap: 1 }}>
      <Button>Dashboard</Button>
      <Button>Tasks</Button>
      <Button>Messages</Button>
      <Button>Invoice</Button>
      <Button>Files</Button>
      <Button>Events</Button>
      <Button>Teams</Button>
      <Button>Messages</Button>
      <Button>Settings</Button>
    </Stack> */}
    </Stack>
  );
};

export const SideNav = () => {
  return (
    <Stack
      direction="row"
      sx={{ borderRight: 1, borderRightColor: "neutral.300" }}
    >
      <SideMiniMainNav />
      <SideSubNav />
    </Stack>
  );
};
