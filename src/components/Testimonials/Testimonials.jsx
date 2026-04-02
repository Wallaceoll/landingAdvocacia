import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';
import TestimonialsCarousel from './TestimonialsCarousel';

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.header}>
          <p className={styles.badge}>Depoimentos</p>
          <h2 className={styles.title}>Clientes que precisavam de firmeza tecnica, discricao e uma condução juridica realmente proxima.</h2>
          <p className={styles.description}>A prova social mais importante para nos e simples: clareza estrategica, serenidade na condução e confianca durante todo o caso.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} viewport={{ once: true }}>
          <TestimonialsCarousel />
        </motion.div>
      </div>
    </section>
  );
}
