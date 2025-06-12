import { Login } from "./auth/login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Signup } from "./auth/signup";
import { ForgotPassword } from "./auth/ForgetPassword";
import { ResetPassword } from "./auth/ResetPassword";
import { VerifyEmail } from "./auth/VerifyEmail";
import { Mainlayout } from "./layput/Mainlayout";
import { HeroSection } from "./components/HeroSection";
import { Profile } from "./components/Profile";
import { SearchPage } from "./components/SearchPage";
import { RestaurantDeails } from "./components/ResturantDeails";
import { Cart } from "./components/Cart";
import { Resturnat } from "./admin/Restaurant";
import { AddMenu } from "./admin/AddMenu";
import { AdminOrder } from "./admin/Order";
import { Success } from "./components/Success";
import { useUserStore } from "./store/useUserStore";
import { useEffect } from "react";
import Loading from "./components/ui/Loading";
import { useThemeStore } from "./store/useThemeStore";

// we can add the protected routes
// user cannot access the admin, login user cannot back to signup and login, new user cannot access the other roues as well4

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verifyemail" replace />;
  }
  return children;
};

const AuthenticatedUser = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!user?.admin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Mainlayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search/:text",
        element: <SearchPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDeails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/status",
        element: <Success />,
      },
      // here admin service routes will be added
      {
        path: "admin/resturant",
        element: (
          <AdminRoute>
            <Resturnat />
          </AdminRoute>
        ),
      },
      {
        path: "admin/menu",
        element: (
          <AdminRoute>
            <AddMenu />
          </AdminRoute>
        ),
      },
      {
        path: "admin/orders",
        element: (
          <AdminRoute>
            <AdminOrder />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthenticatedUser>
        <Login />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthenticatedUser>
        <Signup />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/forgetpassword",
    element: (
      <AuthenticatedUser>
        <ForgotPassword />
      </AuthenticatedUser>
    ),
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
  const initializeTheme = useThemeStore((state: any) => state.initializeTheme);

  const { checkAuthentication, isCheckingAuth } = useUserStore();
  // checking auth every time when page is loaded
  useEffect(() => {
    checkAuthentication();
    initializeTheme();
  }, [checkAuthentication]);

  if (isCheckingAuth) return <Loading />;
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
    //  <main>
    //   <RouterProvider router={appRouter}></RouterProvider>
    // </main>
  );
}

export default App;
