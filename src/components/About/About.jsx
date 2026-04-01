import { motion } from 'framer-motion';
import Carousel from './Carousel';
import styles from './About.module.css';

export default function About() {
  const handleTeamClick = () => {
    const teamSection = document.getElementById('team-carousel');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const carouselImages = [
    { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/L9xfrHKTNcD2XFySZuX8mm/team-advocacia-mCET8Ecto4aFuexHx5uQG7.webp', alt: 'Equipe de advogados profissionais' },
    { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/L9xfrHKTNcD2XFySZuX8mm/team-advocacia-2-nSM3s5Fdt39zN6UdTWEuCe.webp', alt: 'Equipe diversa de especialistas jurídicos' }
  ];
  const officeImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/L9xfrHKTNcD2XFySZuX8mm/office-advocacia-DyGhrBj8kKFRfELSf3ZEWS.webp';
  const valuesImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/L9xfrHKTNcD2XFySZuX8mm/values-advocacia-eHkCKCgKfST6JRf54qdFp5.webp';

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Seção Principal - Texto + Equipe */}
        <div className={styles.content}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.textContent}>
            <p className={styles.badge}>✨ Sobre Nós</p>
            <h2 className={styles.title}>Excelência e Dedicação</h2>
            <p className={styles.description}>Nosso escritório foi fundado com a missão de oferecer consultoria jurídica de excelência, combinando experiência profunda com inovação nas práticas legais.</p>
            <p className={styles.description}>Acreditamos que a justiça é um direito fundamental e nos dedicamos a defender os interesses de nossos clientes com ética, profissionalismo e excelência.</p>
            <motion.button onClick={handleTeamClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.cta}>Conheça Nossa Equipe</motion.button>
          </motion.div>
          <motion.div id="team-carousel" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.imageContent}>
            <Carousel images={carouselImages} />
          </motion.div>
        </div>

        {/* Seção Secundária - Escritório */}
        <div className={styles.secondaryContent}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className={styles.imageContentSecondary}>
            <img src={officeImage} alt="Escritório moderno com vista da cidade" className={styles.image} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className={styles.textContentSecondary}>
            <h3 className={styles.subtitle}>Infraestrutura de Classe Mundial</h3>
            <p className={styles.description}>Nosso escritório conta com infraestrutura moderna, salas de conferência equipadas com tecnologia de ponta e um ambiente que reflete nosso compromisso com a excelência.</p>
            <ul className={styles.features}>
              <li>Escritórios em localização estratégica</li>
              <li>Salas de conferência de última geração</li>
              <li>Equipe multidisciplinar especializada</li>
              <li>Atendimento personalizado 24/7</li>
            </ul>
          </motion.div>
        </div>

        {/* Seção Valores */}
        <div className={styles.valuesSection}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className={styles.valuesContent}>
            <img src={valuesImage} alt="Valores: Justiça, Proteção e Parceria" className={styles.valuesImage} />
            <div className={styles.valuesText}>
              <h3 className={styles.subtitle}>Nossos Valores Fundamentais</h3>
              <div className={styles.valuesList}>
                <div className={styles.valueItem}>
                  <span className={styles.valueIcon}>⚖️</span>
                  <div>
                    <h4>Justiça</h4>
                    <p>Comprometidos com a justiça e o estado de direito</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueIcon}>🛡️</span>
                  <div>
                    <h4>Proteção</h4>
                    <p>Defendemos os direitos e interesses de nossos clientes</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueIcon}>🤝</span>
                  <div>
                    <h4>Parceria</h4>
                    <p>Trabalhamos em conjunto para alcançar os melhores resultados</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueIcon}>💡</span>
                  <div>
                    <h4>Inovação</h4>
                    <p>Aplicamos soluções criativas e atualizadas para cada desafio jurídico</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
