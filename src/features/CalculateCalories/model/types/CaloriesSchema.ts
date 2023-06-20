export enum Gender {
    MALE = "Мужской",
    FEMALE = "Женский"
}

export interface biometricDataSchema {
    gender: "Мужской" | "Женский";
    weight: number;
    height: number;
    age: number
}

export interface caloriesSchema {
    calories: number;
    proteins: number;
    fats: number;
    hydro: number;
}