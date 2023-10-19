import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
        <Link
          href="/"
          className="inline-block px-4 py-2 border-2 text-gray-500"
        >
          back to Home
        </Link>
      </header>
      <main className="mt-8">{children}</main>
    </>
  );
}
