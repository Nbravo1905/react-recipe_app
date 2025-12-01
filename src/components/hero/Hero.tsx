import styles from './Hero.module.scss';
import imgHero from '../../assets/banner.png';

const Hero = () => {

  return (
    <div className={styles.heroContainer}>

      <img 
        src={imgHero}
        alt='Waffles'
        className={styles.heroImage}
      />

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Recetas 
          <span className={styles.heroSubtitle}>para todos</span>
        </h1>
      </div>

    </div>
  )
}

export default Hero;