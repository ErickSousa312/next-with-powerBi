import styles from '../styles/components/Footer.module.css';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Twitter', url: 'https://www.twitter.com' },
    { name: 'Instagram', url: 'https://www.instagram.com' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>We are a company that specializes in providing high quality products and services to our customers.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>1234 Main St</p>
          <p>Anytown, USA</p>
          <p>Phone: (555) 555-1234</p>
          <p>Email: info@company.com</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <ul className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
