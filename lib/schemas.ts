import { z } from "zod";

export const emailSchema = z.string().email();
export const nameSchema = z.string().min(10).max(255);

export const userSchema = z.object({
  name: nameSchema,
  email: emailSchema,
});
