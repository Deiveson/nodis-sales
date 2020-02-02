import React from 'react';

interface Props {
    color: string;
    text: string;
}

const Button: React.FC<Props> = ({ text = '', color = '' }) => <button className={`button--${color}`}>{text}</button>;

export default Button;
