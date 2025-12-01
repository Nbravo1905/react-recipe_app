import styles from './RecipeCard.module.scss';

import startIcon from '../../assets/ic_star.svg';
import heartIcon from '../../assets/ic_heart.svg';

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
    </div>
  );
};


export default RecipeCard;