import { AnchorHTMLAttributes, ReactNode } from 'react';
import cls from './HyperText.module.sass';
import { classNames } from '@/shared/lib/classNames/classNames';

interface HyperTextProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string
    children?: ReactNode
}

export interface HyperTextLink {
    text: string;
    url: string;
}

export const HyperText = (props:HyperTextProps) => {
    const {
        className,
        children,
        ...other
    } = props;

    return(
        <a className={classNames(cls.link, {}, [className||''])} {...other}>
            {children}
        </a>
    );
}