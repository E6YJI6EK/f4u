import { FC } from 'react';
import cls from './PageLoader.module.sass';
import Loader from '@/shared/ui/Loader';

interface PageLoaderProps {

}

const PageLoader:FC<PageLoaderProps> = () => {
    return (
        <div className={cls.pageLoader}>
            <Loader />
        </div>
    );
}

export default PageLoader;