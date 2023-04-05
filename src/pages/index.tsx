import Link from "next/link";

export default function Home() {
  return (
    <nav>
      <li>
        <Link href="/login">login</Link>
      </li>
      <li>
        <Link href="/budget">budget</Link>
      </li>
      <li>
        <Link href="/form">form</Link>
      </li>
    </nav>
  );
}
