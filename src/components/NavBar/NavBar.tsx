import { Button } from "@chakra-ui/react";
import styles from "./NavBar.module.scss";

const navItems = ["PROJECTS", "SKILLS", "RESUME", "CONTACT"];

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <Button
          _hover={{ color: "var(--primary-red)", _after: { width: "100%" } }}
          key={item}
          color="inherit"
          variant="ghost"
          _selected={{ color: "var(--primary-red)" }}
          _after={{
            content: "''",
            display: "block",
            position: "absolute",
            bottom: "0",
            width: "0",
            height: "3px",
            borderRadius: "2px",
            backgroundColor: "var(--primary-red)",
            transition: "width 0.3s",
          }}
          fontWeight={700}
        >
          {item}
        </Button>
      ))}
    </nav>
  );
}
