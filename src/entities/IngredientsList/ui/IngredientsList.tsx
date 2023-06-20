import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './IngredientsList.module.sass';
import { Ingredient } from './Ingredient';
import { getIngredients } from '../model/selectors';
import { useSelector } from 'react-redux';
import AddInput from '@/widgets/AddInput';

interface IngredientsListProps {
    className: string
}

export const IngredientsList: FC<IngredientsListProps> = props => {

    const ingredients = useSelector(getIngredients)

    return (
        <div className={classNames(cls.IngredientsList, {}, [props.className])}>
            <h3 className={cls.title}>Список Ваших продуктов</h3>
            <ol className={cls.list}>
                {
                    ingredients.length !== 0
                        ?
                        ingredients.map(ingredient => (
                            <li key={ingredient.name}>
                                <Ingredient ingredient={ingredient} />
                            </li>

                        ))
                        :
                        <p className={cls.empty}>Список пока пустой</p>
                }
            </ol>
            <AddInput className={cls.input} />
        </div>
    );
}