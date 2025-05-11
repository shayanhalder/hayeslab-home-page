import React from 'react';

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
      <div style={styles.logoContainer}>
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
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
  },
  logoContainer: {
    // If you have a logo image, you can add it here
  },
  labName: {
    fontSize: '1.8rem',
    margin: '0',
    color: '#333',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1rem',
    fontWeight: '500',
  },
};

export default Header;