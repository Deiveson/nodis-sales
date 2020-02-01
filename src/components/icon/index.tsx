import React from 'react';

interface Props {
    value: string;
}

const Icon: React.FC<Props> = ({ value = '' }) => <i className={`icon-${value}`} />;

export default Icon;
