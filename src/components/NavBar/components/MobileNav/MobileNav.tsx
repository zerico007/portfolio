import type { FC } from "react";

import NavButtons from "../NavButtons";
import styles from "./MobileNav.module.scss";

const MobileNav: FC = () => {
  return (
    <aside className={styles["mobile-nav"]}>
      <NavButtons />
    </aside>
  );
};

export default MobileNav;
