import React from 'react'
import './Button.css'

export interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClickAction?: () => void;
}

export const Button: React.FC<Props> = ({ 
  children, 
  style,
  onClickAction
}) => {

  const handleOnclick = () => onClickAction;
  
  return <div className='main' style={style} >{children}</div>;
}
