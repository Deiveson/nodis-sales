export const formatCurrency = (curr: any) => {
  if (curr !== "0") {
    console.log(curr);
    return `${curr.substr(0, (curr.length - 2))},${curr.substr(curr.length - 2)}`;
  }
  return '0';
};
