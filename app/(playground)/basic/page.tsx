"use client";
import { requestUsername } from "@/app/(playground)/basic/actions";
import Info from "@/components/info";
import { useFormState } from "react-dom";

const initialState = {
  message: null,
};

export default function App() {
  const [state, formAction] = useFormState(requestUsername, initialState);

  return (
    <>
      <Info>Example implementation of most basic</Info>
      <form action={formAction}>
        <label>
          <span>Username:</span>
          <input type="text" name="username" />
        </label>
        <button type="submit">Request</button>
        {state.message && <p className="error-message">{state.message}</p>}
      </form>
    </>
  );
}
