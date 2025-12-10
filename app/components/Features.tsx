"use client";

import styles from "./Features.module.css";
import { 
  FaStore, 
  FaCalendarAlt, 
  FaAmbulance, 
  FaBusAlt, 
  FaTruckMoving, 
  FaUserTie, 
  FaHandsHelping,
  FaTaxi
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: FaStore,
    title: "Business Directory",
    desc: "Comprehensive listings of local businesses with verified information"
  },
  {
    icon: FaCalendarAlt,
    title: "Community Events",
    desc: "Real-time updates on local events, festivals, and gatherings"
  },
  {
    icon: FaAmbulance,
    title: "Emergency Services",
    desc: "24/7 access to medical and emergency assistance numbers"
  },
  {
    icon: FaTaxi,
    title: "Autorickshaw",
    desc: "Find and contact local autorickshaw drivers instantly"
  },
  {
    icon: FaBusAlt,
    title: "Bus Timings",
    desc: "Access static bus schedules and route information"
  },
  {
    icon: FaTruckMoving,
    title: "Vehicle Services",
    desc: "Book lorries, JCBs, pickup trucks and other commercial vehicles"
  },
  {
    icon: FaUserTie,
    title: "Local Officials",
    desc: "Contact info for ward members, panchayat officers and officials"
  },
  {
    icon: FaHandsHelping,
    title: "Engagement",
    desc: "Interactive contests and activities to strengthen community bonds"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section className={styles.features}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Why Choose Parambath App?</h2>
        <p className={styles.sectionSubtitle}>
          Everything you need to navigate daily life in Thalakkulathur, all in one place.
        </p>
      </motion.div>

      <motion.div 
        className={styles.featureGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={item} className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <feature.icon className={styles.featureIcon} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
