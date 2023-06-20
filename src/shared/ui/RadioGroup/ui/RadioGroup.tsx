import { FC, useEffect, useMemo, useState } from 'react';
import cls from './RadioGroup.module.sass';
import { classNames } from '@/shared/lib/classNames/classNames';

interface RadioGroupProps {
    className?: string;
    opts: Array<string>;
    name: string;
    label: string;
    selectedValue: string,
    selectValue: (str:string) => void
}

export const RadioGroup: FC<RadioGroupProps> = (props) => {
    const {
        className,
        opts,
        name,
        label,
        selectedValue,
        selectValue
    } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        selectValue(e.target.value);
    }

    return (
        <div className={classNames(cls.radioGroup, {}, [className || ''])}>
            <label>
                {label}
            </label>
            <div className={cls.options}>
                {
                    opts.map(opt => (
                        <label className={cls.option} key={opt}>
                            <input
                                type="radio"
                                name={name}
                                className={cls.radioBtn}
                                value={opt}
                                checked={opt === selectedValue}
                                onChange={e => handleChange(e)}
                            />
                            <span>{opt}</span>
                        </label>
                    ))
                }
            </div>
        </div>
    );
}
