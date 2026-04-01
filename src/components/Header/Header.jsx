import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Serviços', href: '#services' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={styles.logo}
          >
            <div className={styles.logoIcon}>
              <svg
                className={styles.logoSvg}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}>Advocacia</h1>
              <p className={styles.logoSubtitle}>Excelência Jurídica</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className={styles.navItem}
              >
                {item.label}
                <span className={styles.navUnderline}></span>
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className={styles.rightSection}>
            <a href="tel:+5511999999999" className={styles.phoneButton}>
              <Phone className={styles.phoneIcon} />
              <span className={styles.phoneText}>(11) 3000-0000</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.mobileMenuButton}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className={styles.mobileNavItem}
              >
                {item.label}
              </button>
            ))}
            <a href="tel:+5511999999999" className={styles.mobileCTA}>
              <Phone size={18} />
              Ligar Agora
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
