import Link from "next/link";

export default function VideoCard(props) {
  return (
    <div className="grid-item">
      <Link href={"/art-works/" + props.name}>
        <a target="_blank">
          <video
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => {
              e.target.currentTime = 0;
              e.target.pause();
            }}
          >
            <source
              src={"/pictures/" + props.name + "." + props.type}
              type="video/mp4"
            />
          </video>
        </a>
      </Link>
    </div>
  );
}
