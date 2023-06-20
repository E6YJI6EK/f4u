import { FC, memo } from 'react';
import cls from './CaloriesOutput.module.sass';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getCaloriesState } from '@/features/CalculateCalories/selectors/getCaloriesState/getCaloriesState';
import Text, { TextStyles } from '@/shared/ui/Text';
import Button, { ButtonTheme } from '@/shared/ui/Button';

interface CaloriesOutputProps {
    className?: string;
}

export const CaloriesOutput: FC<CaloriesOutputProps> = memo(props => {
    const {
        className
    } = props;

    const {
        calories,
        proteins,
        fats,
        hydro
    } = useSelector(getCaloriesState);

    return (
        <div className={classNames(cls.output, {}, [className||''])}>
            <Text style={TextStyles.TITLE} className={cls.title}>Ваша суточная норма КБЖУ</Text>
            <Text style={TextStyles.PARAGRAPH} size='20px' className={cls.indicator}>Калории: {calories} гр.</Text>
            <Text style={TextStyles.PARAGRAPH} size='20px' className={cls.indicator}>Белки: {proteins} гр.</Text>
            <Text style={TextStyles.PARAGRAPH} size='20px' className={cls.indicator}>Жиры: {fats} гр.</Text>
            <Text style={TextStyles.PARAGRAPH} size='20px' className={cls.indicator}>Углеводы: {hydro} гр.</Text>
            <Button className={cls.button} theme={ButtonTheme.PRIMARY}>Справка</Button>
        </div>
    );
})

