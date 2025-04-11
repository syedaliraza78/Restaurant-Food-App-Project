import { Loader2, LockKeyhole, Mail, PhoneCall, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "@radix-ui/react-separator";
import { SignupInputState, SignupzodSchema } from "@/schema/UserSchema";
import { useUserStore } from "@/store/useUserStore";

export const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<SignupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Partial<SignupInputState>>({});
  const { signup } = useUserStore();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const result = SignupzodSchema.safeParse(input);

    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<SignupInputState>);
      return;
    }

    setLoading(true);
    try {
      await signup({
        fullname: input.fullname,
        email: input.email,
        password: input.password,
        contact: input.contact,
      });

      navigate("/verifyemail");
    } catch (err) {
      console.error("Signup failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4 flex justify-center">
          <h1 className="font-bold text-2xl">Lazeez Bites</h1>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error.fullname && (
              <span className="text-xs text-red-500">{error.fullname}</span>
            )}
          </div>
        </div>

        {/* Email */}
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
            {error.email && (
              <span className="text-xs text-red-500">{error.email}</span>
            )}
          </div>
        </div>

        {/* Password */}
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
            {error.password && (
              <span className="text-xs text-red-500">{error.password}</span>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="number"
              placeholder="Phone"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <PhoneCall className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error.contact && (
              <span className="text-xs text-red-500">{error.contact}</span>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="mb-10">
          <Button
            type="submit"
            className="w-full bg-orange hover:bg-hoverOrange"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : (
              "Signup"
            )}
          </Button>
        </div>

        <Separator />

        {/* Login Link */}
        <p className="mt-2 flex justify-center">
          I have an account?
          <Link to="/login" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
