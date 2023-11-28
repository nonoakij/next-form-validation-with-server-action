"use server";

import { userSchema } from "@/lib/schemas";
import { doSomething } from "@/lib/utils";

export default async function submit(formData: FormData) {
  try {
    // Always treat arguments to Server Actions as untrusted input and authorize any mutations.
    // @see: https://react.dev/reference/react/use-server#security
    const data = userSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
    });

    await doSomething(data);
  } catch (error) {
    throw error;
  }
}
