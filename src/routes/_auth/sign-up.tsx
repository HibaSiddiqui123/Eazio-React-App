import { createFileRoute } from "@tanstack/react-router";
import { SignUp } from "../../components/ui/views/auth/SignUp";

export const Route = createFileRoute("/_auth/sign-up")({
  component: SignUp,
});
