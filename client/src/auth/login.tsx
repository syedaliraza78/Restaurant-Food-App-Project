import { Label } from "@/components/ui/label";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@radix-ui/react-separator"; // Ensure correct import

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Manage loading dynamically

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating an API call delay
    setTimeout(() => {
      setLoading(false);
      console.log("Logged in:", input);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4 flex justify-center">
          <h1 className="font-bold text-2xl">PatelEats</h1>
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
              className="w-full bg-orange hover:bg-hoverOrange"
            >
              Login
            </Button>
          )}
        </div>

        <Separator />
        <p className="mt-2 flex justify-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 ml-1">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};
