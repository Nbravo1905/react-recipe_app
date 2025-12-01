import styles from './Footer.module.scss';
import productsImage from '../../assets/products.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.sponsorLabel}>Con el Patrocinio de</p>
      <img 
        src={productsImage}
        alt="Productos patrocinadores"
        className={styles.productsImage}
      />
    </footer>
  );
};

export default Footer;

