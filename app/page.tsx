import Image from "next/image";
import styles from "./page.module.css";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <Image
              src="/app-logo.png"
              alt="Parambath App Logo"
              width={80}
              height={80}
              className={styles.appLogo}
              priority
            />
            <h1 className={styles.heroTitle}>Welcome to Parambath App</h1>
            <p className={styles.subtitle}>
              Your comprehensive digital gateway to village services, connecting
              community and convenience
            </p>
            <div className={styles.storeButtons}>
              <a
                href="https://play.google.com/store/apps/details?id=com.onnich.parambath"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeButton}
              >
                <Image
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  width={30}
                  height={30}
                  className={styles.storeImage}
                />
              </a>
              <div className={styles.comingSoon}>
                <div className={styles.storeButton}>
                  <Image
                    src="/app-store.png"
                    alt="Download on App Store"
                    width={30}
                    height={30}
                    className={`${styles.storeImage} ${styles.disabled}`}
                  />
                </div>
                <span className={styles.comingSoonBadge}>Coming Soon</span>
              </div>
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
        </section>

        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
