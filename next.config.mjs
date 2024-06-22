/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos'],
    },
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
