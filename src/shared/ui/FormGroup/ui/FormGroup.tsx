import { FC } from 'react';
import cls from './FormGroup.module.sass';
import { classNames } from '@/shared/lib/classNames/classNames';
import Input, { InputProps } from '../../Input';

export enum FormGroupTypes {
    TEXT = 'text',
    NUMBER = 'number'
}

interface FormGroupProps extends InputProps {
    label: string;
}

export const FormGroup: FC<FormGroupProps> = (props) => {
    const {
        className,
        label,
        theme,
        ...other
    } = props;

    return (
        <div className={classNames(cls.formGroup, {}, [className || ''])}>
            <label className={cls.label}>{label}</label>
            <Input className={cls.input} theme={theme} {...other}/>
        </div>
    );
}