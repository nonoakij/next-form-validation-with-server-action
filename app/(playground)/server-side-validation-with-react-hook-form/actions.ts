"use server";
import { z } from "zod";
import schema from "@/app/schema";

export default async function submit(data: z.infer<typeof schema>) {
  console.log(data);
  try {
    schema.parse(data);
  } catch (error) {
    throw new Error("invalid");
  }
  return null;
}
