import { host } from "Constants/API";
import { TOKEN } from "Constants/App";
import { FC, useMemo } from "react";

import {
  BigPlayButton,
  ControlBar,
  LoadingSpinner,
  PlaybackRateMenuButton,
  Player,
  // @ts-ignore:disable-next-line
} from "video-react";

import styles from "./index.module.css";

interface IVideoContnet {
  data: string;
  title: string;
}

export const VideoContent: FC<IVideoContnet> = ({ data, title }) => {
  const urlContent = useMemo(() => {
    return host + data + "?token=" + localStorage.getItem(TOKEN);
  }, [data]);

  return (
    <div style={{ width: "100%" }}>
      <div>
        <Player src={urlContent} playsInline>
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar>
            <PlaybackRateMenuButton rates={[2, 1, 0.5]} />
          </ControlBar>
        </Player>
      </div>
      <div className={styles["title"]}>{title}</div>
    </div>
  );
};
