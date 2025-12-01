import RecipeCard from '../../components/recipeCard/RecipeCard';
import styles from './NewRecipes.module.scss';
import { useRecipeContext } from '../../context/RecipeContext';

const NewRecipes = () => {
  const { recipes, isLoading, error } = useRecipeContext();

  return (
    <section className={styles.recipesSection}>
      <h2 className={styles.sectionTitle}>Nuevas Recetas</h2>

      {isLoading && (
        <h2 className={styles.loadingText}>Cargando recetas...</h2>
      )}

      {error && (
        <h3 className={styles.errorText}>Error al cargar las recetas: {error.message}</h3>
      )}

      <div className={styles.recipesList}>
        {recipes.slice(0, 4).map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              imageUrl={recipe.image || ''}
              rating={recipe.aggregateLikes || recipe.likes || 0}
              servings={recipe.servings}
              readyInMinutes={recipe.readyInMinutes}
            />
          );
        })}
      </div>
    </section>
  )
}


export default NewRecipes;