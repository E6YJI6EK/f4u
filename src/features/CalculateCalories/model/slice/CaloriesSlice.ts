import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { biometricDataSchema, caloriesSchema } from "../types/CaloriesSchema";
import { calculateBMR } from "../../lib/calculate/calculateBMR";
import { calculateProteins } from "../../lib/calculate/calculateProteins";
import { calculateFats } from "../../lib/calculate/calculateFats";
import { calculateHydrocarbones } from "../../lib/calculate/calculateHydrocarbones";

const initialState: caloriesSchema = {
    calories: 0,
    proteins: 0,
    fats: 0,
    hydro: 0
}

export const CaloriesSlice = createSlice(
    {
        name: 'calories',
        initialState,
        reducers: {
            calc: (state, action: PayloadAction<biometricDataSchema>) => {
                const {
                    gender,
                    weight,
                    height, 
                    age
                } = action.payload
                state.calories = calculateBMR(gender, weight, height, age);
                state.proteins = calculateProteins(weight);
                state.fats = calculateFats(state.calories);
                state.hydro = calculateHydrocarbones(state.calories, state.proteins, state.fats);
            },
        },
    }
)

export const { actions: CaloriesActions } = CaloriesSlice;
export const { reducer: CaloriesReducer } = CaloriesSlice;