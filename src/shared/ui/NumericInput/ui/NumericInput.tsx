import { FC, InputHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NumericInput.module.sass';
import { InputTheme } from '../../Input';

interface NumericInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    theme: InputTheme
}

export const NumericInput:FC<NumericInputProps> = (props) => {
    const {
        theme,
        ...other
    } = props
    return(
        <input {...other} type="number" className={classNames(cls.NumericInput, {[cls[theme]]: true}, [])} />
    );
}