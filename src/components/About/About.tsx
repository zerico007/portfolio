import { Button } from "@chakra-ui/react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles["about-container"]}>
      <div className={styles.about}>
        <span>Hello</span>
        <p className={styles.intro}>
          I'm <span>Bavin</span> Edwards
        </p>
        <p className={styles["about-text"]}>
          I am a passionate frontend developer, who specializes in building web
          applications with React, NextJS, TypeScript, HTML & CSS. I am also a
          huge fan of open-source software and love to contribute to the
          community.
        </p>
        <a href="/portfolio/resume.pdf" download>
          <Button
            variant="solid"
            background="var(--primary-red)"
            width="fit-content"
            color="var(--light-text-color)"
            marginTop={100}
            borderRadius={0}
            padding="4px 36px"
            _hover={{ background: "var(--primary-red)" }}
          >
            Download CV
          </Button>
        </a>
      </div>
      <div className={styles.hero}>
        <img src="/portfolio/Profile.png" alt="hero" />
      </div>
    </section>
  );
}
