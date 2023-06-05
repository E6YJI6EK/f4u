import { FC, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.sass';
import { InputTheme } from '../../Input';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    theme: InputTheme
}
export const Select:FC<SelectProps> = (props) => {
    const {
        className,
        options,
        theme, 
        ...other
    } = props

    return(
        <select {...other} className={classNames(cls.Select, {[cls[theme]]: true}, [className||""])} >
            {
                options.map(option => (
                    <option value={option}>{option}</option>
                ))
            }
        </select>
    );
}