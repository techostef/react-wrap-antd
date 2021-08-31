import React from 'react';
import { Typography as TypographyComp } from 'antd';
interface ITypography {
    children?: React.ReactNode;
    className?: string;
    dataTestId?: string | undefined;
    id?: string;
    onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
    style?: React.CSSProperties;
}
declare const Typography: React.FC<ITypography> & {
    Link: typeof TypographyComp.Link;
    Paragraph: typeof TypographyComp.Paragraph;
    Text: typeof TypographyComp.Text;
    Title: typeof TypographyComp.Title;
};
export default Typography;
