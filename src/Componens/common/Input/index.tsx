import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { IValidError } from "Types/common";

import styles from "./index.module.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  classNameInput?: string;
  error?: IValidError;
}

export const Input: FC<InputProps> = ({
  className = "",
  classNameInput = "",
  error,
  ...props
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps } = useCollapse({ isExpanded });

  useEffect(() => {
    if (error) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [error]);

  return (
    <div className={className}>
      <input
        {...props}
        className={classNames(styles["input"], {
          [classNameInput]: classNameInput,
        })}
      />
      <div className={classNames(styles["line_input"], {
        [styles["error"]]: !!error,
      } )}/>
      <div {...getCollapseProps()}>
        <div className={styles["error_message"]}>{error?.message}</div>
      </div>
    </div>
  );
};
