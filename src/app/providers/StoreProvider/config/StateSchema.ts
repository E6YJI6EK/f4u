import { IngredientSchema } from "@/entities/IngredientsList";
import { chatGPTResponseSchema } from "@/features/GenerateRecipes";

export interface StateSchema {
    ingredientsList: IngredientSchema;
    recipesList: chatGPTResponseSchema;
}