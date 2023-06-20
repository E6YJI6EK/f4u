// Функция для расчета базового обмена веществ (BMR) Харриса-Бенедикта
export function calculateBMR(gender:"Мужской"|"Женский", weight:number, height:number, age:number):number {
    let bmr = 0;

    if (gender === "Мужской") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "Женский") {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    return Math.round(bmr);
  }