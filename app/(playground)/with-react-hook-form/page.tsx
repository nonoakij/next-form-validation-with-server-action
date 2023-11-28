"use client";
import submit from "@/app/(playground)/with-react-hook-form/actions";
import { userSchema } from "@/lib/schemas";
import Info from "@/components/info";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState<{ message: string } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    setError,
  } = useForm<z.infer<typeof userSchema>>({
    mode: "onBlur",
    resolver: zodResolver(userSchema),
  });
  return (
    <>
      <Info>Example implementation using React Hook Form</Info>
      <form
        onSubmit={handleSubmit(async (data) => {
          await submit(data).catch((error) => {
            if (error instanceof z.ZodError) {
              error.formErrors.fieldErrors["name"] &&
                setError("name", {
                  message: error.formErrors.fieldErrors["name"].toString(),
                });
              error.formErrors.fieldErrors["email"] &&
                setError("name", {
                  message: error.formErrors.fieldErrors["email"].toString(),
                });
            }
            setState({ message: error.message });
          });
        })}
      >
        <label>
          <span>Input name</span>
          <input {...register("name")} />
          {errors.name?.message && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </label>
        <label>
          <span>Input email</span>
          <input {...register("email")} />
          {errors.email?.message && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </label>
        <button disabled={isSubmitted}>Submit</button>
        {state?.message && <p className="error-message">{state.message}</p>}
      </form>
    </>
  );
}
