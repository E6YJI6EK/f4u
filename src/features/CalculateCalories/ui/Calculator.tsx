import { FC, memo, useCallback, useState } from 'react';
import cls from './Calculator.module.sass';
import RadioGroup from '@/shared/ui/RadioGroup';
import FormGroup from '@/shared/ui/FormGroup';
import { InputTheme } from '@/shared/ui/Input';
import Button, { ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CaloriesActions } from '../model/slice/CaloriesSlice';
import { Gender, biometricDataSchema } from '../model/types/CaloriesSchema';
import { useDispatch } from 'react-redux';


interface CalculatorProps {
    className?: string;
}

const Calculator: FC<CalculatorProps> = memo((props) => {
    const {
        className,
    } = props;
    const [gender, setGender] = useState<Gender | string>(Gender.MALE);
    const [weight, setWeight] = useState<number>(100);
    const [height, setHeight] = useState<number>(180);
    const [age, setAge] = useState<number>(18);

    const dispatch = useDispatch();

    const calc = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const data: biometricDataSchema = {
            weight: weight,
            height: height,
            age: age,
            gender: gender as Gender
        }
        dispatch(CaloriesActions.calc(data));
    }, [weight, height, age, gender]);

    return (
        <form className={classNames(cls.form, {}, [className || ''])}>
            <RadioGroup
                label='Пол'
                opts={Object.values(Gender)}
                name='gender'
                selectedValue={gender}
                selectValue={setGender}
            />
            <FormGroup
                label='Вес (в кг)'
                theme={InputTheme.ROUNDED}
                type='number'
                min='0'
                value={weight}
                step='0.1'
                onChange={e => {setWeight(parseFloat(e.target.value)); console.log(weight)}}
            />
            <FormGroup
                label='Рост (в см)'
                theme={InputTheme.ROUNDED}
                type='number'
                min='0'
                value={height}
                step='0.1'
                onChange={e => setHeight(parseFloat(e.target.value))}
            />
            <FormGroup
                label='Возраст'
                theme={InputTheme.ROUNDED}
                type='number'
                min='0'
                value={age}
                onChange={e => setAge(parseInt(e.target.value))}
            />
            <Button
                theme={ButtonTheme.PRIMARY}
                onClick={e => calc(e)}
            >
                Рассчитать
            </Button>
        </form>
    );
});

export default Calculator;