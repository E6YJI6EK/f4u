export type measure = "шт."|"гр."|"мл."

export interface IngredientAmount {
    count: number
    measure: measure|undefined
}

export interface IngredientsListItem {
    name: string;
    amount: IngredientAmount
}

export interface IngredientSchema {
    ingredients: IngredientsListItem[]
}