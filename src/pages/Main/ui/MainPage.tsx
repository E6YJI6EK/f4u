import { FC, Suspense, useRef, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './MainPage.module.sass'
import { IngredientsList } from '@/entities/IngredientsList'
import Button, { ButtonTheme } from '@/shared/ui/Button'
import { useSelector } from 'react-redux'
import { getIngredients } from '@/entities/IngredientsList/model/selectors'
import axios from 'axios'

interface MainPageProps { }

interface chatGPTRequest {
  answer: string|null;
}

const MainPage: FC<MainPageProps> = () => {
  const ingredients = useSelector(getIngredients);
  const [answer, setAnswer] = useState<chatGPTRequest>({answer:null});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const answerRef = useRef<HTMLDivElement | null>(null);

  function postIngredients() {
    const data = {
      "ingredients": ingredients
    }
    setAnswer({answer:null});
    setIsLoading(true);
    axios.post("http://127.0.0.1:3000/chatgpt", data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log("Успех");
        console.log(response.data);
        setIsLoading(false);
        setAnswer(response.data);
      })
      .catch(error => {
        console.log("Failure =((");
        console.log(error);
        setIsLoading(false);
        setAnswer({answer:"Ашибка!!!"})
      })
  }

  function handleClick() {
    if (answerRef.current != null) {
      window.scrollTo({
        top: answerRef.current.offsetTop,
        behavior: 'smooth'
      });
    }

    postIngredients();
  }

  return (
    <div className={classNames(cls.main)}>
      <Suspense fallback="Loading...">
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
            <div className={classNames(cls.answer, {}, [])} ref={answerRef}>
              <h1 className={cls.title}>Результат</h1>
              {
                isLoading ?
                  (
                    <div>Loading...</div>
                  )
                  :
                  (
                    <p>{answer.answer}</p>
                  )
              }
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default MainPage
