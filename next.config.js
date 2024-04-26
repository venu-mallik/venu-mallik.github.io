/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: [
    'rc-util',
    '@ant-design',
    'antd',
    'rc-pagination',
    'rc-picker',
    '@babel',
  ]
}

export default nextConfig;
