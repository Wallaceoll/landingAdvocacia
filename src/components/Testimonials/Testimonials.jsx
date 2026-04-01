import { motion } from 'framer-motion';
import TestimonialsCarousel from './TestimonialsCarousel';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.header}>
          <p className={styles.badge}>✨ Depoimentos</p>
          <h2 className={styles.title}>O que Nossos Clientes Dizem</h2>
          <p className={styles.description}>Confira os depoimentos de clientes satisfeitos com nossos serviços jurídicos de excelência.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <TestimonialsCarousel />
        </motion.div>
      </div>
    </section>
  );
}
