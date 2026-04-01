import { motion } from 'framer-motion';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    { title: 'Recuperação de Direitos Trabalhistas', result: 'R$ 2M+ recuperados', desc: 'Recuperamos direitos de 50+ funcionários em ação coletiva trabalhista.' },
    { title: 'Fusão e Aquisição Corporativa', result: '100% conformidade', desc: 'Assessoria jurídica completa em processo de M&A de empresa de tecnologia.' },
    { title: 'Defesa em Processo Criminal', result: 'Absolvição', desc: 'Defesa bem-sucedida em processo criminal complexo.' },
    { title: 'Resolução de Disputa Comercial', result: 'Acordo favorável', desc: 'Mediação entre empresas multinacionais evitando litígio custoso.' },
    { title: 'Consultoria em Compliance', result: 'Certificação obtida', desc: 'Implementação de programa completo de compliance regulatório.' },
    { title: 'Proteção de Propriedade Intelectual', result: '15+ jurisdições', desc: 'Registro e proteção de marcas e patentes para startup de tecnologia.' }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.header}>
          <p className={styles.badge}>✨ Nossos Projetos</p>
          <h2 className={styles.title}>Casos de Sucesso</h2>
          <p className={styles.description}>Conheça alguns dos nossos casos de sucesso e como ajudamos nossos clientes.</p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.desc}</p>
              <div className={styles.result}>
                <span className={styles.resultLabel}>Resultado</span>
                <span className={styles.resultValue}>{project.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
