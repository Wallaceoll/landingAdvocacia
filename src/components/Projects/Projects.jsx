import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  { title: 'Disputa societaria sensivel', result: 'Acordo estruturado', desc: 'Conducao estrategica para reduzir desgaste entre socios e preservar continuidade operacional.' },
  { title: 'Reestruturacao contratual', result: 'Risco reduzido', desc: 'Revisao de instrumentos-chave para dar mais previsibilidade a uma operacao em expansao.' },
  { title: 'Defesa trabalhista coordenada', result: 'Passivo controlado', desc: 'Atuacao combinando linha tecnica, negociacao e reorganizacao documental.' },
  { title: 'Resposta em processo administrativo', result: 'Defesa robusta', desc: 'Estruturacao de argumentos e documentos para proteger reputacao e operacao.' },
  { title: 'Consultoria para decisao patrimonial', result: 'Cenario juridico claro', desc: 'Leitura preventiva para apoiar uma decisao importante com menos improviso.' },
  { title: 'Crise contratual empresarial', result: 'Saida viavel', desc: 'Negociacao com foco em continuidade de relacao e menor impacto financeiro.' }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.header}>
          <p className={styles.badge}>Resultados reais</p>
          <h2 className={styles.title}>Casos conduzidos com criterio tecnico, leitura politica e timing correto.</h2>
          <p className={styles.description}>Cada demanda tem sua particularidade, mas todas exigem a mesma combinacao: estratega, metodo e execucao consistente.</p>
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
