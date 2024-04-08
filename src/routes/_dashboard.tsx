import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "../components/ui/layout/DashboardLayout";

export const Route = createFileRoute("/_dashboard")({
  component: DashboardLayout,
});
