type Category = {
  id: string;
  name: string;
  results: number;
};

const findCategoriesOrderedByResults = (categories: Category[]): string[] => {
  return categories
    .sort((a, b) => b.results - a.results)
    .map((category) => category.name);
};

export const getDecimals = (num: number, precision: number = 2): number => {
  const numStr = num.toFixed(precision);
  const decimalPart = numStr.split(".")[1];
  return Number(decimalPart);
};

export const normalizeProducts = (data: any) => {
  const categories = data.available_filters.find(
    (filter: any) => filter.id === "category"
  );

  const items = data.results.map((product: any) => {
    return {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: product.price,
        decimals: getDecimals(product.price),
      },
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
    };
  });

  return {
    categories: categories?.values
      ? findCategoriesOrderedByResults(categories.values)
      : [],
    items,
  };
};
