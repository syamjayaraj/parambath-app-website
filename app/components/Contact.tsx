import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact Us</h2>
      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <FaPhone className={styles.icon} />
          <h3>Call Us</h3>
          <a href="tel:+919746742650" className={styles.contactLink}>
            +91 9746742650
          </a>
        </div>

        <div className={styles.contactCard}>
          <FaWhatsapp className={styles.icon} />
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/919746742650"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            +91 9746742650
          </a>
        </div>

        <div className={styles.contactCard}>
          <FaEnvelope className={styles.icon} />
          <h3>Email</h3>
          <a href="mailto:info@floyet.com" className={styles.contactLink}>
            info@floyet.com
          </a>
        </div>

        <div className={styles.contactCard}>
          <FaMapMarkerAlt className={styles.icon} />
          <h3>Address</h3>
          <a
            href="https://maps.app.goo.gl/NQ7Js4YeZUA7yJep9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <address className={styles.address}>
              Floyet Labs & Technologies LLP
              <br />
              Door No: 2211, 2/1149/100
              <br />
              Hilite Business Park, Olavanna
              <br />
              Kozhikode – 673014
            </address>
          </a>
        </div>
      </div>
    </section>
  );
}
