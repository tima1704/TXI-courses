import { FC } from "react";

import styles from "./index.module.css";

import classNames from "classnames";

import Logo from "./logo.svg";
import Profile from "./Profile.svg";

import { useNavigate } from "react-router-dom";
import { URL_HOME, URL_LOGIN } from "Constants/URL";

export const Header: FC = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate(URL_HOME, { replace: true });
  };

  const onClickProfile = () => {
    navigate(URL_LOGIN);
  };

  return (
    <header className={classNames(styles["header"], "container")}>
      <div className={styles["logo_menu"]}>
        <img src={Logo} alt="Logo" className="scale" onClick={onClickLogo} />
        <div className={styles["menu"]}>menu</div>
      </div>
      <div
        className={classNames(styles["profile"], "scale")}
        onClick={onClickProfile}
      >
        <img src={Profile} alt="profile" />
      </div>
    </header>
  );
};
