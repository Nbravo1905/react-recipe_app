import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY || '';
const BASE_URL = 'https://api.spoonacular.com/recipes';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  likes?: number;
  readyInMinutes?: number;
  servings?: number;
  aggregateLikes?: number;
  healthScore?: number;
}

export interface RecipesResponse {
  recipes: Recipe[];
  totalResults: number;
}

export const recipeApi = {
  // Obtener recetas aleatorias
  getRandomRecipes: async (number: number = 4): Promise<Recipe[]> => {
    const response = await apiClient.get('/random', {
      params: {
        number,
        addRecipeInformation: true,
      },
    });
    console.log(response);
    return Array.isArray(response.data) ? response.data : (response.data.recipes || []);
  },
};

