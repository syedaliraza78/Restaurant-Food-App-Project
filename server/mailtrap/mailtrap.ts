// send.api.mailtrap.io
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const client = new MailtrapClient({
  token: process.env.MAILTRAP_API_TOKEN!,
});

export const sender = {
  email: "info@demomailtrap.co",
  name: "Lazeez Bites",
};
