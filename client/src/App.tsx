import { Login } from "./auth/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./auth/signup";
import { ForgotPassword } from "./auth/ForgetPassword";
import { ResetPassword } from "./auth/ResetPassword";
import { VerifyEmail } from "./auth/VerifyEmail";
import { Mainlayout } from "./layput/Mainlayout";
import { HeroSection } from "./components/HeroSection";
import { Profile } from "./components/Profile";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
  {
    path: "/verifyemail",
    element: <VerifyEmail />,
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
