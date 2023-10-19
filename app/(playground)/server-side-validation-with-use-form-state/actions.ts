"use server";
import { z } from "zod";
import schema from "@/app/schema";

export default async function submit(
  prevState: z.inferFlattenedErrors<typeof schema> | null,
  formData: FormData
) {
  try {
    schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.formErrors;
    }
  }
  return null;
}
