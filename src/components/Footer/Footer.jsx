import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Areas</h3>
            <ul className={styles.links}>
              <li><a href="#services">Direito Civil</a></li>
              <li><a href="#services">Empresarial</a></li>
              <li><a href="#services">Trabalhista</a></li>
              <li><a href="#services">Consultoria</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Escritorio</h3>
            <ul className={styles.links}>
              <li><a href="#about">Equipe</a></li>
              <li><a href="#projects">Resultados</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Atendimento</h3>
            <ul className={styles.links}>
              <li><a href="#contact">Solicitar retorno</a></li>
              <li><a href="#contact">Agendar reuniao</a></li>
              <li><a href="#contact">Atendimento online</a></li>
              <li><a href="#contact">Endereco</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Redes</h3>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
              <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
              <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
              <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className={styles.bottom}>
          <p>&copy; {currentYear} Barros & Ferraz Advocacia Estrategica. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
