import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AssetImage from '@/components/common/AssetImage';
import styles from './Carousel.module.css';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return undefined;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4800);
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

  const activeItem = images[currentIndex];

  return (
    <div className={styles.carousel} onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
      <div className={styles.carouselContainer}>
        <AnimatePresence mode="wait">
          <motion.div key={activeItem.src} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.45 }} className={styles.slide}>
            <AssetImage src={activeItem.src} alt={activeItem.alt} className={styles.imageFrame} imgClassName={styles.image}>
              <div className={styles.overlay}></div>
            </AssetImage>
            <div className={styles.infoCard}>
              <p className={styles.role}>{activeItem.role}</p>
              <h3 className={styles.name}>{activeItem.name}</h3>
              <p className={styles.note}>{activeItem.note}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className={styles.prevButton} onClick={goToPrevious} aria-label="Anterior">
          <ChevronLeft size={20} />
        </button>

        <button className={styles.nextButton} onClick={goToNext} aria-label="Proxima">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={styles.memberList}>
        {images.map((image, index) => (
          <button
            key={`${image.name}-card`}
            className={`${styles.memberButton} ${index === currentIndex ? styles.memberButtonActive : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              setAutoPlay(false);
            }}
            aria-label={`Ver perfil de ${image.name}`}
          >
            <span className={styles.memberName}>{image.name}</span>
            <span className={styles.memberRole}>{image.role}</span>
          </button>
        ))}
      </div>

      <div className={styles.dots}>
        {images.map((image, index) => (
          <button key={image.name} className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`} onClick={() => { setCurrentIndex(index); setAutoPlay(false); }} aria-label={`Ir para ${image.name}`} />
        ))}
      </div>
    </div>
  );
}
