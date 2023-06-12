import { FC } from "react";

export enum TextStyles {
    TITLE,
    PARAGRAPH
}

interface TextProps {
    className?: string;
    style: TextStyles;
    align?: "left" | "center" | "right";
    size?: string;
    color?: string;
    font?: string;
    children: React.ReactNode;
}

const Text: FC<TextProps> = (props) => {
    const {
        className,
        style,
        align,
        size,
        color,
        font,
        children
    } = props

    if (style === TextStyles.TITLE) {
        return (
            <h1
                className={className}
                style={{
                    textAlign: align,
                    fontSize: size,
                    color: color,
                    fontFamily: font
                }}
            >
                {children}
            </h1>
        );
    }
    if (style === TextStyles.PARAGRAPH) {
        return (
            <p
                className={className}
                style={{
                    textAlign: align,
                    fontSize: size,
                    color: color,
                    fontFamily: font
                }}
            >
                {children}
            </p>
        );
    }

    return <span
        className={className}
        style={{
            textAlign: align,
            fontSize: size,
            color: color,
            fontFamily: font
        }}
    >
        {children}
    </span>;
}

export default Text;