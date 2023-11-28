import Link from "next/link";

const LINKS = [
  {
    label: "basic",
    href: "basic",
  },
  {
    label: "using only RSC.",
    href: "rsc-only",
  },
  {
    label: "with validation when lost focus",
    href: "/validate-on-blur/",
  },
  {
    label: "with client-side validation",
    href: "/with-client-side-validation/",
  },
  {
    label: "using React Hook Form",
    href: "/with-react-hook-form/",
  },
  {
    label: "using react-dom/useFromStatus",
    href: "/with-use-form-state/",
  },
];

export default function Home() {
  return (
    <main>
      <h1 className="text-lg font-bold">
        # Next.js form validation with Server Action
      </h1>
      <div className="text-lg space-y-4 flex flex-col mt-8">
        {LINKS.map(({ label, href }) => (
          <Link key={href} className="underline" href={href}>
            {label}
          </Link>
        ))}
      </div>
    </main>
  );
}
