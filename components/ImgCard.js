import Link from "next/link";

export default function ImgCard(props) {
  return (
    <div className="grid-item">
      <Link href={"/art-works/" + props.name}>
        <a target="_blank">
          <img
            src={require("../public/pictures/" + props.name + "." + props.type)}
            alt={props.alt}
          />
        </a>
      </Link>
    </div>
  );
}
