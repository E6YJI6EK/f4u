import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.sass';
import logo from '@/assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { RouterPath } from '@/shared/config/routeConfig/routeConfig';

interface HeaderProps { }

export const Header: FC<HeaderProps> = () => {
    return (
        <div className={classNames(cls.header)}>
            <div className="container">
                <div className={cls.headerWrapper}>
                    <div className={cls.headerLogo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={cls.headerLinks}>
                        <div className={cls.headerLink}>
                            <Link to={RouterPath.main}>
                                Главная
                            </Link>
                        </div>
                        <div className={cls.headerLink}>
                            <Link to={RouterPath.calculator}>
                                Калькулятор каллорий
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}