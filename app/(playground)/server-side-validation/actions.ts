"use server";
import schema from "@/app/schema";

export default async function submit(formData: FormData) {
  schema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
  });
  console.log("success");
}
