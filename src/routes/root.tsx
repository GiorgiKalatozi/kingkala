import About from "@/components/About";
import HomePage from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/about", element: <About /> },
]);
