import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Carousel.module.css';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const resumeAutoPlay = () => {
    setTimeout(() => setAutoPlay(true), 3000);
  };

  return (
    <div className={styles.carousel} onMouseEnter={() => setAutoPlay(false)} onMouseLeave={resumeAutoPlay}>
      <div className={styles.carouselContainer}>
        <AnimatePresence mode="wait">
          <motion.img key={currentIndex} src={images[currentIndex].src} alt={images[currentIndex].alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className={styles.image} />
        </AnimatePresence>

        <button className={styles.prevButton} onClick={goToPrevious} aria-label="Imagem anterior">
          <ChevronLeft size={24} />
        </button>

        <button className={styles.nextButton} onClick={goToNext} aria-label="Próxima imagem">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <motion.button key={index} className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`} onClick={() => goToSlide(index)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} aria-label={`Ir para imagem ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
