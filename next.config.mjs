/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: false,
        remotePatterns:[
            {
                hostname: "*"
            }
        ]
    }
};

export default nextConfig;
