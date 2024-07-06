import type { FC } from "react";

import cn from "classnames";
import NavButtons from "../NavButtons";
import styles from "./MobileNav.module.scss";

const MobileNav: FC<{ isClosing: boolean }> = ({ isClosing }) => {
  return (
    <aside
      className={cn(styles["mobile-nav"], { [styles["closing"]]: isClosing })}
    >
      <NavButtons />
    </aside>
  );
};

export default MobileNav;
