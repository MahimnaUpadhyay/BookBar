/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      DB_URL: process.env.DB_URL,
      DB_API_KEY: process.env.DB_API_KEY,
    },
  };
  
  export default nextConfig;
  