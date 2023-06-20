import { StateSchema } from "@/app/providers/StoreProvider";

export const getCaloriesState = (state: StateSchema) => {
    return state?.calories;
}