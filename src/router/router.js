import { createBrowserRouter } from "react-router-dom";
import InvitationCard from "../components/InvitationCard.jsx/InvitationCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InvitationCard />,
  },
]);

export default router;
