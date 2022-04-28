import { FC } from "react";

import Video from "./video.svg";
import Image from "./image.svg";
import Text from "./text.svg";
import Exit from "./exit.svg";
import ArrowLeft from "./arrow-left.svg";
import Enter from "./enter.svg";

const Icons = {
  video: Video,
  image: Image,
  text: Text,
  exit: Exit,
  arrowLeft: ArrowLeft,
  enter: Enter,
};

interface IconProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  icon: "video" | "image" | "text" | "exit" | "arrowLeft" | "enter";
  className?: string;
}

export const Icon: FC<IconProps> = ({ icon, className = "", ...props }) => {
  return <img {...props} alt="icon" src={Icons[icon]} className={className} />;
};
