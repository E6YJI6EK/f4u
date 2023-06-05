import { FC, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddInput.module.sass';
import Input, { InputTheme } from '@/shared/ui/Input';
import Button, { ButtonTheme } from '@/shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '@/entities/IngredientsList/model/selectors';
import { IngredientActions } from '@/entities/IngredientsList/model/slice/IngredientSlice';
import { IngredientsListItem, measure } from '@/entities/IngredientsList/model/types/ingredientSchema';
import NumericInput from '@/shared/ui/NumericInput';
import Select from '@/shared/ui/Select';

interface AddInputProps {
    className?: string;
}

export const AddInput: FC<AddInputProps> = (props) => {
    const {
        className
    } = props

    const [inputName, setInputName] = useState<string>('')
    const [inputCount, setInputCount] = useState<number>(0)
    const [inputMeasure, setInputMeasure] = useState<measure>("шт.")

    const dispatch = useDispatch()

    function addIngredient() {
        const value: IngredientsListItem = {
            name: inputName,
            amount: {
                count: inputCount,
                measure: inputMeasure
            }
        }
        dispatch(IngredientActions.addIngredient(value))
    }

    function removeAll() {
        dispatch(IngredientActions.removeAll())
    }

    function validate() {
        if (inputName === '' || inputCount === 0) {
            alert("Ты обосрался, малыш");
            return;
        }
        setInputName('');
        setInputCount(0);
        setInputMeasure('шт.');
        addIngredient();
    }

    return (
        <div className={classNames(cls.AddInput, {}, [className || ""])}>
            <div className={cls.inputWrapper}>
                <Input
                    className={cls.input}
                    style={{ height: '20px' }}
                    type='text'
                    theme={InputTheme.LEFT_ROUND}
                    placeholder='Добавить продукт'
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                // fontSize={10}
                />
                <div className={cls.rightPart}>
                    <NumericInput
                        style={{ height: '20px' }}
                        value={inputCount}
                        min="1"
                        max="10000"
                        theme={InputTheme.CLEAR}
                        onChange={(e) => setInputCount(parseInt(e.target.value))}
                    />
                    <Select
                        style={{ height: '100%' }}
                        options={["шт.", "гр.", "мл."]}
                        value={inputMeasure}
                        theme={InputTheme.RIGHT_ROUND}
                        onChange={(e) => setInputMeasure(e.target.value as measure)}
                    />
                </div>
            </div>
            <div className={cls.buttons}>
                <Button theme={ButtonTheme.PRIMARY} onClick={validate}>Добавить</Button>
                <Button
                    className={cls.removeBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={removeAll}
                >
                    Очистить все
                </Button>
            </div>

        </div>
    );
}