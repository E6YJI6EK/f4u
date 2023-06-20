import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.sass';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    theme: InputTheme,
    fontSize?:number;
}

export enum InputTheme {
    CLEAR = "clear",
    ROUNDED = "both",
    LEFT_ROUND = "left",
    RIGHT_ROUND = "right",
    SQUARE = 'square'
}

export const Input:FC<InputProps> = (props) => {
    const {
        theme,
        className,
        fontSize,
        ...other
    } = props
    return(
        <>
            <input 
            {...other} 
            className={classNames(cls.Input, {[cls[theme]]: true}, [className||""])} 
            style={{fontSize: `${fontSize||16}px`}} 
            />
        </>
    );
}