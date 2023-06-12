import { IngredientsListItem } from "@/entities/IngredientsList/model/types/ingredientSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { chatGPTResponseSchema } from "../types/chatGPTResponseSchema";
import { postQueryToChatGPT } from "../services/postQueryToChatGPT/postQueryToChatGPT";

const initialState: chatGPTResponseSchema = {
    recipes: [],
    isLoading: false,
}



export const RecipesSlice = createSlice(
    {
        name: 'recipes',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(postQueryToChatGPT.pending, (state, action) => {
                    state.error = undefined;
                    state.isLoading = true;
                })
                .addCase(postQueryToChatGPT.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.recipes = action.payload.recipes;
                })
                .addCase(postQueryToChatGPT.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                })
        }
    }
)

export const { actions: RecipesActions } = RecipesSlice;
export const { reducer: RecipesReducer } = RecipesSlice;

