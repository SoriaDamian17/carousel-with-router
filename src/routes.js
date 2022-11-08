import { useRoutes } from "react-router-dom";
import Actividad1 from "./pages/actividad1";
import Home from "./pages/Home";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/actividad1",
      element: <Actividad1 />
    }
  ]);
}
