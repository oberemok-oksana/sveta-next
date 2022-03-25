import Link from "next/link";
import artWorks from "../../data/artWorks";

export default function ArtWork({ artWork }) {
  if (!artWork) {
    return <div>ArtWork not found</div>;
  }

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link href="/">
            <a className="main-header">Sveta Bilyk</a>
          </Link>
        </div>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <Link href="/contacts">
              <a className="contacts">More</a>
            </Link>
          </li>
        </ul>
      </header>
      <div className="wrapper-card">
        <div className="card-img">
          {artWork.type === "png" ? (
            <img
              src={require(`../../public/pictures/${artWork.name}.${artWork.type}?original&lqip&lqip-colors`)}
              alt={artWork.alt}
            />
          ) : (
            <video
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => {
                e.target.currentTime = 0;
                e.target.pause();
              }}
            >
              <source
                src={`/pictures/${artWork.name}.${artWork.type}`}
                type="video/mp4"
              ></source>
            </video>
          )}
        </div>
        <div className="card-description">
          <h1 className="title">{artWork.alt}</h1>
          <p>{artWork.description}</p>
          <a className="button-buy" href={artWork.link}>
            Buy
          </a>
        </div>
      </div>
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
    </>
  );
}

export async function getStaticProps(context) {
  const artWork = artWorks.find(
    (artWork) => artWork.name === context.params.name
  );
  return {
    props: {
      artWork: artWork,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: artWorks.map((work) => ({ params: { name: work.name } })),
    fallback: false, // false or 'blocking'
  };
}
