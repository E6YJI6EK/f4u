import { IngredientSchema } from "@/entities/IngredientsList";
import { caloriesSchema } from "@/features/CalculateCalories";
import { chatGPTResponseSchema } from "@/features/GenerateRecipes";

export interface StateSchema {
    ingredientsList: IngredientSchema;
    recipesList: chatGPTResponseSchema;
    calories: caloriesSchema
}