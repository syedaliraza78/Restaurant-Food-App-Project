import { Login } from "./auth/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Mainlayout } from "./MainLayout";
import { Signup } from "./auth/signup";
import { ForgotPassword } from "./auth/ForgetPassword";
import { ResetPassword } from "./auth/ResetPassword";
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
  {
    path: "/forgetpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
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
