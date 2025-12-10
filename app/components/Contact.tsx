"use client";

import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.sectionSubtitle}>
          Have questions or need assistance? We're here to help you.
        </p>
      </motion.div>

      <div className={styles.contactGrid}>
        <motion.div 
          className={styles.contactCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className={styles.iconWrapper}>
            <FaPhone className={styles.icon} />
          </div>
          <h3>Call Us</h3>
          <a href="tel:+919746742650" className={styles.contactLink}>
            +91 9746742650
          </a>
        </motion.div>

        <motion.div 
          className={styles.contactCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className={styles.iconWrapper}>
            <FaWhatsapp className={styles.icon} />
          </div>
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/919746742650"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            +91 9746742650
          </a>
        </motion.div>

        <motion.div 
          className={styles.contactCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <div className={styles.iconWrapper}>
            <FaEnvelope className={styles.icon} />
          </div>
          <h3>Email</h3>
          <a href="mailto:info@floyet.com" className={styles.contactLink}>
            info@floyet.com
          </a>
        </motion.div>

        <motion.div 
          className={styles.contactCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
          <div className={styles.iconWrapper}>
            <FaMapMarkerAlt className={styles.icon} />
          </div>
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
              Hilite Business Park, Kozhikode
            </address>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
