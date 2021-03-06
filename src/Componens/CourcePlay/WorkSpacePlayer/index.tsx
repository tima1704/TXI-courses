import { Button } from "Componens/common/Button";
import { Icon } from "Componens/common/Icon";
import { WidthContext } from "Componens/main/widthWrapper";
import { t } from "i18next";
import { FC, useContext } from "react";
import { ICourceUserContent } from "Types/cources";
import { FileContent } from "./FileContent";
import { FinishContent } from "./FinishContent";
import { ImageContent } from "./ImageContent";

import styles from "./index.module.css";
import { TextContent } from "./TextContent";
import { VideoContent } from "./VideoContent";

interface WorkSpacePlayerProps {
  data: ICourceUserContent;
  onClickNextLesson: () => void;
  onCLickCansel: () => void;
  onClickStartCourseAgain: () => void;
  isFinish: boolean;
}

export const WorkSpacePlayer: FC<WorkSpacePlayerProps> = ({
  data,
  onClickNextLesson,
  onCLickCansel,
  onClickStartCourseAgain,
  isFinish,
}) => {
  const width = useContext(WidthContext);

  return (
    <div>
      <div className={styles["titleRow"]}>
        {width > 900 ? (
          <div className={styles["title"]}>{data.title}</div>
        ) : (
          <Button variant={"grey"} onClick={onCLickCansel}>
            {t("common.back")}
          </Button>
        )}
        {width > 900 ? (
          <Button
            variant="white"
            onClick={isFinish ? onClickStartCourseAgain : onClickNextLesson}
          >
            {t("cource.nextLesson")}
          </Button>
        ) : (
          <Icon
            icon={"arrowLeftWhite"}
            style={{ transform: "rotate(180deg)" }}
            onClick={onClickNextLesson}
          />
        )}
      </div>
      <div className={styles["content"]}>
        {data.type === "text" && (
          <TextContent data={data.data} title={data.title} />
        )}
        {data.type === "video" && (
          <VideoContent data={data.data} title={data.title} />
        )}
        {data.type === "image" && (
          <ImageContent data={data.data} title={data.title} />
        )}
        {data.type === "file" && (
          <FileContent data={data.data} title={data.title} />
        )}
        {data.type === "finish" && <FinishContent />}
      </div>
    </div>
  );
};
