import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import ArticleModal from './ArticleModal';
import styles from './Blog.module.css';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
  };

  const articles = [
    {
      id: 1,
      title: 'Direitos do Consumidor: Tudo o que Você Precisa Saber',
      excerpt: 'Conheça seus direitos como consumidor e como protegê-los.',
      fullContent: 'O Código de Defesa do Consumidor garante diversos direitos fundamentais. Você tem direito a informações claras sobre produtos e serviços, proteção contra práticas abusivas, e indenização por danos causados.',
      category: 'Direito Civil',
      categoryColor: '#c9a961',
      date: '15 de Março, 2024',
      readTime: '5 min de leitura',
      author: 'Dr. João Silva',
      slug: 'direitos-consumidor',
      highlights: [
        'Direito à informação clara e precisa',
        'Proteção contra práticas enganosas',
        'Direito de arrependimento em compras online',
        'Indenização por danos materiais e morais'
      ]
    },
    {
      id: 2,
      title: 'Reforma Trabalhista: Mudanças Importantes para Empregados',
      excerpt: 'Entenda as principais mudanças na legislação trabalhista e seus impactos.',
      fullContent: 'A reforma trabalhista trouxe mudanças significativas. Agora é permitido o trabalho intermitente, teletrabalho, e novas regras sobre rescisão. Porém, seus direitos fundamentais continuam protegidos pela CLT.',
      category: 'Direito Trabalhista',
      categoryColor: '#1a3a52',
      date: '12 de Março, 2024',
      readTime: '7 min de leitura',
      author: 'Dra. Maria Santos',
      slug: 'reforma-trabalhista',
      highlights: [
        'Trabalho intermitente regulamentado',
        'Teletrabalho com direitos garantidos',
        'Novas regras de rescisão',
        'Proteção contra demissão imotivada'
      ]
    },
    {
      id: 3,
      title: 'Planejamento Sucessório: Proteja o Futuro da Sua Família',
      excerpt: 'Saiba como fazer um planejamento sucessório adequado para sua família.',
      fullContent: 'O planejamento sucessório permite que você defina como seus bens serão distribuídos após sua morte. Através de testamentos, doações e outras estratégias legais, você protege sua família e evita conflitos.',
      category: 'Direito Civil',
      categoryColor: '#c9a961',
      date: '8 de Março, 2024',
      readTime: '6 min de leitura',
      author: 'Dr. Carlos Oliveira',
      slug: 'planejamento-sucessorio',
      highlights: [
        'Testamento válido e reconhecido',
        'Doações estratégicas em vida',
        'Proteção de bens para herdeiros',
        'Redução de impostos sucessórios'
      ]
    },
    {
      id: 4,
      title: 'Compliance Empresarial: Por que sua Empresa Precisa',
      excerpt: 'Descubra a importância de implementar compliance em sua empresa.',
      fullContent: 'Compliance é essencial para empresas modernas. Envolve políticas, procedimentos e monitoramento para garantir conformidade com leis e regulações. Reduz riscos legais, melhora a reputação e atrai investidores.',
      category: 'Consultoria',
      categoryColor: '#4d6a7f',
      date: '5 de Março, 2024',
      readTime: '8 min de leitura',
      author: 'Dra. Ana Costa',
      slug: 'compliance-empresarial',
      highlights: [
        'Conformidade com regulações legais',
        'Proteção contra fraudes internas',
        'Melhora na reputação corporativa',
        'Atração de investidores institucionais'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Direito Civil': '#c9a961',
      'Direito Trabalhista': '#1a3a52',
      'Consultoria': '#4d6a7f',
      'Direito Comercial': '#2d5a7a'
    };
    return colors[category] || '#c9a961';
  };

  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <p className={styles.badge}>✨ Artigos Recentes</p>
          <h2 className={styles.title}>Blog do Escritório</h2>
          <p className={styles.subtitle}>
            Mantenha-se informado com artigos sobre direito, legislação e dicas práticas para proteger seus direitos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.articlesGrid}
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className={styles.articleCard}
            >
              <div className={styles.cardHeader}>
                <span
                  className={styles.category}
                  style={{ backgroundColor: getCategoryColor(article.category) }}
                >
                  {article.category}
                </span>
              </div>

              <h3 className={styles.articleTitle}>{article.title}</h3>

              <p className={styles.articleExcerpt}>{article.excerpt}</p>

              <div className={styles.articleMeta}>
                <div className={styles.metaItem}>
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={16} />
                  <span>{article.readTime} de leitura</span>
                </div>
              </div>

              <motion.button
                onClick={() => handleArticleClick(article)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={styles.readMore}
              >
                Ler Artigo →
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <ArticleModal isOpen={isModalOpen} onClose={handleCloseModal} article={selectedArticle} />
    </section>
  );
}
