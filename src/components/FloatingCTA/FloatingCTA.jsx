import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.floatingCTA}
    >
      <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className={styles.icon}>
        <MessageCircle size={24} />
      </motion.div>
    </motion.a>
  );
}
