import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Zap } from 'lucide-react';
import styles from './ServiceModal.module.css';

export default function ServiceModal({ isOpen, onClose, service }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, service]);

  if (!service) return null;

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
                    <p className={styles.loadingText}>Carregando...</p>
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.header}>
                  <div className={styles.titleSection}>
                    <div className={styles.iconBox}>{service.icon}</div>
                    <div>
                      <h2 className={styles.title}>{service.title}</h2>
                      <p className={styles.subtitle}>{service.category}</p>
                    </div>
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
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Sobre o Serviço</h3>
                    <p className={styles.description}>{service.fullDescription}</p>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Benefícios Principais</h3>
                    <div className={styles.benefits}>
                      {service.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className={styles.benefitItem}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle size={20} className={styles.benefitIcon} />
                          <span>{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Como Funciona</h3>
                    <div className={styles.process}>
                      {service.process.map((step, index) => (
                        <motion.div
                          key={index}
                          className={styles.processStep}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className={styles.stepNumber}>{index + 1}</div>
                          <div className={styles.stepContent}>
                            <h4 className={styles.stepTitle}>{step.title}</h4>
                            <p className={styles.stepDesc}>{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {service.highlight && (
                    <motion.div
                      className={styles.highlight}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Zap size={20} />
                      <p>{service.highlight}</p>
                    </motion.div>
                  )}
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
                    Solicitar Consulta
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
