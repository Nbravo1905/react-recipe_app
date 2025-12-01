import RecipeCard from '../../components/recipeCard/RecipeCard';
import styles from './NewRecipes.module.scss';

import imgExample from '../../assets/ic_cola_chicken.png';

const NewRecipes = () => {

  return (
    <section className={styles.recipesSection}>
      <h2 className={styles.sectionTitle}>Nuevas Recetas</h2>

      <RecipeCard
        title='Ojingeo Muchim'
        imageUrl={imgExample}
        isFavorite
        rating={6.7}
        key={2}
      />
    </section>
  )
}


export default NewRecipes;