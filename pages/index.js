import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>3d art</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="logo">
          <a href="#" className="main-header">
            Sveta Bilyk
          </a>
        </div>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <a className="contacts" href="./pages/contacts.html">
              contacts
            </a>
          </li>
        </ul>
      </header>
      <main className="grid">
        <div className="grid-item">
          <a href="./pages/blue_crab.html" target="_blank">
            <Image
              id="blue_crab"
              src="/pictures/Blue_crab_in_dirty_water.png"
              alt="Blue crab in dirty water"
              layout="fill"
            />
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/deep_sea_crystal.html" target="_blank">
            <Image
              src="/pictures/Deep_sea_crystal.png"
              alt="Deep sea crystal"
              layout="fill"
            />
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/codependency.html" target="_blank">
            <Image
              src="/pictures/Codependency_false_happiness.png"
              alt="Codependency - false happiness"
              layout="fill"
            />
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/dragons_prayer.html" target="_blank">
            <Image
              src="/pictures/Dragons_prayer.png"
              alt="Dragon's prayer"
              layout="fill"
            />
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/flight_to_freedom.html" target="_blank">
            <Image
              src="/pictures/Flight_to_freedom.png"
              alt="Flight to freedom"
              layout="fill"
            />
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/turmoil.html" target="_blank">
            <Image src="/pictures/Turmoil.png" alt="Turmoil" layout="fill" />
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/shark.html" target="_blank">
            <Image src="/pictures/Shark.png" alt="Shark" layout="fill" />
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/supernova.html" target="_blank">
            <Image
              src="/pictures/Supernova.png"
              alt="Supernova"
              layout="fill"
            />
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/wondershell.html" target="_blank">
            <Image
              src="/pictures/Wondershell.png"
              alt="Wondershell"
              layout="fill"
            />
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/kiwa.html" target="_blank">
            <video>
              <source
                src="/pictures/Kiwa_hirsuta_in_dirty_water.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </a>
        </div>
        <div className="grid-item">
          <a href="./pages/wondershell_video.html" target="_blank">
            <video>
              <source src="/pictures/Wondershell_V2.mov" type="video/mp4" />
            </video>
          </a>
        </div>
      </main>
      <footer className="footer">
        <div className="mailbox">sveta@gmail.com</div>
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
