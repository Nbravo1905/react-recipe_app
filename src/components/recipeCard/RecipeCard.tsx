import React from 'react';
import styles from './RecipeCard.module.scss';

import startIcon from '../../assets/ic_star.svg';
import heartIcon from '../../assets/ic_heart.svg';
import platoIcon from '../../assets/plato.svg';
import tiempoIcon from '../../assets/time.svg';
import chefIcon from '../../assets/chef.svg';
import imgDefault from '../../assets/Imagen_no_disponible.svg';

interface RecipeProps {
  title: string;
  rating: number;
  imageUrl: string;
  servings?: number;
  readyInMinutes?: number;
}
const RecipeCard: React.FC<RecipeProps> = ({ title, rating, imageUrl, servings, readyInMinutes }) => {

  const truncatedTitle = title.length > 13 ? title.substring(0, 13) + '...' : title;
  const isValidImage = imageUrl && imageUrl.trim() !== '';
  const [imageError, setImageError] = React.useState(false);
  const imageSrc = (!isValidImage || imageError) ? imgDefault : imageUrl;
  
  const getDifficulty = (minutes?: number): string => {
    if (!minutes) return 'Fácil';
    if (minutes < 30) return 'Fácil';
    if (minutes < 60) return 'Medio';
    return 'Difícil';
  };

  const getRating = (rating: number) => {
    let valueRating = rating / 5;
    if (valueRating < 1) {
      valueRating = 1;
    }
    return valueRating = Math.min(5, valueRating);
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.imageWrapper}>
          <img
            src={imageSrc} 
            alt={title} 
            className={styles.image}
            onError={() => setImageError(true)}
          />
        </div>

        <div className={styles.cardInfo}>
          <h3 className={styles.title}>{truncatedTitle}</h3>

          <div className={styles.footer}>
            <div className={styles.rating}>
              <img src={startIcon} className={styles.startIcon} alt="start_icon" />
              <span className={styles.ratingValue}>{getRating(rating)}</span>
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
            <span className={styles.subtitleInfo}>{servings || 4} {servings === 1 ? 'ración' : 'raciones'}</span>
          </div>
          <div className={styles.infoItem}>
            <img src={tiempoIcon} className={styles.infoIcon} alt="tiempo_icon" />
            <span className={styles.titleInfo}>Tiempo de preparación</span>
            <span className={styles.subtitleInfo}>{readyInMinutes || 10} minutos</span>
          </div>
          <div className={styles.infoItem}>
            <img src={chefIcon} className={styles.infoIcon} alt="chef_icon" />
            <span className={styles.titleInfo}>Dificultad</span>
            <span className={styles.subtitleInfo}>{getDifficulty(readyInMinutes)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RecipeCard;