import { Box, Button, Grid, Input, Link, Stack, Typography } from "@mui/joy";
import { SxProps } from "@mui/system";
import { Link as RouterLink } from "@tanstack/react-router";
import {
  AppleIconButton,
  FacebookIconButton,
  GoogleIconButton,
} from "../../elements/buttons/IconButtons";
import Hero from "../../widgets/Hero";

const inputSX: SxProps = {
  "--Input-minHeight": "56px",
};

const SignUpHeroContent = () => (
  <Box>
    <Typography>If you already have an account</Typography>
    <Typography>
      You can{" "}
      <Link to="/sign-in" component={RouterLink}>
        {" "}
        Login here !{" "}
      </Link>
    </Typography>
  </Box>
);

export const SignUp = () => {
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid
        xs={12}
        md={6}
        sx={{
          p: { xs: 2, sm: 4, md: 8, lg: 16, xl: 32 },
          alignItems: "end",
          justifyContent: "end",
        }}
      >
        <Hero title="Sign up to" subtitle="Lorem ipsem is simply">
          <SignUpHeroContent />
        </Hero>
      </Grid>
      <Grid xs={12} md={6}>
        <Stack
          sx={{
            height: "100%",
            justifyContent: "center",
            flexGrow: 1,
            flexShrink: 0,
            rowGap: 6,
            px: { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 },
          }}
        >
          <Typography level="h2">Sign Up</Typography>
          <form>
            <Stack sx={{ rowGap: 4 }}>
              <Input
                size="lg"
                placeholder="Enter email"
                variant="soft"
                color="warning"
                sx={inputSX}
              />
              <Input
                size="lg"
                placeholder="Create User name"
                variant="soft"
                color="warning"
                sx={inputSX}
              />
              <Input
                size="lg"
                placeholder="Contact number"
                variant="soft"
                color="warning"
                sx={inputSX}
              />
              <Input
                size="lg"
                placeholder="Password"
                variant="soft"
                color="warning"
                sx={inputSX}
              />
              <Input
                size="lg"
                placeholder="Confirm Password"
                variant="soft"
                color="warning"
                sx={inputSX}
              />
              <Button
                size="lg"
                type="submit"
                color="primary"
                sx={{
                  bgcolor: "warning.400",
                  "--Button-minHeight": "56px",
                }}
              >
                Register
              </Button>
            </Stack>
          </form>
          <Typography textAlign={"center"}>or continue with</Typography>
          <Stack direction="row" justifyContent="center" gap={2}>
            <FacebookIconButton />
            <AppleIconButton />
            <GoogleIconButton />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
