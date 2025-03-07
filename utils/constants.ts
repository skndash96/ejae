const domain = process.env.REACT_APP_BACKEND_HOST;

export const products_url = `${domain}/api/products`;
export const single_product_url = `${domain}/api/products/`;
export const create_order_url = `${domain}/api/orders/new`;
export const get_order_url = `${domain}/api/orders`;
export const payment_url = `${domain}/api/payment/create-payment-intent`;
export const upload_url = `${domain}/api/upload/`;

export const default_profile_image =
  'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg';