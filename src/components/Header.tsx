import React from 'react';
import Logo from '../assets/sana-logo-white.png';

interface HeaderLink {
  text: string;
  url: string;
}

interface HeaderProps {
  labName: string;
  navLinks: HeaderLink[];
}

const Header: React.FC<HeaderProps> = ({ labName, navLinks }) => {
  return (
    <header style={styles.header}>
      <div style={{display: 'flex', alignItems: 'center', height: '50px'}}>
        <div style={styles.logoContainer}>
            <img src={Logo} alt="Logo" style={styles.logo} />
        </div>
        <h1 style={styles.labName}>{labName}</h1>
      </div>
      <nav style={styles.nav}>
        {navLinks.map((link, index) => (
          <a key={index} href={link.url} style={styles.navLink}>
            {link.text}
          </a>
        ))}
      </nav>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#507dcc',
    borderBottom: '1px solid #dee2e6',
    color: 'white',
  },
  logoContainer: {
    scale: '0.5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labName: {
    fontSize: '1.8rem',
    fontWeight: 'normal',
    margin: '0',
    color: 'white',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
  },
};

export default Header;