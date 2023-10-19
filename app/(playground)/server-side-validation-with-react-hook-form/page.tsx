"use client";
import submit from "@/app/(playground)/server-side-validation-with-react-hook-form/actions";
import schema from "@/app/schema";
import Info from "@/components/info";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<z.infer<typeof schema>>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  return (
    <>
      <Info>React Hook Form でバリデーションをしています。</Info>
      <form
        onSubmit={handleSubmit((data) => submit(data))}
        className="flex flex-col space-y-4 mt-6"
      >
        <label className="space-y-2 flex flex-col">
          <span>Input name</span>
          <input className="border rounded p-2" {...register("name")} />
          {errors.name?.message && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </label>
        <label className="space-y-2 flex flex-col">
          <span>Input email</span>
          <input className="border rounded p-2" {...register("email")} />
          {errors.email?.message && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </label>
        <button
          className="p-2 border border-purple-500 rounded"
          disabled={isSubmitted}
        >
          Submit
        </button>
      </form>
    </>
  );
}
