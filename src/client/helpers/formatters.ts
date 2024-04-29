type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export const formatPrice = (price: Price): string => {
  const formattedAmount = price.amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `$ ${formattedAmount}`;
};
