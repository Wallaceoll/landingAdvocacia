import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={styles.content}>
          <motion.p animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }} className={styles.badge}>✨ EXCELÊNCIA EM ADVOCACIA</motion.p>
          <h1 className={styles.title}>Sua Defesa é Nossa Missão</h1>
          <p className={styles.description}>Mais de 10 anos de experiência em direito civil, comercial e trabalhista. Representamos nossos clientes com dedicação, ética e excelência profissional.</p>
          <div className={styles.stats}>
            {[{ num: '+500', label: 'Causas Ganhas' }, { num: '+10', label: 'Anos' }, { num: '100%', label: 'Satisfação' }].map((stat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className={styles.stat}>
                <span className={styles.statNumber}>{stat.num}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
          <div className={styles.buttons}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleContactClick} className={styles.primaryButton}>
              Agendar Consulta <ArrowRight size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className={styles.secondaryButton}>
              Conhecer Serviços
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}