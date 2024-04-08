import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../components/ui/views/dashboard";

export const Route = createFileRoute("/_dashboard/")({
  component: Dashboard,
});
