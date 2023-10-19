"use server";
import { z } from "zod";
import schema from "@/app/schema";

export default async function submit(formData: FormData) {
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

export async function validationName(value: any) {
  try {
    schema.pick({ name: true }).parse({
      name: value,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.formErrors.fieldErrors.name;
    }
  }
  return null;
}

export async function validationEmail(value: any) {
  try {
    schema.pick({ email: true }).parse({
      email: value,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.formErrors.fieldErrors.email;
    }
  }
  return null;
}
