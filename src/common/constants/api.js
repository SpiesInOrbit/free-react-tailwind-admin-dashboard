const url = process.env?.[`VITE_${process.env.NODE_ENV.toUpperCase()}_API_URL`] || 'http://localhost';
const port = process.env?.[`VITE_${process.env.NODE_ENV.toUpperCase()}_API_PORT`] || '3000';

export default { url, port };