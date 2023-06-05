import { createSelector } from "@reduxjs/toolkit"
import { IngredientSchema } from "../../types/ingredientSchema"
import { getIngredientsList } from "../getIngredientsList/getIngredientsList"

export const getIngredients = createSelector(
    getIngredientsList,
    (ingredientsList: IngredientSchema) => ingredientsList.ingredients
)