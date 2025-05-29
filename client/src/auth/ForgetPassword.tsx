import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false); // Manage loading dynamically
  const forgotSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating an API call delay
    setTimeout(() => {
      setLoading(false);
      console.log("Forgot password:", email);
    }, 2000);
    //   setTimeout(() => {
    //   setLoading(false);
    //   console.log("Forgot password:", email);
    // }, 2000);
      //   setTimeout(() => {
    //   setLoading(false);
    //   console.log("Forgot password:", email);
    // }, 2000);
          //   setTimeout(() => {
    //   setLoading(false);
    //   console.log("Forgot password:", email);
    // }, 2000);
            //   setTimeout(() => {
    //   setLoading(false);
    //   console.log("Forgot password:", email);
    // }, 2000);
               //   setTimeout(() => {
    //   setLoading(false);
    //   console.log("Forgot password:", email);
    // }, 2000);
  };
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form
        onSubmit={forgotSubmitHandler}
        className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4"
      >
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-5">Forgot Password</h1>
          <p className="text-sm text-gray-700">
            Enter your email address to reset your password
          </p>
        </div>
        <div>
          <div className="relative w-full">
            <Input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
          </div>
        </div>
        <div className="mb-10 ">
          {loading ? (
            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-orange hover:bg-hoverOrange cursor-pointer"
            >
              Send Reset Link
            </Button>
          )}
        </div>
        <span className="text-center -mt-7">
          Back to{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};
