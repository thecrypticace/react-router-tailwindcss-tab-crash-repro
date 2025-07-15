import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <h1>Cascade Layers Crasher</h1>
      <p>
        Open dev tools and delete the <strong>first</strong> stylesheet
      </p>
      <Link to="/other">Link to Other.tsx</Link>
    </main>
  );
}
