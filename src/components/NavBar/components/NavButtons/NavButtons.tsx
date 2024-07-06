import type { FC } from "react";

import { Button } from "@chakra-ui/react";
import styles from "./NavButtons.module.scss";

const navItems = ["PROJECTS", "SKILLS", "RESUME", "CONTACT"];

const NavButtons: FC = () => {
  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item}
          className={styles["nav-button"]}
          variant="ghost"
          _selected={{ color: "var(--primary-red)" }}
        >
          {item}
        </Button>
      ))}
    </>
  );
};

export default NavButtons;
