import { FC, memo } from 'react';
import cls from './ReferenceModal.module.sass';
import Modal from '@/shared/ui/Modal';
import Text, { TextStyles } from '@/shared/ui/Text';
import HyperText, { HyperTextLink } from '@/shared/ui/HyperText';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ReferenceModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ReferenceModal: FC<ReferenceModalProps> = memo(props => {
    const {
        className,
        isOpen,
        onClose
    } = props;



    const links: HyperTextLink[] = [
        {
            text: 'Сколько Белка Нужно Твоим Мышцам?',
            url: 'https://www.youtube.com/watch?v=6BnkIUSo0RI&t=165s&ab_channel=StreetWorkout'
        },
        {
            text: 'Harris JA, Benedict FG. A biometric study of human basal metabolism. Proceedings of the National Academy of Sciences. 1918;4(12):370-373.',
            url: 'https://archive.org/details/jstor-83837/page/n1/mode/2up'
        },
        {
            text: 'Comparison of High vs. Normal/Low Protein Diets on Renal Function in Subjects without Chronic Kidney Disease: A Systematic Review and Meta-Analysis.',
            url: 'https://archive.org/details/pubmed-PMC4031217'
        },
        {
            text: 'Low glycaemic index or low glycaemic load diets for overweight and obesity',
            url: 'https://www.cochrane.org/CD005105/ENDOC_low-glycaemic-index-or-low-glycaemic-load-diets-for-overweight-and-obesity'
        }
    ]

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.referenceModal, {}, [className as string])}
        >
            <Text style={TextStyles.TITLE} align='center' className={cls.title}>Справка</Text>
            <Text style={TextStyles.PARAGRAPH} textIndent='20px' lineHeight='20px'>
                Рассчеты нашего приложения могут быть не совсем точны.
                Мы приложили усилия, чтобы основываться на научных исследованиях, однако различные факторы могут влиять на индивидуальные потребности и реакцию каждого человека.
                Поэтому рекомендуется использовать результаты рассчетов только в качестве общей ориентации и консультироваться с профессионалом, прежде чем принимать решения о своем питании, тренировках или здоровье.
                Стоит также учитывать то, что рассчет среднесуточного калоража не учитывает физическую активность.
                Мы не несем ответственности за возможные ошибки или неправильные интерпретации результатов.
                Пожалуйста, помните, что каждый человек уникален, и индивидуальные особенности могут отличаться от общих рекомендаций.
            </Text>
            <Text style={TextStyles.PARAGRAPH} textIndent='20px' lineHeight='20px'>
                Используемые источники:
            </Text>
            <div className={cls.links}>
                {
                    links.map(link => (
                        <HyperText
                            key={link.url}
                            href={link.url}
                            target='_blank'
                            className={cls.link}
                        >
                            {link.text}
                        </HyperText>
                    ))
                }
            </div>

        </Modal>
    );

});