import { PropsWithChildren } from "react";

export default function Info(props: PropsWithChildren) {
  return (
    <p className="p-4 rounded-lg border-4 border-dashed border-orange-500 bg-orange-200 text-orange-900 whitespace-pre-wrap">
      {props.children}
    </p>
  );
}
