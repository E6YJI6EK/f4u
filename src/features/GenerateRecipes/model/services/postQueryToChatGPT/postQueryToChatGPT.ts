import { IngredientsListItem } from "@/entities/IngredientsList/model/types/ingredientSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { chatGPTResponseSchema } from "../../types/chatGPTResponseSchema";

interface postQueryToChatGPTProps {
    ingredients: IngredientsListItem[]
}

export const postQueryToChatGPT = createAsyncThunk<chatGPTResponseSchema, postQueryToChatGPTProps, {rejectValue:string}>(
    'generateRecipes/postQueryToChatGPT',
    async (payload, { rejectWithValue }) => {
        try {
            const promise = await axios.post("http://127.0.0.1:3000/chatgpt", payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!promise.data) {
                throw new Error();
            }
            return promise.data;
        }
        catch (e) {
            return rejectWithValue('Error');
        }

    }
)