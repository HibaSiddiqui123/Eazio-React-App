import { IconButton, IconButtonProps } from "@mui/joy";

export const RoundIconButton = ({ sx, children, ...rest }: IconButtonProps) => {
  return (
    <IconButton {...rest} sx={{ ...sx, borderRadius: 20 }}>
      {children}
    </IconButton>
  );
};
