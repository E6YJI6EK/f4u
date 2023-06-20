import { FC } from "react";
import cls from './CalculatorPage.module.sass';
import Calculator from "@/features/CalculateCalories";
import Text, { TextStyles } from "@/shared/ui/Text";
import CaloriesOutput from "@/widgets/CaloriesOutput";

interface CalculatorPageProps {

}

const CalculatorPage: FC<CalculatorPageProps> = () => {

    return (
        <div className={cls.calculatorPage}>
            <div className="container">
                <div className={cls.wrapper}>
                    <Text style={TextStyles.TITLE} className={cls.title}>
                        Калькулятор КБЖУ
                    </Text>
                    <Calculator className={cls.calculatorForm} />
                    <CaloriesOutput className={cls.calories}/>
                </div>
            </div>
        </div>
    );
}

export default CalculatorPage;