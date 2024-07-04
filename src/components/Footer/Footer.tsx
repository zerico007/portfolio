import styles from "./Footer.module.scss";
import { GitHub, Linkedin, Inbox, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Created by Bavin Edwards &copy; {new Date().getFullYear()}</p>
      <a href="https://github.com/zerico007" target="_blank" rel="noreferrer">
        <GitHub size={18} color="var(--primary-red)" />
      </a>
      <a
        href="https://www.linkedin.com/in/bavin-edwards-777b23180/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={18} color="var(--primary-red)" />
      </a>
      <a href="mailto:bavin_edwards@live.com" target="_blank" rel="noreferrer">
        <Inbox size={18} color="var(--primary-red)" />
      </a>
      <a href="https://x.com/BavinEdwards" target="_blank" rel="noreferrer">
        <Twitter size={18} color="var(--primary-red)" />
      </a>
    </footer>
  );
}
