export const formatPrice = (number: number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data: any, type: any) => {
  let unique = data.map((item: any) => item[type]);

  if (type === 'colors') {
    unique = unique.flat();
  }

  unique = new Set(unique);
  return ['all', ...unique];
};

export const checkObjectProperties = (object: Record<string, any>) => {
  const isEmpty = Object.values(object).every((x) => x === null || x === '');
  return isEmpty;
};

export const formatAddress = (data: any) => {
  const {
    shippingInfo: { address, city, state, country, pinCode },
  } = data;
  return `${address}, ${city}, ${state} - ${pinCode}, ${country}`;
};

export const getOrderStatusColor = (status: any) => {
  if (status === 'processing') {
    return 'var(--clr-orange)';
  }
  if (status === 'rejected') {
    return 'var(--clr-red-dark)';
  }
  return 'var(--clr-green-dark)';
};