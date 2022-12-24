import React from 'react';
import { IButtonProps } from './button.props';

export const Button: React.FC<IButtonProps> = (props: IButtonProps) => {

  return (
    <button onClick={props.onClick} >{props.label}</button>
  );
};