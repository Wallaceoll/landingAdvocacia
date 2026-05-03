import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Como funciona a primeira consulta?',
      a: 'A primeira consulta é realizada presencialmente ou online. Nela, analisamos seu caso em detalhes, entendemos seus objetivos e apresentamos as melhores estratégias jurídicas adaptadas à sua situação específica.',
      icon: '📞'
    },
    {
      q: 'Qual é o valor dos honorários?',
      a: 'Os honorários são definidos conforme a complexidade do caso e a forma de contratação: honorários fixos (valor predeterminado), honorários variáveis (baseados em horas) ou contingência (percentual sobre o resultado).',
      icon: '💰'
    },
    {
      q: 'Quanto tempo leva um processo?',
      a: 'O tempo varia conforme o tipo de processo jurídico. Demandas simples podem levar meses, enquanto processos complexos podem levar anos. Mantemos você informado em todas as etapas.',
      icon: '⏱️'
    },
    {
      q: 'Vocês atuam em qual região?',
      a: 'Atuamos em todo o Brasil através de nossa rede de parceiros estratégicos. Também temos experiência em questões internacionais, especialmente em Direito Comercial e Propriedade Intelectual.',
      icon: '🗺️'
    },
    {
      q: 'Qual é a taxa de sucesso?',
      a: 'Temos um histórico de excelentes resultados para nossos clientes. Cada caso é tratado com máxima dedicação e profissionalismo para alcançar o melhor desfecho possível dentro das normas éticas da OAB.',
      icon: '✅'
    },
    {
      q: 'Como agendar uma consulta?',
      a: 'Você pode agendar de forma fácil através de três canais: WhatsApp (clique no botão flutuante), telefone (11) 3000-0000 ou preenchendo o formulário de contato em nosso site. Responderemos em até 24 horas.',
      icon: '📅'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <p className={styles.badge}>✨ Perguntas Frequentes</p>
          <h2 className={styles.title}>Dúvidas Comuns</h2>
          <p className={styles.description}>Encontre respostas para as perguntas mais frequentes sobre nossos serviços jurídicos.</p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={styles.faqItem}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`${styles.faqQuestion} ${openIndex === index ? styles.faqQuestionOpen : ''}`}
                aria-expanded={openIndex === index}
              >
                <div className={styles.questionContent}>
                  <span className={styles.questionIcon}>{faq.icon}</span>
                  <span className={styles.questionText}>{faq.q}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.chevronWrapper}
                >
                  <ChevronDown size={20} className={styles.icon} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.faqAnswer}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={styles.ctaSection}
        >
          <HelpCircle size={24} className={styles.ctaIcon} />
          <h3 className={styles.ctaTitle}>Não encontrou sua dúvida?</h3>
          <p className={styles.ctaText}>Entre em contato conosco. Nossa equipe está pronta para responder a todas as suas perguntas.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Fale Conosco
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}