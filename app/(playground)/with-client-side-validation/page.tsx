"use client";
import submit from "@/app/(playground)/with-client-side-validation/actions";
import Info from "@/components/info";
import { userSchema } from "@/lib/schemas";
import { useState } from "react";
import { z } from "zod";

export default function Page() {
  const [formState, setFormState] = useState<{ message: string } | null>(null);
  const [state, setState] =
    useState<z.inferFlattenedErrors<typeof userSchema>>();

  const onSubmit = (formData: FormData) => {
    try {
      userSchema.parse({
        name: formData.get("name"),
        email: formData.get("email"),
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setState(error.formErrors);
        return;
      }
    }
    submit(formData).catch((error) => {
      setFormState({ message: error.message });
    });
  };

  return (
    <>
      <Info>Example implementation with client-side validation</Info>
      <form action={onSubmit}>
        <label>
          <span>Input name</span>
          <input type="text" name="name" id="name" />
          {!!state?.fieldErrors.name?.length && (
            <span className="error-message">{state.fieldErrors.name}</span>
          )}
        </label>
        <label>
          <span>Input email</span>
          <input type="email" name="email" id="email" />
          {!!state?.fieldErrors.email?.length && (
            <span className="error-message">{state.fieldErrors.email}</span>
          )}
        </label>
        <button>Submit</button>
        {formState?.message && (
          <p className="error-message">{formState.message}</p>
        )}
      </form>
    </>
  );
}
