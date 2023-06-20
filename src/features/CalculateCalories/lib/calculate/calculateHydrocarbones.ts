export function calculateHydrocarbones(calories: number, proteins: number, fats: number): number {
    let restCalories = calories - (proteins * 4) - (fats * 9);
    return Math.round(restCalories/4);    
}