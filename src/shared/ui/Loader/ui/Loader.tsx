import { FC } from "react"
import cls from './Loader.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";

interface LoaderProps {
    className?: string;
}

const Loader: FC<LoaderProps> = ({className}) => {
    return (
        <div className={classNames(cls.dualRing, {}, [className || ""])}>

        </div>
    );
}

export default Loader;