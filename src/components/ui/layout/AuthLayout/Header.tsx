import {
  Button,
  Divider,
  Option,
  Select,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";

export const Header = () => {
  return (
    <Sheet>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between", p: 2 }}
      >
        <Typography level="h2">Eazio</Typography>
        <Stack direction="row" alignItems="center">
          <Button variant="plain">Home</Button>
          <Button variant="plain">Careers</Button>
          <Button variant="plain">Pricing</Button>
          <Button variant="plain">Features</Button>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center", columnGap: 1 }}>
          <Select defaultValue="English" variant="plain">
            <Option value="English">English</Option>
            <Option value="German">German</Option>
            <Option value="Urdu">Urdu</Option>
            <Option value="French">French</Option>
          </Select>
          <Divider orientation="vertical" />
          <Button variant="plain">Login</Button>
          <Button size="sm">Get Demo</Button>
        </Stack>
      </Stack>
    </Sheet>
  );
};

export default Header;
