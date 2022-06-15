import { Icon } from "Componens/common/Icon";
import { host } from "Constants/API";
import { TOKEN } from "Constants/App";
import { FC, useMemo } from "react";
import styles from "./index.module.css";
interface IFileContent {
  data: string;
  title: string;
}

export const FileContent: FC<IFileContent> = ({ data, title }) => {
  const urlContent = useMemo(() => {
    return host + data + "?token=" + localStorage.getItem(TOKEN);
  }, [data]);

  return (
    <div style={{ marginTop: 25 }} className={styles["file_content"]}>
      <a href={urlContent} target={"_blank"} rel="noreferrer">
        <Icon icon={"file"} />
        {title}
      </a>
    </div>
  );
};
