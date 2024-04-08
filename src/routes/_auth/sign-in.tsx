import { createFileRoute } from "@tanstack/react-router";
import { SignIn } from "../../components/ui/views/auth/SignIn";

export const Route = createFileRoute("/_auth/sign-in")({
  component: SignIn,
});
