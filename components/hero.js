import Image from "next/image";
import ReactPlayer from "react-player/youtube";

export default function Hero() {
  return (
    // <div className="aspect-w-16 aspect-h-9 w-full sm:h-80vh overflow-hidden">
    //   <Image
    //     src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    //     layout="responsive"
    //     width={16}
    //     height={9}
    //     objectFit="cover"
    //   />
    // </div>
    <div className="player-wrapper">
      {/* <ReactPlayer
        url="outube"
        width="100%"
        height="100%"
        className="react-player"
        controls={true}
        playing={true}
      /> */}
      <div className="react-player">
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          // controls={false}
          playsInline={true}
        >
          <source
          src="https://res.cloudinary.com/nxmxnjxxn/video/upload/v1630594618/dalgona_vf9cnc.mp4"
          type="video/mp4"
        />
        
      </video>
      </div>
    </div>
  );
}
