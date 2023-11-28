import submit from "@/app/(playground)/rsc-only/actions";
import Info from "@/components/info";

export default function Page() {
  return (
    <>
      <Info>Example implementation using only RSC.</Info>
      <form action={submit}>
        <label>
          <span>Input name</span>
          <input type="text" name="name" id="name" />
        </label>
        <label>
          <span>Input email</span>
          <input type="email" name="email" id="email" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
