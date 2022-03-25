import Link from "next/link";

export default function Contacts() {
  return (
    <>
      <header className="contacts-header">
        <h1 className="contacts-title">About</h1>
        <div className="photo">
          <img
            src={require("../public/pictures/SvetaBilyk.png")}
            alt="My photo"
          ></img>
        </div>
      </header>
      <main className="contacts-main">
        <h2 className="title  contacts-subtitle">NFT</h2>
        <p className="contacts-links">
          <span className="contacts-link">
            <a href="https://foundation.app/@bilyk">Foundation</a>
          </span>
          <span className="contacts-link">
            <a href="https://knownorigin.io/bilyk">KnownOrigin</a>
          </span>
        </p>
        <h2 className="title contacts-subtitle">Contacts</h2>
        <p className="contacts-links">
          <span className="contacts-link">
            <a href="https://www.instagram.com/by.bilyk/">Instagram</a>
          </span>
          <span className="contacts-link">
            <a href="https://twitter.com/SvetaBilyk">Twitter</a>
          </span>
          <span className="contacts-list">bilyk.dsgn@gmail.com</span>
        </p>
        <div className="contacts-logo">
          <Link href="/">
            <a className="main-header logo">Sveta Bilyk</a>
          </Link>
        </div>
      </main>
    </>
  );
}
