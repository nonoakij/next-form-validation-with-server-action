"use client";
import submit from "@/app/(playground)/server-side-validation-with-use-form-state/actions";
import Info from "@/components/info";
import { experimental_useFormState as useFormState } from "react-dom";

export default function Page() {
  const [state, formAction] = useFormState(submit, null);
  return (
    <>
      <Info>サーバ側でバリデーションしています。</Info>
      <form action={formAction} className="flex flex-col space-y-4 mt-6">
        <label className="space-y-2 flex flex-col">
          <span>Input name</span>
          <input
            className="border rounded p-2"
            type="text"
            name="name"
            id="name"
          />
          {!!state?.fieldErrors.name?.length && (
            <span className="text-red-500">{state.fieldErrors.name}</span>
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
            <span className="text-red-500">{state.fieldErrors.email}</span>
          )}
        </label>
        <button className="p-2 border border-purple-500 rounded">Submit</button>
      </form>
    </>
  );
}
