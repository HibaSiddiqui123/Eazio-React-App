import { createFileRoute } from "@tanstack/react-router";
import Message from "../../components/ui/views/message";

export const Route = createFileRoute("/_dashboard/messages")({
  component: Message,
});
