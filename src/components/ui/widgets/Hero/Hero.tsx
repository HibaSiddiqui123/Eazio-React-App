import { Stack, StackProps } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

type HeroProps = Omit<StackProps, "direction"> & {
  title?: string;
  subtitle?: string;
  description?: string;
};

export const Hero = ({
  title,
  subtitle,
  description,
  sx,
  children,
}: HeroProps) => {
  return (
    <Stack sx={{ ...sx, rowGap: 2 }}>
      {title && <Typography level="h2">{title}</Typography>}
      {subtitle && <Typography level="h3">{subtitle}</Typography>}
      {description && <Typography>{description}</Typography>}
      <Box>{children}</Box>
    </Stack>
  );
};
