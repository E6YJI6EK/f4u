import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.sass';
import { Link } from '@/shared/config/Link/Link';
import logo from '@/assets/logo/logo.png'

interface HeaderProps {}

export const Header:FC<HeaderProps> = () => {
    const links: Link[] = [
        {
            title: "Главная",
            href: "#"
        }, 
        {
            title: "Популярное", 
            href: "#"
        }
    ]

    return(
        <div className={classNames(cls.header)}>
            <div className="container">
                <div className={cls.headerWrapper}>
                    <div className={cls.headerLogo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={cls.headerLinks}>
                        {
                            links.map(link => (
                            <div className={cls.headerLink}>
                                <a href={link.href}>{link.title}</a>   
                            </div>  
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}