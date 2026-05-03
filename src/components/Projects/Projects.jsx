import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  { title: 'Disputa societária sensível', result: 'Acordo estruturado', desc: 'Condução estratégica para reduzir desgaste entre sócios e preservar a continuidade operacional.' },
  { title: 'Reestruturação contratual', result: 'Risco reduzido', desc: 'Revisão de instrumentos-chave para dar mais previsibilidade a uma operação em expansão.' },
  { title: 'Defesa trabalhista coordenada', result: 'Passivo controlado', desc: 'Atuação combinando linha técnica, negociação e reorganização documental.' },
  { title: 'Resposta em processo administrativo', result: 'Defesa robusta', desc: 'Estruturação de argumentos e documentos para proteger reputação e operação.' },
  { title: 'Consultoria para decisão patrimonial', result: 'Cenário jurídico claro', desc: 'Leitura preventiva para apoiar uma decisão importante com menos improviso.' },
  { title: 'Crise contratual empresarial', result: 'Saída viável', desc: 'Negociação com foco em continuidade de relação e menor impacto financeiro.' }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.header}>
          <p className={styles.badge}>Resultados reais</p>
          <h2 className={styles.title}>Casos conduzidos com critério técnico, leitura política e timing correto.</h2>
          <p className={styles.description}>Cada demanda tem sua particularidade, mas todas exigem a mesma combinação: estratégia, método e execução consistente.</p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: index * 0.07 }} viewport={{ once: true }} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.desc}</p>
              <div className={styles.result}>
                <span className={styles.resultValue}>{project.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}