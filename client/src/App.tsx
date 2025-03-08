import React from "react";
import { Login } from "./auth/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Mainlayout } from "./MainLayout";
import { Signup } from "./auth/signup";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        // element: <Login />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
