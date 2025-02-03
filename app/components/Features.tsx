import Image from "next/image";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>Key Features</h2>
      <div className={styles.featureGrid}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image
              src="/business.png"
              alt="Business Directory Icon"
              width={48}
              height={48}
            />
          </div>
          <h3>Business Directory</h3>
          <p>
            Comprehensive listings of local businesses with verified information
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image
              src="/event.png"
              alt="Community Events Icon"
              width={48}
              height={48}
            />
          </div>
          <h3>Community Events</h3>
          <p>Real-time updates on local events, festivals, and gatherings</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image
              src="/ambulance.png"
              alt="Emergency Services Icon"
              width={48}
              height={48}
            />
          </div>
          <h3>24/7 Emergency Services</h3>
          <p>Instant access to medical and emergency assistance</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image
              src="/auto.png"
              alt="Autorickshaw Services Icon"
              width={48}
              height={48}
            />
          </div>
          <h3>Autorickshaw Numbers</h3>
          <p>
            Find and contact local autorickshaw drivers for your transportation
            needs
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image
              src="/bus.png"
              alt="Bus Services Icon"
              width={48}
              height={48}
            />
          </div>
          <h3>Local Bus Timings</h3>
          <p>
            Access static bus schedules and route information for local services
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image
              src="/lorry.png"
              alt="Vehicle Services Icon"
              width={48}
              height={48}
            />
          </div>
          <h3>Vehicle Services</h3>
          <p>Book lorries, JCBs, pickup trucks and other commercial vehicles</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image
              src="/rep.png"
              alt="Representatives Icon"
              width={48}
              height={48}
            />
          </div>
          <h3>Local Representatives</h3>
          <p>
            Contact information for ward members, ministers, panchayat officers
            and other local officials
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image
              src="/contest.png"
              alt="Community Engagement Icon"
              width={48}
              height={48}
            />
          </div>
          <h3>Community Engagement</h3>
          <p>
            Interactive contests and activities to strengthen community bonds
          </p>
        </div>
      </div>
    </section>
  );
}
