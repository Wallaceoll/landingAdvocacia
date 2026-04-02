import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AssetImage.module.css';

export default function AssetImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  children
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${styles.frame} ${className}`.trim()}>
      {!loaded && (
        <div className={styles.skeleton} aria-hidden="true">
          <div className={styles.skeletonGlow} />
        </div>
      )}

      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.03 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        onLoad={() => setLoaded(true)}
        className={`${styles.image} ${imgClassName}`.trim()}
      />

      {children ? <div className={styles.overlay}>{children}</div> : null}
    </div>
  );
}
