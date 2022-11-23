import React from 'react'
import './Button.css'

type Props = {
  className?: string; 
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClickAction?: () => void;
}

const Button: React.FC<Props> = ({ 
  className,
  children, 
  style,
  onClickAction
}) => {

  const handleOnclick = () => onClickAction;

  className = `main ${className}`
  
  return (
    <div style={style} onClick={handleOnclick}>
      {children}
    </div>
  )
}

export default Button