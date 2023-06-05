import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.sass';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme: ButtonTheme
}

export enum ButtonTheme {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    ACCEPT = 'accept',
    DISCARD = 'discard',
    EDIT = 'edit'
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...other
    } = props
    return(
        <button {...other} className={classNames(cls.Button, { [cls[theme]]: true }, [className || " "])}>
            {children}
        </button>
    );
}