import Link from "next/link";

export default function Contacts() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link href="/">
            <a className="main-header">
              <img
                className="logo-img"
                src="/pictures/logo.svg"
                alt="Logo Sveta Bylik"
              />
            </a>
          </Link>
        </div>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <Link href="/contacts">
              <a className="contacts">About</a>
            </Link>
          </li>
        </ul>
      </header>
      <main className="contacts-main">
        <div className="photo">
          <img
            src={require("../public/pictures/SvetaBilyk.png")}
            alt="My photo"
          ></img>
        </div>
        <h2 className="title  contacts-subtitle">NFT</h2>
        <div className="contacts-links">
          <div className="contacts-link">
            <a href="https://foundation.app/@bilyk">Foundation</a>
          </div>
          <div className="contacts-link">
            <a href="https://knownorigin.io/bilyk">KnownOrigin</a>
          </div>
        </div>
        <h2 className="title contacts-subtitle">Contacts</h2>
        <div className="contacts-links icons">
          <div className="contacts-link">
            <a href="https://www.instagram.com/by.bilyk/">
              {" "}
              <img
                className="icon"
                src="/pictures/instagram.svg"
                alt="instagram icon"
              />
            </a>
          </div>
          <div className="contacts-link">
            <a href="https://twitter.com/SvetaBilyk">
              {" "}
              <img
                className="icon"
                src="/pictures/twitter.png"
                alt="twitter icon"
              />
            </a>
          </div>

          <div className="contacts-link envelope">
            <button
              onClick={() =>
                navigator.clipboard.writeText("bilyk.dsgn@gmail.com")
              }
              className="icon copy tooltip"
            >
              <span className="tooltiptext">Click to copy</span>
            </button>
            {/* <div>bilyk.dsgn@gmail.com</div> */}
          </div>
        </div>
      </main>
    </>
  );
}
