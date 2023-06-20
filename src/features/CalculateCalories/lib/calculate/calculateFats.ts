export function calculateFats(calories: number): number {
    return Math.round((calories * 0.3) / 9);
}