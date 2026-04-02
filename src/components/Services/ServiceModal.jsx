import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import styles from './ServiceModal.module.css';

export default function ServiceModal({ isOpen, onClose, service }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 450);

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button type="button" aria-label="Fechar modal" className={styles.backdrop} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />

          <div className={styles.modalWrapper}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="service-modal-title" className={styles.modal} initial={{ opacity: 0, y: 28, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }} transition={{ duration: 0.32, ease: 'easeOut' }}>
              {isLoading && (
                <div className={styles.loadingOverlay} aria-hidden="true">
                  <div className={styles.loadingBlocks}>
                    <span className={styles.loadingLine}></span>
                    <span className={styles.loadingLine}></span>
                    <span className={styles.loadingLineShort}></span>
                  </div>
                </div>
              )}

              <div className={styles.header}>
                <div className={styles.titleSection}>
                  <div className={styles.iconBox}>{service.icon}</div>
                  <div>
                    <p className={styles.subtitle}>{service.category}</p>
                    <h2 id="service-modal-title" className={styles.title}>{service.title}</h2>
                  </div>
                </div>
                <button className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
                  <X size={22} />
                </button>
              </div>

              <div className={styles.content}>
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>Sobre o tratamento</h3>
                  <p className={styles.description}>{service.fullDescription}</p>
                </section>

                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>O que voce ganha</h3>
                  <div className={styles.benefits}>
                    {service.benefits.map((benefit, index) => (
                      <motion.div key={benefit} className={styles.benefitItem} initial={{ opacity: 0, x: -14 }} animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? -14 : 0 }} transition={{ duration: 0.28, delay: index * 0.05 }}>
                        <CheckCircle size={18} className={styles.benefitIcon} />
                        <span>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </section>

                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>Etapas</h3>
                  <div className={styles.process}>
                    {service.process.map((step, index) => (
                      <motion.div key={step.title} className={styles.processStep} initial={{ opacity: 0, y: 12 }} animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 12 : 0 }} transition={{ duration: 0.28, delay: index * 0.06 }}>
                        <div className={styles.stepNumber}>{index + 1}</div>
                        <div className={styles.stepContent}>
                          <h4 className={styles.stepTitle}>{step.title}</h4>
                          <p className={styles.stepDesc}>{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {service.highlight && (
                  <div className={styles.highlight}>
                    <Sparkles size={18} />
                    <p>{service.highlight}</p>
                  </div>
                )}
              </div>

              <div className={styles.footer}>
                <button className={styles.ctaButton} onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); onClose(); }}>
                  Solicitar consulta
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

