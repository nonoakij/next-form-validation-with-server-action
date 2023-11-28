"use client";
import submit from "@/app/(playground)/with-use-form-state/actions";
import Info from "@/components/info";
import { useFormStatus, useFormState } from "react-dom";

function SubmitButton() {
  const formStatus = useFormStatus();
  return <button disabled={formStatus.pending}>Submit</button>;
}

export default function Page() {
  const [state, formAction] = useFormState(submit, null);
  return (
    <>
      <Info>Example implementation using react-dom/useFromStatus</Info>
      <form action={formAction}>
        <label>
          <span>Input name</span>
          <input type="text" name="name" id="name" />
          {!!state?.fieldErrors?.name?.length && (
            <span className="error-message">{state.fieldErrors.name}</span>
          )}
        </label>
        <label>
          <span>Input email</span>
          <input type="email" name="email" id="email" />
          {!!state?.fieldErrors?.email?.length && (
            <span className="error-message">{state.fieldErrors.email}</span>
          )}
        </label>
        <SubmitButton />
        {state?.error?.message && (
          <p className="error-message">{state.error.message}</p>
        )}
      </form>
    </>
  );
}
