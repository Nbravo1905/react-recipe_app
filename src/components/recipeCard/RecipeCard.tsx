import styles from './RecipeCard.module.scss';

import startIcon from '../../assets/ic_star.svg';
import heartIcon from '../../assets/ic_heart.svg';
import platoIcon from '../../assets/plato.svg';
import tiempoIcon from '../../assets/time.svg';
import chefIcon from '../../assets/chef.svg';

interface RecipeProps {
  title: string;
  rating: number;
  imageUrl: string;
  isFavorite: boolean;
}
const RecipeCard: React.FC<RecipeProps> = ({ title, rating, imageUrl, isFavorite }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>

        <div className={styles.cardInfo}>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.footer}>
            <div className={styles.rating}>
              <img src={startIcon} className={styles.startIcon} alt="start_icon" />
              <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
            </div>

            <button
              className={styles.favoriteButton}
              aria-label="Toggle favorite"
            >
              <img src={heartIcon} alt="heart_icon" />
            </button>
          </div>
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.infoItem}>
            <img src={platoIcon} className={styles.infoIcon} alt="plato_icon" />
            <span className={styles.titleInfo}>Tamaño de la porción</span>
            <span className={styles.subtitleInfo}>4 raciones</span>
          </div>
          <div className={styles.infoItem}>
            <img src={tiempoIcon} className={styles.infoIcon} alt="tiempo_icon" />
            <span className={styles.titleInfo}>Tiempo de preparación</span>
            <span className={styles.subtitleInfo}>10 minutos</span>
          </div>
          <div className={styles.infoItem}>
            <img src={chefIcon} className={styles.infoIcon} alt="chef_icon" />
            <span className={styles.titleInfo}>Dificultad</span>
            <span className={styles.subtitleInfo}>fácil</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RecipeCard;