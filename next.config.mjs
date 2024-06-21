/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/about',
                destination: '/dashboard',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
