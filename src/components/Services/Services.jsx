import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';
import { servicesData } from './servicesData.jsx';
import styles from './Services.module.css';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className={styles.header}
          >
            <p className={styles.badge}>✨ Nossas Áreas de Atuação</p>
            <h2 className={styles.title}>Serviços Jurídicos</h2>
            <p className={styles.description}>
              Oferecemos soluções jurídicas completas em diversas áreas do Direito, com profissionalismo e excelência.
            </p>
          </motion.div>

          <div className={styles.grid}>
            {servicesData.map((service, index) => {
              // Removido o componente Icon não utilizado para limpar o código
              return (
                <motion.div 
                  key={service.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  className={styles.card}
                >
                  <div className={styles.iconBox}>{service.icon}</div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <motion.button 
                    whileHover={{ x: 4 }} 
                    className={styles.learnMore} 
                    onClick={() => handleServiceClick(service)}
                  >
                    Saiba mais <span>→</span>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        service={selectedService} 
      />
    </>
  );
}