export const formatCurrency = (curr: string) => `${curr.substr(0, (curr.length - 2))},${curr.substr(curr.length - 2)}`;
