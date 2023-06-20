import { FC } from "react";

export enum TextStyles {
    TITLE,
    PARAGRAPH
}

interface TextProps {
    className?: string;
    style?: TextStyles;
    align?: "left" | "center" | "right";
    size?: string;
    color?: string;
    font?: string;
    textIndent?: string;
    lineHeight?: string
    children?: React.ReactNode;
}

const Text: FC<TextProps> = (props) => {
    const {
        className,
        style,
        align,
        size,
        color,
        font,
        textIndent,
        lineHeight,
        children
    } = props

    const styles = {
        textAlign: align,
        fontSize: size,
        color: color,
        fontFamily: font,
        textIndent: textIndent,
        lineHeight: lineHeight
    }
    if (style === TextStyles.TITLE) {
        return (
            <h1
                className={className}
                style={styles}
            >
                {children}
            </h1>
        );
    }
    if (style === TextStyles.PARAGRAPH) {
        return (
            <p
                className={className}
                style={styles}
            >
                {children}
            </p>
        );
    }

    return <span
        className={className}
        style={styles}
    >
        {children}
    </span>;
}

export default Text;