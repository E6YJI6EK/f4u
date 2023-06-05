import { IngredientReducer } from "@/entities/IngredientsList";
import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
   return configureStore<StateSchema>({
    reducer: {
      ingredientsList: IngredientReducer 
    },
    preloadedState: initialState
   }) 
}