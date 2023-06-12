interface RecipeIngredientSchema {
    name: string;
    amount: string
}

interface RecipeSchema {
    name: string;
    ingredients: Array<RecipeIngredientSchema>;
    cpfc: {
        calories: number;
        proteins: number,
        fats: number,
        carbohydrates: number
    };
    pics: Array<string>
}

export interface chatGPTResponseSchema {
    recipes: Array<RecipeSchema>;
    isLoading: boolean;
    error?: string;
}