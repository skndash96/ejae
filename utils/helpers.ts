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

export const formatDistanceToNow = (dateObj: Date) => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
}