import Link from "next/link";

const LINKS = [
  { label: "client-side validation", href: "client-side-validation" },
  { label: "server-side validation", href: "server-side-validation" },
  {
    label: "server-side validation on blur",
    href: "server-side-validation-on-blur",
  },
  {
    label: "server-side validation with React Hook Form",
    href: "server-side-validation-with-react-hook-form",
  },
  {
    label: "server-side validation with React/useFormState",
    href: "server-side-validation-with-use-form-state",
  },
];

export default function Home() {
  return (
    <main>
      <h1 className="text-lg font-bold">
        # Nextjs form validation with Server Action
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
