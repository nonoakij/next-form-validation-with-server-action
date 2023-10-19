"use server";
import schema from "@/app/schema";

export default async function submit(formData: FormData) {
  try {
    schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
    });
  } catch (error) {
    throw new Error("invalid");
  }
}
