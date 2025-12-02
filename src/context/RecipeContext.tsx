import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { recipeApi } from '../services/api';
import type { Recipe } from '../services/api';

interface RecipeContextType {
  recipes: Recipe[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipeContext must be used within RecipeProvider');
  }
  return context;
};

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const {
    data: recipes = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['recipes'],
    queryFn: () => recipeApi.getRandomRecipes(6),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  const value: RecipeContextType = {
    recipes,
    isLoading,
    error: error as Error | null,
    refetch,
  };

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
};

