
export const url = import.meta.env?.[`VITE_${import.meta.env.MODE?.toUpperCase()}_API_URL`] || 'http://localhost';
export const port = import.meta.env?.[`VITE_${import.meta.env.MODE?.toUpperCase()}_API_PORT`] || '3000';
export const apiUrl = `${url}:${port}`;
