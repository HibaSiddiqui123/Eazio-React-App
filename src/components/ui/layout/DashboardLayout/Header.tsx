import { MoreHoriz } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Input,
  Sheet,
  Stack,
  Typography
} from "@mui/joy";
import { RoundIconButton } from "../../elements/buttons/IconButtons";

export const Header = () => {
  return (
    <Sheet sx={{ borderBottom: 1, borderBottomColor: "neutral.300" }}>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          columnGap: 6,
        }}
      >
        <Stack direction="row" alignItems="center" columnGap={1}>
          <Typography level="h2">Eazio</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Button variant="plain">Dashboard</Button>
          <Button variant="plain">About Us</Button>
          <Button variant="plain">News</Button>
          <Button variant="plain">User Policy</Button>
          <Button variant="plain">Contacts</Button>
          <RoundIconButton variant="plain">
            <MoreHoriz />
          </RoundIconButton>
        </Stack>
        <Stack flexGrow={1}>
          <Input fullWidth placeholder="Search" />
        </Stack>
        <Stack direction="row" alignItems="center">
          <Button variant="plain" sx={{ columnGap: 1 }}>
            <Avatar sx={{ height: 24, width: 24 }} />
            Clayton Santos
          </Button>
        </Stack>
      </Stack>
    </Sheet>
  );
};
