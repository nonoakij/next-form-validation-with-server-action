"use server";
import { nameSchema } from "@/lib/schemas";
import { doSomething } from "@/lib/utils";

export async function requestUsername(
  prevState: { message: string | null },
  formData: FormData
) {
  // Always treat arguments to Server Actions as untrusted input and authorize any mutations.
  // @see: https://react.dev/reference/react/use-server#security
  const username = nameSchema.safeParse(formData.get("username"));
  if (!username.success) {
    return { message: "Invalid username" };
  }

  try {
    await doSomething(username);
  } catch (e) {
    return { message: "Something went wrong" };
  }
  return { message: null };
}
