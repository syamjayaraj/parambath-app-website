"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className={styles.logoWrapper}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src="/app-logo.png"
              alt="Parambath App Logo"
              width={100}
              height={100}
              className={styles.appLogo}
              priority
            />
          </motion.div>
          <h1 className={styles.heroTitle}>
            Thalakkulathur Village Services
            <br />
            <span className={styles.highlight}>In Your Pocket</span>
          </h1>
          <p className={styles.subtitle}>
            Experience seamless access to village services in Thalakkulathur,
            Kozhikode, Kerala. Stay connected with community events, local
            businesses, and essential services — all in one powerful mobile
            application.
          </p>
          <div className={styles.storeButtons}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://play.google.com/store/apps/details?id=com.onnich.parambath"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeButton}
              aria-label="Get it on Google Play"
            >
              <Image
                src="/play-store.png"
                alt="Get it on Google Play"
                width={30}
                height={30}
                className={styles.storeImage}
              />
              <span className={styles.btnText}>Google Play</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://apps.apple.com/in/app/parambath-app/id6745081315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeButton}
              aria-label="Get it on App Store"
            >
              <Image
                src="/app-store.png"
                alt="Get it on App Store"
                width={30}
                height={30}
                className={styles.storeImage}
              />
              <span className={styles.btnText}>App Store</span>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/app-screenshot.png"
            alt="Parambath App Interface"
            width={400}
            height={800}
            className={styles.heroImage}
            priority
          />
          {/* Glassmorphism blob effect behind image */}
          <div className={styles.blob} />
        </motion.div>
      </div>
    </section>
  );
}
