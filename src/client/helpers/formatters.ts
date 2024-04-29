export const formatPrice = (amount: number): string => {
  const formattedAmount = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `$ ${formattedAmount}`;
};
