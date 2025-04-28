import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import { createBrowserRouter } from "react-router";

export let app_router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ index: true, Component: Home }],
  },
]);
