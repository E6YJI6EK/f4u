import { FC, Suspense, useCallback, useRef } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './MainPage.module.sass'
import { IngredientsList } from '@/entities/IngredientsList'
import Button, { ButtonTheme } from '@/shared/ui/Button'
import { useSelector } from 'react-redux'
import { getIngredients } from '@/entities/IngredientsList/model/selectors'
import { postQueryToChatGPT } from '@/features/GenerateRecipes/model/services/postQueryToChatGPT/postQueryToChatGPT'
import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import Loader from '@/shared/ui/Loader'
import Recipes from '@/features/GenerateRecipes'
import { scrollTo } from '@/shared/lib/scrollTo/scrollTo'


interface MainPageProps { }



const MainPage: FC<MainPageProps> = () => {
  const ingredients = useSelector(getIngredients);
  const answerRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    scrollTo(answerRef);
    dispatch(postQueryToChatGPT({ ingredients: ingredients }))
  }, [dispatch, ingredients])

  return (
    <div className={classNames(cls.main)}>
      <div className="container">
        <div className={cls.mainWrapper}>
          <div className={cls.mainHero}>
            <IngredientsList className={cls.ingredients} />
            <div className={cls.mainDescription}>
              <p>
                Хотите что-нибудь приготовить, но не знаете что? Тогда наш сервис Food4You поможет Вам.
              </p>
              <p>
                Food4You - сервис, основанный на chatGPT-3, поможет Вам подобрать блюдо исходя из имеющихся у Вас продуктов.
              </p>
              <p>
                Для этого добавьте в список слева нужные ингредиенты, нажмите на кнопку "Приготовить" и наслаждайтесь!
              </p>
              <Button
                theme={ButtonTheme.PRIMARY}
                onClick={handleClick}
              >
                Приготовить
              </Button>
            </div>
          </div>
          <Recipes ref={answerRef} />
        </div>
      </div>
    </div>
  )
}

export default MainPage
