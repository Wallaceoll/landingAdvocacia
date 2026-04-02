import { motion } from 'framer-motion';
import Carousel from './Carousel';
import AssetImage from '@/components/common/AssetImage';
import styles from './About.module.css';

const teamMembers = [
  { src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80', alt: 'Advogada em escritorio moderno', name: 'Dra. Helena Barros', role: 'Contencioso civel e contratos', note: 'Conduz disputas patrimoniais com argumentacao precisa e comunicacao objetiva.' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80', alt: 'Advogado em retrato corporativo', name: 'Dr. Caio Ferraz', role: 'Empresarial e societario', note: 'Atua em operacoes sensiveis com foco em risco, governanca e negociacao.' },
  { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80', alt: 'Advogada analisando documentos', name: 'Dra. Marina Leal', role: 'Trabalhista e consultivo', note: 'Traduz temas complexos em orientacoes claras para empresas e executivos.' }
];

const values = [
  { title: 'Leitura estrategica', text: 'Cada demanda e tratada com contexto, prioridade e avaliacao realista de risco.' },
  { title: 'Comunicacao clara', text: 'O cliente entende o que esta acontecendo, por que cada passo importa e quais caminhos existem.' },
  { title: 'Atuacao sofisticada', text: 'Nossa forma de trabalhar combina rigor tecnico, discricao e boa condução relacional.' },
  { title: 'Proximidade operacional', text: 'Nao entregamos apenas uma tese; acompanhamos a execucao e os desdobramentos.' }
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
            <span className={styles.badge}>Equipe e experiencia</span>
            <h2 className={styles.title}>Advogados que pensam estrategicamente, escrevem com precisao e acompanham o caso de perto.</h2>
            <p className={styles.description}>Nosso escritorio foi desenhado para atender clientes que precisam de profundidade tecnica sem abrir mao de agilidade e boa comunicacao. A equipe atua de forma coordenada para conectar tese, contexto de negocio e conducao pratica.</p>
            <p className={styles.description}>O resultado e uma experiencia menos burocratica, mais clara e mais preparada para lidar com disputas, negociacoes e decisoes juridicas relevantes.</p>
            <button onClick={handleTeamClick} className={styles.cta}>Conhecer equipe</button>
          </motion.div>

          <motion.div id="team-carousel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} viewport={{ once: true, amount: 0.2 }} className={styles.imageContent}>
            <Carousel images={teamMembers} />
          </motion.div>
        </div>

        <div className={styles.secondaryContent}>
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.2 }} className={styles.imageContentSecondary}>
            <AssetImage src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Sala de reuniao em escritorio de advocacia" className={styles.secondaryImageFrame} imgClassName={styles.image} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.08 }} viewport={{ once: true, amount: 0.2 }} className={styles.textContentSecondary}>
            <h3 className={styles.subtitle}>Estrutura preparada para casos que exigem leitura fina e execucao consistente</h3>
            <p className={styles.description}>Trabalhamos com fluxo enxuto, organizacao documental e acompanhamento proximo para que o cliente tenha clareza sobre prazos, risco e estrategia. O ambiente e a rotina do escritorio refletem essa combinacao de discricao, metodo e velocidade.</p>
            <ul className={styles.features}>
              <li>Atendimento consultivo e contencioso integrado</li>
              <li>Reunioes objetivas com foco em decisao</li>
              <li>Estruturacao documental com rigor tecnico</li>
              <li>Relacao proxima com empresas, executivos e familias</li>
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} viewport={{ once: true, amount: 0.15 }} className={styles.valuesSection}>
          <div className={styles.valuesHeader}>
            <span className={styles.badge}>Nossa forma de atuar</span>
            <h3 className={styles.subtitle}>Solidez juridica com uma experiencia menos padrao e muito mais inteligente.</h3>
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
