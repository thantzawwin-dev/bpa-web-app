import { ThemeProps } from 'contexts';
import React from 'react'
import './Button.css'

type Props = {
  className?: string; 
  children?: React.ReactNode;
  style?: React.CSSProperties;
  themeStyle?: ThemeProps; 
  onClickAction?: () => void;
}
const Button: React.FC<Props> = ({ 
  className,
  children, 
  style,
  themeStyle,
  onClickAction
}) => {

  const handleOnclick = () => onClickAction;

  className = `main ${className}`

  themeStyle = themeStyle.
  
  return <div  style={style} >{children}</div>;
}

export default Button