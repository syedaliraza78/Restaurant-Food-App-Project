import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator"; // Ensure correct import
import { LoginInputState, LoginzodSchema } from "@/schema/UserSchema";
import { useUserStore } from "@/store/useUserStore";

// here we can use typescript that means alreday define
// the types of the used of the variables two method one
// is type other interface
// type LoginInputState = {
//   email: string;
//   password: string;
// };

export const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Manage loading dynamically
  const [error, setError] = useState<Partial<LoginInputState>>({});
  const { login } = useUserStore();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    // zod validation is successful
    const result = LoginzodSchema.safeParse(input);
    if (!result.success) {
      // if partial error one or more error
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<LoginInputState>);
      return;
    }
    setLoading(true);

    // Simulating an API call delay

    // email: input.email,
    // password: input.password,
    try {
      await login(input);
      navigate("/");
    } catch (err) {
      console.error("Signup failed", err);
    } finally {
      setLoading(false);
    }
  };
  setTimeout(() => {
    setLoading(false);
    console.log("Logged in:", input);
  }, 2000);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4 flex justify-center">
          <h1 className="font-bold text-2xl">Lazeez Bites </h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.email}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.password}</span>
            )}
          </div>
        </div>
        <div className="mb-10">
          {loading ? (
            // when api in process below button is disabled
            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-orange hover:bg-hoverOrange cursor-pointer"
            >
              Login
            </Button>
          )}
          <div className="mt-4 flex justify-center">
            <Link
              to="/forgetpassword"
              className="hover:text-blue-500 hover:underline"
            >
              Forgot Password
            </Link>
          </div>
        </div>

        <Separator className="-mt-5" />
        <p className="mt-3 flex justify-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 ml-1">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};
