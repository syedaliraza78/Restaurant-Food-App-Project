import { z } from "zod";

export const SignupzodSchema = z.object({
  fullname: z.string().min(3, "Username must be atleast 3 characters long"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
  contact: z.string().length(10, "Phone number must be 10 digits long"),
});

export const LoginzodSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
});

export type LoginInputState = z.infer<typeof LoginzodSchema>;
export type SignupInputState = z.infer<typeof SignupzodSchema>;
