import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.mainContent}>
          <div className={styles.footerLinks}>
            <a href="/privacy-policy" className={styles.footerLink}>
              Privacy Policy
            </a>
            <span className={styles.divider}>|</span>
            <a href="/terms" className={styles.footerLink}>
              Terms of Service
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/parambathapp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Follow us on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/parambathapp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Follow us on Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className={styles.bottomText}>
          <p className={styles.madeIn}>
            Carefully Handcrafted in{" "}
            <span className={styles.highlight}>INDIA</span> | Powered by{" "}
            <a
              href="https://floyet.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              FLOYET
            </a>
          </p>
          <p className={styles.copyright}>
            Copyright © Parambath App {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
