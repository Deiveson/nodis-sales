import React from 'react';

interface Props {
    value: string;
    onClick?():void
}

const Icon: React.FC<Props> = ({ value = '', onClick = () => {} }) => <i className={`icon-${value}`} onClick={() => onClick()} />;

export default Icon;
