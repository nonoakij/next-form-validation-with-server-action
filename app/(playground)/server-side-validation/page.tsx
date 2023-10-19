import submit from "@/app/(playground)/server-side-validation/actions";
import Info from "@/components/info";

export default function Page() {
  return (
    <>
      <Info>
        サーバーサイドでバリデーションを行います。
        クライアント側でのバリデーションはしていません。
        問題があれば、エラーがスローされます。
        エラーがスローされることで、\`error.tsx\`がレンダリングされます。
      </Info>
      <form action={submit} className="flex flex-col space-y-4 mt-6">
        <label className="space-x-2">
          <span>Input name</span>
          <input
            className="border rounded p-2"
            type="text"
            name="name"
            id="name"
          />
        </label>
        <label className="space-x-2">
          <span>Input email</span>
          <input
            className="border rounded p-2"
            type="email"
            name="email"
            id="email"
          />
        </label>
        <button className="p-2 border border-purple-500 rounded">Submit</button>
      </form>
    </>
  );
}
