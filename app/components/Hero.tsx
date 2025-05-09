import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <div className={styles.logoWrapper}>
            <Image
              src="/app-logo.png"
              alt="Parambath App Logo"
              width={100}
              height={100}
              className={styles.appLogo}
              priority
            />
          </div>
          <h1 className={styles.heroTitle}>
            Thalakkulathur Village Services
            <br />
            In Your Pocket
          </h1>
          <p className={styles.subtitle}>
            Experience seamless access to village services in Thalakkulathur,
            Kozhikode, Kerala. Stay connected with community events, local
            businesses, and essential services — all in one powerful mobile
            application.
          </p>
          <div className={styles.storeButtons}>
            <a
              href="https://play.google.com/store/apps/details?id=com.onnich.parambath"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeButton}
              aria-label="Get it on Google Play"
            >
              <Image
                src="/play-store.png"
                alt="Get it on Google Play"
                width={35}
                height={35}
                className={styles.storeImage}
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/parambath-app/id6745081315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeButton}
              aria-label="Get it on App Store"
            >
              <Image
                src="/app-store.png"
                alt="Get it on App Store"
                width={35}
                height={35}
                className={styles.storeImage}
              />
            </a>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/app-screenshot.png"
            alt="Parambath App Interface"
            width={400}
            height={800}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
