import { StateSchema } from "@/app/providers/StoreProvider";

export const getRecipesState = (state: StateSchema) => {
    return state?.recipesList;
}