"use server";
import { userSchema } from "@/lib/schemas";
import { doSomething } from "@/lib/utils";

export default async function submit(formData: FormData) {
  // Always treat arguments to Server Actions as untrusted input and authorize any mutations.
  // @see: https://react.dev/reference/react/use-server#security
  userSchema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
  });
  await doSomething(formData.get("name"), formData.get("email"));
}
