import { Link, Box, Button, Grid, Input, Stack, Typography } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import {
  AppleIconButton,
  FacebookIconButton,
  GoogleIconButton,
} from "../../elements/buttons/IconButtons";
import Hero from "../../widgets/Hero";
import { Link as RouterLink } from "@tanstack/react-router";

const inputSX: SxProps = {
  "--Input-minHeight": "56px",
};

const SignInHeroContent = () => (
  <>
    <Typography>If you dont have an account</Typography>
    <Typography>
      You can{" "}
      <Link to="/sign-up" component={RouterLink}>
        Register here !
      </Link>
    </Typography>
  </>
);

export const SignIn = () => {
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
        <Hero
          title="Sign In"
          subtitle="Lorem Ipsum is simply"
          sx={{
            height: "100%",
            justifyContent: "center",
            flexGrow: { xs: 0, sm: 0, md: 0 },
            flexShrink: 0,
          }}
        >
          <SignInHeroContent />
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
          <Typography level="h2">Sign In</Typography>
          <form>
            <Stack sx={{ rowGap: 4 }}>
              <Input
                size="lg"
                sx={inputSX}
                placeholder="Enter email or username"
                variant="soft"
              />
              <Stack rowGap={1}>
                <Input
                  sx={inputSX}
                  size="lg"
                  placeholder="Password"
                  variant="soft"
                />
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <a href="/forget-password">Forgot Password ?</a>
                </Box>
              </Stack>
              <Button
                size="lg"
                type="submit"
                color="primary"
                sx={{ bgcolor: "warning.400", "--Button-minHeight": "56px" }}
              >
                Login
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
