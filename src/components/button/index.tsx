import React from 'react';

interface Props {
    color: string;
    text: string;
    onClick?(): void;
}

const Button: React.FC<Props> = ({ text = '', color = '', onClick = () => {} }) => <button className={`button--${color}`} onClick={() => onClick()}>{text}</button>;

export default Button;
