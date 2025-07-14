import { Link, redirect } from "react-router";
import type { Route } from "./+types/other";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Other() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div>
        <h1>src/routes/Other.tsx</h1>
        <p>Minimal repro for TailwindCSS + DaisyUI issue</p>
        <Link to="/">Link to Home.tsx</Link>
      </div>
    </main>
  );
}
