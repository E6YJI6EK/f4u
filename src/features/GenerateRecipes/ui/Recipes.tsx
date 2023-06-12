import { classNames } from "@/shared/lib/classNames/classNames";
import { FC } from "react";
import cls from './Recipes.module.sass';
import { useSelector } from "react-redux";
import { getRecipesState } from "../model/selectors/getRecipesState/getRecipesState";
import Loader from "@/shared/ui/Loader";
import Text from "@/shared/ui/Text";
import { TextStyles } from "@/shared/ui/Text";
import Button, { ButtonTheme } from "@/shared/ui/Button";
import { AccessTypes, openWebsite } from "@/shared/lib/openWebsite/openWebsite";

interface RecipesProps {
    className?: string;
    ref: React.MutableRefObject<HTMLDivElement | null>;
}

const Recipes: FC<RecipesProps> = (props) => {
    const { className, ref } = props;

    const { recipes, isLoading, error } = useSelector(getRecipesState);

    return (
        <div className={classNames(cls.recipes, {}, [className || ""])} ref={ref}>
            <h1 className={cls.title}>Результат</h1>
            <div className={cls.wrapper}>
                {error && <Text style={TextStyles.TITLE} color={"red"} align="center">Ошибка: {error}</Text>}
                {
                    isLoading ?
                        (
                            <Loader className={cls.loader} />
                        )
                        :
                        (
                            <div className={cls.recipesWrapper}>
                                {
                                    recipes.map(r => (
                                        <div className={cls.recipe}>
                                            <div className={cls.images}>
                                                <img src={r.pics[0]} alt={r.name} />
                                                <img src={r.pics[1]} alt={r.name} />
                                                <img src={r.pics[2]} alt={r.name} />
                                            </div>

                                            <div className={cls.info}>
                                                <h2>
                                                    {r.name}
                                                </h2>
                                                <div className={cls.ingredients}>
                                                    <h4>Ингредиенты</h4>
                                                    <ol>
                                                        {r.ingredients.map(i => (
                                                            <li>
                                                                <p>
                                                                    {i.name} - {i.amount}
                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>
                                                <div className={cls.cpfc}>
                                                    <h4>КБЖУ на 100 гр. блюда</h4>
                                                    <div className={cls.calories}>
                                                        <p>Калории - {r.cpfc.calories}</p>
                                                        <p>Белки - {r.cpfc.proteins}</p>
                                                        <p>Жиры - {r.cpfc.fats}</p>
                                                        <p>Углеводы - {r.cpfc.carbohydrates}</p>
                                                    </div>
                                                </div>
                                                <Button
                                                    theme={ButtonTheme.PRIMARY}
                                                    className={cls.button}
                                                    onClick={() => {
                                                        openWebsite(`https://www.youtube.com/results?search_query=${r.name}`, AccessTypes.BLANK)
                                                    }}
                                                >
                                                    Посмотреть рецепт
                                                </Button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        )
                }
            </div>
        </div>
    );
}

export default Recipes;