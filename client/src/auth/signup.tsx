import { Loader2, LockKeyhole, Mail, PhoneCall, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@radix-ui/react-separator"; // Ensure correct import
import { SignupInputState, SignupzodSchema } from "@/schema/UserSchema";

// here we can use typescript that means alreday define
// the types of the used of the variables two method one
// is type other interface
// if we use the zod then no need to define the type here
// type SignupInputState = {
//   username: string;
//   email: string;
//   password: string;
//   phone: string;
// };

export const Signup = () => {
  const [input, setInput] = useState<SignupInputState>({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false); // Manage loading dynamically
  const [error, setError] = useState<Partial<SignupInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    // zod validation is successful
    const result = SignupzodSchema.safeParse(input);
    if (!result.success) {
      // if partial error one or more error
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<SignupInputState>);
      return;
    }
    setLoading(true);

    // Simulating an API call delay
    setTimeout(() => {
      setLoading(false);
      console.log("Signup:", input);
    }, 2000);
  };

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
              type="text"
              placeholder="Full Name"
              name="username"
              value={input.username}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.username}</span>
            )}
          </div>
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
        <div className="mb-4">
          <div className="relative">
            <Input
              type="number"
              placeholder="Phone"
              name="phone"
              value={input.phone}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <PhoneCall className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.phone}</span>
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
              className="w-full bg-orange  cursor-pointer hover:bg-hoverOrange"
            >
              Signup
            </Button>
          )}
        </div>

        <Separator />
        <p className="mt-2 flex justify-center">
          I have an account?{" "}
          <Link to="/login" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
