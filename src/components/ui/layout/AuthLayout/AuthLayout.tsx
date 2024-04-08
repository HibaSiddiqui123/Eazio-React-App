import { Header } from "./Header";
import { Outlet } from "@tanstack/react-router";
import Stack from "@mui/joy/Stack";
import { useMediaQuery } from "@mui/system";
import { useTheme } from "@mui/joy/styles";

export const AuthLayout = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {matches && <Header />}
      <Stack direction={{ sm: "column", md: "row" }} sx={{ height: "100dvh" }}>
        <Outlet />
      </Stack>
    </>
  );
};
