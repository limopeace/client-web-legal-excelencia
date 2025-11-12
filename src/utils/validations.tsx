import { z } from "zod";

export const validationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
    })
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be less than 100 characters.")
    .trim(),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email("Please enter a valid email address.")
    .trim()
    .toLowerCase(),
  message: z
    .string({
      required_error: "Message is required.",
    })
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must be less than 1000 characters.")
    .trim(),
});
