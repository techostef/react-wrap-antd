import React from 'react';
import PropTypes from 'prop-types';
import { Typography as TypographyComp } from 'antd';

interface ITypography {
  children?: React.ReactNode,
  className?: string,
  dataTestId?: string | undefined,
  id?: string,
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties,
}

const Typography: React.FC<ITypography> & { 
  Link: typeof TypographyComp.Link,
  Paragraph: typeof TypographyComp.Paragraph,
  Text: typeof TypographyComp.Text,
  Title: typeof TypographyComp.Title,
} = ({
  children,
  className,
  dataTestId,
  id,
  style,
}) => {
  return (
    <TypographyComp
      className={className}
      data-testid={dataTestId}
      id={id}
      style={style}
    >
      {children}
    </TypographyComp>
  );
};

Typography.Link = TypographyComp.Link;
Typography.Paragraph = TypographyComp.Paragraph;
Typography.Text = TypographyComp.Text;
Typography.Title = TypographyComp.Title;

Typography.defaultProps = {
  children: null,
  className: '',
  dataTestId: undefined,
};

Typography.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default Typography;

