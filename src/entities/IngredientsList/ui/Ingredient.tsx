import Button, { ButtonTheme } from '@/shared/ui/Button'
import Input, { InputTheme } from '@/shared/ui/Input'
import NumericInput from '@/shared/ui/NumericInput'
import Select from '@/shared/ui/Select'
import { useState, FC } from 'react'
import { useDispatch } from 'react-redux'
import { IngredientActions } from '../model/slice/IngredientSlice'
import { IngredientAmount, IngredientsListItem, measure } from '../model/types/ingredientSchema'
import cls from './Ingredient.module.sass'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { capitalize } from '@/shared/lib/capitalize/capitalize'

interface IngredientProps {
  ingredient: IngredientsListItem
}

export const Ingredient: FC<IngredientProps> = ({ ingredient }) => {
  const [inputCount, setInputCount] = useState<number>(0)
  const [inputMeasure, setInputMeasure] = useState<measure>()
  const [editMode, setEditMode] = useState<boolean>(false)

  const dispatch = useDispatch()

  function edit() {
    dispatch(
      IngredientActions.editIngredient({
        name: ingredient.name,
        amount: {
          count: inputCount,
          measure: inputMeasure
        }
      }),
    )
    setEditMode(false)
  }

  function remove() {
    dispatch(
      IngredientActions.removeIngredient(ingredient)
    );
  }



  function turnEditMode() {
    editMode ? setEditMode(false) : setEditMode(true);
  }



  return (
    <div className={classNames(cls.Ingredient, {}, [])}>
      {
        !editMode
          ?
          (
            <div className={cls.wrapper}>
              <div className={cls.name}>
                {capitalize(ingredient.name)}
              </div>
              <div className={cls.amount}>
                <div className={cls.count}>
                  {ingredient.amount.count}
                </div>
                <div className={cls.measure}>
                  {ingredient.amount.measure}
                </div>
              </div>
              <div className={cls.buttons}>
                <Button
                  onClick={turnEditMode}
                  theme={ButtonTheme.OUTLINE}
                >
                  <FontAwesomeIcon icon={faPen} style={{ color: '#ffffff' }} />
                </Button>
                <Button
                  onClick={remove}
                  theme={ButtonTheme.OUTLINE}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </Button>
              </div>

            </div>
          )
          :
          (
            <div className={cls.wrapper}>
              <div className={cls.name}>
                {capitalize(ingredient.name)}
              </div>
              <NumericInput
                min="1"
                max="10000"
                value={inputCount}
                onChange={(e) => setInputCount(parseInt(e.target.value))}
                className={cls.numericInput}
                theme={InputTheme.SQUARE}
              />
              <Select
                options={["шт.", "гр.", "мл."]}
                value={inputMeasure}
                onChange={(e) => setInputMeasure(e.target.value as measure)}
                theme={InputTheme.SQUARE}
                style={{borderLeft: 'none'}}
                className={cls.select}
              />
              <div className={cls.buttons}>
                <Button
                  onClick={edit}
                  theme={ButtonTheme.OUTLINE}
                >
                  <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
                </Button>
                <Button onClick={turnEditMode} theme={ButtonTheme.OUTLINE}>
                  <FontAwesomeIcon icon={faX} style={{ color: "#ffffff", }} />
                </Button>
              </div>
            </div>
          )
      }
    </div>
  )
}