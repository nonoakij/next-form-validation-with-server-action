"use server";
import { z } from "zod";
import { userSchema } from "@/lib/schemas";
import { doSomething } from "@/lib/utils";

export default async function submit(data: z.infer<typeof userSchema>) {
  // Always treat arguments to Server Actions as untrusted input and authorize any mutations.
  // @see: https://react.dev/reference/react/use-server#security
  const parsedData = userSchema.parse(data);
  await doSomething(parsedData);
  return null;
}
