import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const contacts = [
    { icon: Phone, title: 'Telefone', value: '(11) 3000-0000', subtext: 'Seg a Sex, 9h as 18h' },
    { icon: Mail, title: 'Email', value: 'contato@barroseferraz.com.br', subtext: 'Resposta em horario comercial' },
    { icon: MapPin, title: 'Endereco', value: 'Av. Paulista, 1000', subtext: 'Sao Paulo - SP' },
    { icon: Clock, title: 'Disponibilidade', value: 'Atendimento agendado', subtext: 'Reunioes presenciais e online' }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.header}>
          <p className={styles.badge}>Contato</p>
          <h2 className={styles.title}>Converse com a equipe e entenda qual estrategia juridica faz mais sentido para o seu caso.</h2>
          <p className={styles.description}>Se voce precisa de consultoria, contencioso ou uma segunda opiniao bem estruturada, nosso time responde com clareza e objetividade.</p>
        </motion.div>

        <div className={styles.contactGrid}>
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div key={contact.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.08 }} viewport={{ once: true }} className={styles.contactCard}>
                <div className={styles.iconBox}><Icon className={styles.icon} /></div>
                <h3 className={styles.contactTitle}>{contact.title}</h3>
                <p className={styles.contactValue}>{contact.value}</p>
                <p className={styles.contactSubtext}>{contact.subtext}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className={styles.formSection}>
          <h3 className={styles.formTitle}>Solicitar retorno</h3>
          <form className={styles.form}>
            <input type="text" placeholder="Seu nome" className={styles.input} required />
            <input type="email" placeholder="seu@email.com" className={styles.input} required />
            <input type="tel" placeholder="(11) 99999-9999" className={styles.input} required />
            <textarea placeholder="Descreva brevemente a sua necessidade juridica." rows="5" className={styles.textarea} required></textarea>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className={styles.submitButton}>Solicitar retorno</motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

