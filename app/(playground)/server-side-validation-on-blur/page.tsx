"use client";
import submit, {
  validationEmail,
  validationName,
} from "@/app/(playground)/server-side-validation-on-blur/actions";
import Info from "@/components/info";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState<{ name?: string[]; email?: string[] }>({});
  return (
    <>
      <Info>サーバ側でバリデーションしています。</Info>
      <form action={submit} className="flex flex-col space-y-4 mt-6">
        <label className="space-y-2 flex flex-col">
          <span>Input name</span>
          <input
            className="border rounded p-2"
            onBlur={async (e) => {
              const error = (await validationName(e.target.value)) || undefined;
              setState((prev) => ({ ...prev, name: error }));
            }}
            type="text"
            name="name"
            id="name"
          />
          {!!state.name?.length && (
            <span className="text-red-500">{state.name}</span>
          )}
        </label>
        <label className="space-y-2 flex flex-col">
          <span>Input email</span>
          <input
            className="border rounded p-2"
            onBlur={async (e) => {
              const error =
                (await validationEmail(e.target.value)) || undefined;
              setState((prev) => ({ ...prev, email: error }));
            }}
            type="email"
            name="email"
            id="email"
          />
          {!!state.email?.length && (
            <span className="text-red-500">{state.email}</span>
          )}
        </label>
        <button
          className="p-2 border border-purple-500 rounded disabled:border-red-500"
          disabled={
            !!Object.values(state).filter((v) => v !== undefined).length
          }
        >
          Submit
        </button>
      </form>
    </>
  );
}
