"use server";
import { z } from "zod";
import { userSchema } from "@/lib/schemas";
import { doSomething } from "@/lib/utils";

export default async function submit(
  prevState: {
    fieldErrors?: z.inferFlattenedErrors<typeof userSchema>["fieldErrors"];
    error?: { message: string };
  } | null,
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
      return { fieldErrors: error.formErrors.fieldErrors };
    }
    return { error: { message: "Something went wrong" } };
  }
}
