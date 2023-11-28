"use server";
import { nameSchema, userSchema } from "@/lib/schemas";
import { doSomething } from "@/lib/utils";
import { z } from "zod";

export default async function submit(
  prevState: { message: string } | null,
  formData: FormData
) {
  try {
    // Always treat arguments to Server Actions as untrusted input and authorize any mutations.
    // @see: https://react.dev/reference/react/use-server#security
    const data = userSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
    });
    await doSomething(data);
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { message: error.toString() };
    }
    return { message: "Something went wrong" };
  }
}

export async function validationName(value: any) {
  try {
    // A specific schema can be picked using the "pick" method.
    userSchema.pick({ name: true }).parse({
      name: value,
    });
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.formErrors.fieldErrors.name ?? null;
    }
    return ["Something went wrong"];
  }
}

export async function validationEmail(value: any) {
  try {
    // A specific schema can be picked using the "pick" method.
    userSchema.pick({ email: true }).parse({
      email: value,
    });
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.formErrors.fieldErrors.email ?? null;
    }
    return ["Something went wrong"];
  }
}
