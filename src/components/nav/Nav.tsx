import styles from './Nav.module.scss';

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

      <div className={styles.logo}>RecipeApp</div>

      <nav>
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
    </header>
  )
}

export default Nav;