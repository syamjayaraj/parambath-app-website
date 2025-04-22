import styles from "./page.module.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
