import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IngredientSchema, IngredientsListItem } from "../types/ingredientSchema";

const initialState: IngredientSchema = {
    ingredients: []
}

export const IngredientSlice = createSlice(
    {
        name: 'ingredient',
        initialState,
        reducers: {
            addIngredient: (state, action: PayloadAction<IngredientsListItem>) => {
                let name: string = action.payload.name.toLowerCase();
                state.ingredients.push({
                    name: name,
                    amount: action.payload.amount
                })
            },
            editIngredient: (state, action: PayloadAction<IngredientsListItem>) => {
                let index = -1;
                for (let i = 0; i < state.ingredients.length; i++) {
                    if (state.ingredients[i].name === action.payload.name) {
                        index = i;
                        break;
                    }
                }
                if (index != -1) {
                    state.ingredients[index] = {
                        name: action.payload.name,
                        amount: action.payload.amount
                    }
                }
            },
            removeIngredient: (state, action: PayloadAction<IngredientsListItem>) => {
                let index = -1;
                for (let i = 0; i < state.ingredients.length; i++) {
                    if (state.ingredients[i].name === action.payload.name) {
                        index = i;
                        break;
                    }
                }
                if (index != -1) {
                    state.ingredients = [...state.ingredients.slice(0, index), ...state.ingredients.slice(index + 1)];
                }

            },
            removeAll: (state) => {
                state.ingredients = new Array(0)
            }
        },
    }
)

export const { actions: IngredientActions } = IngredientSlice;
export const { reducer: IngredientReducer } = IngredientSlice;

