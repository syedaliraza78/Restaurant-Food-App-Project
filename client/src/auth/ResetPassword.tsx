import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyholeIcon, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState(false); // Manage loading dynamically
  const forgotSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating an API call delay
    setTimeout(() => {
      setLoading(false);
      console.log("Forgot password:", newPassword);
    }, 2000);
  };
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form
        onSubmit={forgotSubmitHandler}
        className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4"
      >
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-5">Reset Password</h1>
          <p className="text-sm text-gray-700">
            Enter your Password to Reset old password
          </p>
        </div>
        <div>
          <div className="relative w-full">
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="pl-10"
            />
            <LockKeyholeIcon className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
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
              Reset Password
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
