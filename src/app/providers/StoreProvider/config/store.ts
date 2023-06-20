import { IngredientReducer } from "@/entities/IngredientsList";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { RecipesReducer } from "@/features/GenerateRecipes";
import thunkMiddleware from 'redux-thunk';
import { useDispatch } from "react-redux";
import { CaloriesReducer } from "@/features/CalculateCalories";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ingredientsList: IngredientReducer,
    calories: CaloriesReducer,
    recipesList: RecipesReducer,
  }
   return configureStore<StateSchema>({
    reducer: rootReducers,
    middleware: [thunkMiddleware],
    preloadedState: initialState,
   }) 
}

export const store = createReduxStore() 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();