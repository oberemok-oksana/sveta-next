import ImgCard from "./ImgCard";
import VideoCard from "./VideoCard";

export default function Card(props) {
  return props.type === "png" ? (
    <ImgCard {...props}></ImgCard>
  ) : (
    <VideoCard {...props}></VideoCard>
  );
}
