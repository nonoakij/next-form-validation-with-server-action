"use client";
import submit from "@/app/(playground)/client-side-validation/actions";
import schema from "@/app/schema";
import Info from "@/components/info";
import { useState } from "react";
import { z } from "zod";

export default function Page() {
  const [state, setState] = useState<z.inferFlattenedErrors<typeof schema>>();
  const onSubmit = (formData: FormData) => {
    try {
      schema.parse({
        name: formData.get("name"),
        email: formData.get("email"),
      });
      submit(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setState(error.formErrors);
      }
    }
  };

  return (
    <>
      <Info>クライアント側でのみバリデーションをしています。</Info>
      <form action={onSubmit} className="flex flex-col space-y-4 mt-6">
        <label className="space-y-2 flex flex-col">
          <span>Input name</span>
          <input
            className="border rounded p-2"
            type="text"
            name="name"
            id="name"
          />
          {!!state?.fieldErrors.name?.length && (
            <span className="text-red-500">{state?.fieldErrors.name}</span>
          )}
        </label>
        <label className="space-y-2 flex flex-col">
          <span>Input email</span>
          <input
            className="border rounded p-2"
            type="email"
            name="email"
            id="email"
          />
          {!!state?.fieldErrors.email?.length && (
            <span className="text-red-500">{state?.fieldErrors.email}</span>
          )}
        </label>
        <button className="p-2 border border-purple-500 rounded">Submit</button>
      </form>
    </>
  );
}
