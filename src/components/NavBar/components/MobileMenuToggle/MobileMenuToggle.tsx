import type { FC } from "react";

import { Menu, X } from "react-feather";
import styles from "./MobileMenuToggle.module.scss";
import { Button } from "@chakra-ui/react";

const MobileMenuToggle: FC<{
  isOpen: boolean;
  toggleMenu: () => void;
}> = ({ isOpen, toggleMenu }) => {
  return (
    <Button onClick={toggleMenu} className={styles["mobile-menu-toggle"]}>
      {isOpen ? <X size={36} /> : <Menu size={36} />}
    </Button>
  );
};

export default MobileMenuToggle;
