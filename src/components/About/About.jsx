import { motion } from 'framer-motion';
import Carousel from './Carousel';
import AssetImage from '@/components/common/AssetImage';
import styles from './About.module.css';

const teamMembers = [
  { 
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80', 
    alt: 'Advogado em retrato corporativo formal', 
    name: 'Dr. José Hernandes', 
    role: 'Direito Trabalhista e casos de CLT', 
    note: 'Advogado com foco em causas trabalhistas, atuando em direitos previstos na CLT, rescisão, verbas, jornadas e defesa técnica de trabalhadores com comunicação clara e postura firme.' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80', 
    alt: 'Advogado em retrato corporativo com terno', 
    name: 'Dr. Caio Ferraz', 
    role: 'Empresarial e Societário', 
    note: 'Advogado com atuação em estrutura societária, contratos e negociações estratégicas, oferecendo suporte seguro para decisões empresariais, reorganizações e operações com alto impacto.' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80', 
    alt: 'Advogada corporativa com documentos no escritório', 
    name: 'Dra. Marina Leal', 
    role: 'Trabalhista e Consultivo', 
    note: 'Advogada com experiência em consultoria trabalhista, prevenção de passivos e orientação jurídica para empresas e executivos, com comunicação clara e condução técnica em temas sensíveis.' 
  }
];

const values = [
  { title: 'Leitura estratégica', text: 'Cada demanda é tratada com contexto, prioridade e avaliação realista de risco.' },
  { title: 'Comunicação clara', text: 'O cliente entende o que está acontecendo, por que cada passo importa e quais caminhos existem.' },
  { title: 'Atuação sofisticada', text: 'Nossa forma de trabalhar combina rigor técnico, discrição e boa condução relacional.' },
  { title: 'Proximidade operacional', text: 'Não entregamos apenas uma tese; acompanhamos a execução e os desdobramentos.' }
];

export default function About() {
  const handleTeamClick = () => {
    document.getElementById('team-carousel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.25 }} className={styles.textContent}>
            <span className={styles.badge}>Equipe e experiência</span>
            <h2 className={styles.title}>Advogados que pensam estrategicamente, escrevem com precisão e acompanham o caso de perto.</h2>
            <p className={styles.description}>Nosso escritório foi desenhado para atender clientes que precisam de profundidade técnica sem abrir mão de agilidade e boa comunicação. A equipe atua de forma coordenada para conectar tese, contexto de negócio e condução prática.</p>
            <p className={styles.description}>O resultado é uma experiência menos burocrática, mais clara e mais preparada para lidar com disputas, negociações e decisões jurídicas relevantes.</p>
            <button onClick={handleTeamClick} className={styles.cta}>Conhecer equipe</button>
          </motion.div>

          <motion.div id="team-carousel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} viewport={{ once: true, amount: 0.2 }} className={styles.imageContent}>
            <Carousel images={teamMembers} />
          </motion.div>
        </div>

        <div className={styles.secondaryContent}>
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.2 }} className={styles.imageContentSecondary}>
            <AssetImage src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Sala de reunião em escritório de advocacia" className={styles.secondaryImageFrame} imgClassName={styles.image} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.08 }} viewport={{ once: true, amount: 0.2 }} className={styles.textContentSecondary}>
            <h3 className={styles.subtitle}>Estrutura preparada para casos que exigem leitura fina e execução consistente</h3>
            <p className={styles.description}>Trabalhamos com fluxo enxuto, organização documental e acompanhamento próximo para que o cliente tenha clareza sobre prazos, risco e estratégia. O ambiente e a rotina do escritório refletem essa combinação de discrição, método e velocidade.</p>
            <ul className={styles.features}>
              <li>Atendimento consultivo e contencioso integrado</li>
              <li>Reuniões objetivas com foco em decisão</li>
              <li>Estruturação documental com rigor técnico</li>
              <li>Relação próxima com empresas, executivos e famílias</li>
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} viewport={{ once: true, amount: 0.15 }} className={styles.valuesSection}>
          <div className={styles.valuesHeader}>
            <span className={styles.badge}>Nossa forma de atuar</span>
            <h3 className={styles.subtitle}>Solidez jurídica com uma experiência menos padrão e muito mais inteligente.</h3>
          </div>
          <div className={styles.valuesList}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueItem}>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}