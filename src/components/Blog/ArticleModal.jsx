import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, User } from 'lucide-react';
import styles from './ArticleModal.module.css';

export default function ArticleModal({ isOpen, onClose, article }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, article]);

  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className={styles.modalWrapper}>
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {isLoading && (
                <motion.div
                  className={styles.loadingOverlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.loadingSpinner}>
                    <motion.div
                      className={styles.spinnerRing}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                    <p className={styles.loadingText}>Carregando artigo...</p>
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.header}>
                  <div
                    className={styles.categoryBadge}
                    style={{ backgroundColor: article.categoryColor }}
                  >
                    {article.category}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Fechar modal"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className={styles.content}>
                  <h2 className={styles.title}>{article.title}</h2>

                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      <span>{article.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock size={16} />
                      <span>{article.readTime}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <User size={16} />
                      <span>Por {article.author}</span>
                    </div>
                  </div>

                  <div className={styles.excerpt}>
                    <p>{article.excerpt}</p>
                  </div>

                  <div className={styles.fullContent}>
                    <p>{article.fullContent}</p>
                  </div>

                  <div className={styles.highlights}>
                    <h4>Pontos-chave:</h4>
                    <ul>
                      {article.highlights?.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.footer}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.ctaButton}
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                        onClose();
                      }
                    }}
                  >
                    Solicitar Consultoria
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
