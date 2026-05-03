import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import styles from './TestimonialsCarousel.module.css';

const testimonials = [
  { 
    id: 1, 
    name: 'Carla M.', 
    profession: 'Executiva', 
    text: 'Precisava de uma leitura rápida e muito segura para uma decisão delicada. O escritório trouxe clareza, estratégia e tranquilidade.', 
    rating: 5, 
    avatar: 'CM' 
  },
  { 
    id: 2, 
    name: 'Rodrigo A.', 
    profession: 'Empresário', 
    text: 'Gostei da forma objetiva como tudo foi conduzido. Sem discurso vazio, com orientação técnica e acompanhamento de verdade.', 
    rating: 5, 
    avatar: 'RA' 
  },
  { 
    id: 3, 
    name: 'Fernanda L.', 
    profession: 'Diretora Financeira', 
    text: 'A equipe soube equilibrar firmeza jurídica e sensibilidade negocial. Foi exatamente o que a situação pedia.', 
    rating: 5, 
    avatar: 'FL' 
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (nextDirection) => {
    setDirection(nextDirection);
    setCurrentIndex((prevIndex) => (prevIndex + nextDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div 
            key={testimonials[currentIndex].id} 
            custom={direction} 
            initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }} 
            transition={{ duration: 0.45 }} 
            className={styles.slide}
          >
            <div className={styles.testimonialCard}>
              <div className={styles.header}>
                <div className={styles.avatar}>{testimonials[currentIndex].avatar}</div>
                <div className={styles.info}>
                  <h4 className={styles.name}>{testimonials[currentIndex].name}</h4>
                  <p className={styles.profession}>{testimonials[currentIndex].profession}</p>
                </div>
              </div>

              <div className={styles.rating}>
                {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className={styles.text}>"{testimonials[currentIndex].text}"</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className={styles.navButton} onClick={() => paginate(-1)} aria-label="Anterior">
          <ChevronLeft size={22} />
        </button>
        <button className={styles.navButton} onClick={() => paginate(1)} aria-label="Próximo">
          <ChevronRight size={22} />
        </button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((item, index) => (
          <button 
            key={item.id} 
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`} 
            onClick={() => setCurrentIndex(index)} 
            aria-label={`Ir para depoimento ${index + 1}`} 
          />
        ))}
      </div>
    </div>
  );
}