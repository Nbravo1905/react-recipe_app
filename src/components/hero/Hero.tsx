import styles from './Hero.module.scss';

import imgHero from '../../assets/banner.png';

import carrotMenu from '../../assets/carrots.svg';
import serviceMenu from '../../assets/service.svg';
import tortaMenu from '../../assets/torta.svg';
import fastfoodMenu from '../../assets/fast-food.svg';
import bebesMenu from '../../assets/bebes.svg';
import waterMenu from '../../assets/water.svg';

const MENU: {name: string, icon: string}[] = [
  {name: 'Vegetarianos', icon: carrotMenu},
  {name: 'Principales', icon: serviceMenu},
  {name: 'Tortas', icon: tortaMenu},
  {name: 'Rápida', icon: fastfoodMenu},
  {name: 'Menú Niños', icon: bebesMenu},
  {name: 'Sopas', icon: waterMenu},
]

const Hero = () => {

  return (
    <section className={styles.heroContainer}>

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

      <div className={styles.tabletMenu}>
        {
          MENU.map((itemMenu) => (
            <div className={styles.cardTabletMenu}>
              <img src={itemMenu.icon} className={styles.iconTabletMenu} alt="carrot" />
              <span className={styles.textTabletMenu}>{itemMenu.name}</span>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Hero;