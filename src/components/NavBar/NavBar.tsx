import { useState } from "react";

import styles from "./NavBar.module.scss";
import { useAppContext } from "../../context/appContext";
import NavButtons from "./components/NavButtons";
import MobileNav from "./components/MobileNav";
import MobileMenuToggle from "./components/MobileMenuToggle";

export default function NavBar() {
  const { mobile } = useAppContext();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const shouldShowMobileNav = mobile && showMobileNav;

  return (
    <nav className={styles.nav}>
      {mobile ? (
        <MobileMenuToggle
          isOpen={shouldShowMobileNav}
          toggleMenu={toggleMobileNav}
        />
      ) : (
        <NavButtons />
      )}
      {shouldShowMobileNav && <MobileNav />}
    </nav>
  );
}

