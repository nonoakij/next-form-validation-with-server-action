"use client";
import submit, {
  validationEmail,
  validationName,
} from "@/app/(playground)/validate-on-blur/actions";
import Info from "@/components/info";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function Page() {
  const [formState, formAction] = useFormState(submit, null);
  const [state, setState] = useState<{
    name: string[] | null;
    email: string[] | null;
  }>({ name: null, email: null });
  return (
    <>
      <Info>Example implementation with validation when lost focus</Info>
      <form action={formAction}>
        <label>
          <span>Input name</span>
          <input
            onBlur={async (e) => {
              const state = await validationName(e.target.value);
              setState((prev) => ({ ...prev, name: state }));
            }}
            type="text"
            name="name"
            id="name"
          />
          {state.name && <span className="error-message">{state.name}</span>}
        </label>
        <label>
          <span>Input email</span>
          <input
            onBlur={async (e) => {
              const state = await validationEmail(e.target.value);
              setState((prev) => ({ ...prev, email: state }));
            }}
            type="email"
            name="email"
            id="email"
          />
          {state.email && <span className="error-message">{state.email}</span>}
        </label>
        <button disabled={!!state.name?.length || !!state.email?.length}>
          Submit
        </button>
        {formState?.message && (
          <p className="error-message">{formState.message}</p>
        )}
      </form>
    </>
  );
}
