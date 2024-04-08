import Sheet from "@mui/joy/Sheet";
import { Header } from "./Header";
import { SideNav } from "./SideNav";
import { Outlet } from "@tanstack/react-router";
import Stack from "@mui/joy/Stack";

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Stack flexGrow={1} direction="row">
        <SideNav />
        <Sheet sx={{ padding: 2, flexGrow: 1, flexShrink: 0 }}>
          <Outlet />
        </Sheet>
      </Stack>
    </>
  );
};
