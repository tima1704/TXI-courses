import { FC, useContext, useMemo } from "react";
import React from "react";
import classNames from "classnames";
import Logo from "Svg/logo.svg";
import { Link } from "react-router-dom";
import { URL_HOME } from "Constants/URL";
import { useAppSelector } from "Hooks/redux";

import styles from "./index.module.css";
import { MenuHeader } from "./MenuHeader";
import { MenuAuth } from "./MenuAuth";
import { WidthContext } from "../widthWrapper";

interface IHeader {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<IHeader> = ({ setOpenMenu }) => {
  const { regions, languageApp } = useAppSelector((state) => state.App);

  // const { setModalViewAction, setModalVisibleAction } = useAppDispatch();

  const widthScreen = useContext(WidthContext);

  const langName = useMemo(() => {
    return regions.find((item) => item.id === languageApp)?.title || "rus";
  }, [languageApp, regions]);

  return (
    <header className={classNames("container", "anim_opacity")}>
      <div className={styles["header"]}>
        <div className={styles["logo_menu"]}>
          <div className={styles["ImgLogoMenu"]}>
            <Link to={URL_HOME}>
              <img src={Logo} alt="Logo" className="scale" />
            </Link>
          </div>
          {widthScreen > 1100 && <MenuHeader />}
        </div>
        {widthScreen > 1100 ? (
          <div className={styles["userMenu"]}>
            <MenuAuth />
            <div className={styles["lang"]}>{langName}</div>
          </div>
        ) : (
          <div
            className={styles["menuM"]}
            onClick={() => setOpenMenu((p) => !p)}
          ></div>
        )}
      </div>
    </header>
  );
};
