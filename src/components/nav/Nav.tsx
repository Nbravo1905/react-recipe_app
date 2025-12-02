import styles from './Nav.module.scss';

import homeIcon from '../../assets/ic_home.png';
const MENU: string[] = [
  'Home',
  'Vegetarianos',
  'Platos Principales',
  'Tortas',
  'Comida Rápida',
  'Menú Niños',
  'Sopas',
]

const Nav = () => {

  return (
    <header className={styles.navHeader}>

      <div className={styles.logo}>Recipe<span>App</span></div>

      <nav className={styles.navDestop}>
        <ul className={styles.navList}>
          {
            MENU.map((menu) => (
              <li key={menu}>
                <a href="#" className={styles.navLink}>{menu}</a>
              </li>
            ))
          }
        </ul>
      </nav>


      <img src={homeIcon} className={styles.homeIcon} alt="home_menu" />
    </header>
  )
}

export default Nav;