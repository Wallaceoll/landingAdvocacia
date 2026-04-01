import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const contacts = [
    { icon: Phone, title: 'Telefone', value: '(11) 3000-0000', subtext: 'Seg-Sex, 9h-18h' },
    { icon: Mail, title: 'Email', value: 'contato@advocacia.com.br', subtext: 'Resposta em até 24h' },
    { icon: MapPin, title: 'Endereço', value: 'Av. Paulista, 1000', subtext: 'São Paulo - SP' },
    { icon: Clock, title: 'Horário', value: 'Segunda a Sexta', subtext: '9h00 - 18h00' }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.header}>
          <p className={styles.badge}>✨ Fale Conosco</p>
          <h2 className={styles.title}>Entre em Contato</h2>
          <p className={styles.description}>Tem uma dúvida ou precisa de consultoria jurídica? Entre em contato conosco e nossa equipe responderá em breve.</p>
        </motion.div>

        <div className={styles.contactGrid}>
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className={styles.contactCard}>
                <div className={styles.iconBox}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.contactTitle}>{contact.title}</h3>
                <p className={styles.contactValue}>{contact.value}</p>
                <p className={styles.contactSubtext}>{contact.subtext}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className={styles.formSection}>
          <h3 className={styles.formTitle}>Envie sua Mensagem</h3>
          <form className={styles.form}>
            <input type="text" placeholder="Seu nome" className={styles.input} required />
            <input type="email" placeholder="seu@email.com" className={styles.input} required />
            <input type="tel" placeholder="(11) 9999-9999" className={styles.input} required />
            <textarea placeholder="Sua mensagem..." rows="5" className={styles.textarea} required></textarea>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
