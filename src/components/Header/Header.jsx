import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Servicos', href: '#services' },
    { label: 'Resultados', href: '#projects' },
    { label: 'Equipe', href: '#about' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <a href="#hero" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg className={styles.logoSvg} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.75 4.5 5.5v5.25c0 4.54 3.07 8.75 7.5 10.5 4.43-1.75 7.5-5.96 7.5-10.5V5.5L12 2.75Zm0 3.2 4.5 1.65v3.15c0 3.09-1.95 6.18-4.5 7.52-2.55-1.34-4.5-4.43-4.5-7.52V7.6L12 5.95Z" />
              </svg>
            </div>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}>Advocacia Premium</h1>
              <p className={styles.logoSubtitle}>Estrategia juridica</p>
            </div>
          </a>

          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <button key={item.href} onClick={() => handleNavClick(item.href)} className={styles.navItem}>
                {item.label}
                <span className={styles.navUnderline}></span>
              </button>
            ))}
          </nav>

          <div className={styles.rightSection}>
            <a href="tel:+5511999999999" className={styles.phoneButton}>
              <Phone className={styles.phoneIcon} />
              <span className={styles.phoneText}>(11) 3000-0000</span>
            </a>

            <button onClick={() => setIsMenuOpen((current) => !current)} className={styles.mobileMenuButton} aria-label="Abrir menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <button key={item.href} onClick={() => handleNavClick(item.href)} className={styles.mobileNavItem}>{item.label}</button>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className={styles.mobileCTA}>
              <Phone size={18} />
              Falar com a equipe
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
