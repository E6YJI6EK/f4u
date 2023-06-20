export function calculateProteins(weight: number): number {
    let dailyIntakePerGram = ((weight/2) / 180) * 1000;
    let dailyProteinsPerGram = dailyIntakePerGram * 0.2;
    return Math.round(dailyProteinsPerGram);
}