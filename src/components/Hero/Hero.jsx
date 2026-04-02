import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AssetImage from '@/components/common/AssetImage';
import styles from './Hero.module.css';

const highlights = [
  'Atendimento estrategico e comunicacao objetiva',
  'Analise cuidadosa de riscos, prazos e caminhos possiveis',
  'Equipe integrada para contencioso, consultivo e negociacao'
];

export default function Hero() {
  const handleServicesClick = () => {
    const element = document.querySelector('#services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={styles.content}>
            <span className={styles.eyebrow}>Escritorio de advocacia boutique em Sao Paulo</span>
            <h1 className={styles.title}>Estrategia juridica solida para proteger patrimonio, operacoes e decisoes importantes.</h1>
            <p className={styles.description}>Atuamos com leitura precisa de contexto, argumentacao consistente e acompanhamento proximo para transformar demandas complexas em planos juridicos claros, elegantes e executaveis.</p>
            <div className={styles.list}>
              {highlights.map((item) => (
                <motion.div key={item} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className={styles.listItem}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} onClick={handleServicesClick} className={styles.primaryButton}>
              Conhecer Servicos <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.12 }} className={styles.visual}>
            <div className={styles.photoCard}>
              <AssetImage src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80" alt="Mesa de reuniao com documentos juridicos e advogados em discussao" className={styles.photoFrame} priority>
                <div className={styles.photoOverlay}></div>
              </AssetImage>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
