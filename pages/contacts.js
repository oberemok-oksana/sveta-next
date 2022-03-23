import Link from "next/link";

export default function Contacts() {
  return (
    <>
      <header>
        <h1>My contacts</h1>
        <div>
          <Link href="/">
            <a>Back to the main page</a>
          </Link>
        </div>
      </header>
      <main>
        <h2>Instagram</h2>
        <a href="https://www.instagram.com/by.bilyk/">Instagram</a>
      </main>
    </>
  );
}
