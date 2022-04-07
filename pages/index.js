import Head from "next/head";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../styles/Home.module.css";
import artWorks from "../data/artWorks";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>3d art</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="logo">
          <a href="#" className="main-header">
            <img
              className="logo-img"
              src="/pictures/logo.svg"
              alt="Logo Sveta Bylik"
            />
          </a>
        </div>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <Link href="/contacts">
              <a className="contacts">More</a>
            </Link>
          </li>
        </ul>
      </header>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="5px 10px">
          {artWorks.map((art) => (
            <Card
              key={art.name}
              name={art.name}
              alt={art.alt}
              type={art.type}
            ></Card>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <footer className="footer">
        <div className="socials">
          <div>
            <a
              className="social"
              href="https://www.instagram.com/by.bilyk/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div>
            <a
              className="social"
              href="https://twitter.com/SvetaBilyk"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
