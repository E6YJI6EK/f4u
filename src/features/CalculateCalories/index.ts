import Calculator from "./ui/Calculator";
import type { caloriesSchema } from "./model/types/CaloriesSchema";
import { CaloriesActions, CaloriesReducer } from "./model/slice/CaloriesSlice";

export default Calculator;

export {
    caloriesSchema,
    CaloriesActions,
    CaloriesReducer
}
