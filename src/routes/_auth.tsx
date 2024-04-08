import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "../components/ui/layout/AuthLayout";

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
});
