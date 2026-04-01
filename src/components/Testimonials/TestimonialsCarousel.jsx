import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import styles from './TestimonialsCarousel.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Carlos Silva',
    profession: 'Empresário',
    text: 'Excelente atendimento e resultado excepcional. A equipe foi muito atenta aos detalhes do meu caso e conseguiu resolver tudo com eficiência.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: 'Dra. Marina Costa',
    profession: 'Médica',
    text: 'Profissionalismo impecável. O escritório demonstrou grande conhecimento jurídico e me orientou muito bem em todas as etapas.',
    rating: 5,
    avatar: '👩‍⚕️'
  },
  {
    id: 3,
    name: 'João Oliveira',
    profession: 'Consultor',
    text: 'Recomendo fortemente. Conseguiram resolver uma questão trabalhista complexa com eficiência e dedicação.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: 4,
    name: 'Ana Martins',
    profession: 'Advogada',
    text: 'Atendimento personalizado e dedicado. Senti-me segura e confiante durante todo o processo legal.',
    rating: 5,
    avatar: '👩‍⚖️'
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
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
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a961" color="#c9a961" />
                ))}
              </div>

              <p className={styles.text}>"{testimonials[currentIndex].text}"</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className={styles.navButton}
          onClick={() => paginate(-1)}
          aria-label="Depoimento anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className={styles.navButton}
          onClick={() => paginate(1)}
          aria-label="Próximo depoimento"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
