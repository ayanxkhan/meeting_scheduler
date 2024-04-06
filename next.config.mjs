/** @type {import('next').NextConfig} */
const nextConfig = {
    // to avoid executing useeffect two times
    reactStrictMode:false,
    // so that google acc image will be shown
    images:{
        domains:['lh3.googleusercontent.com']
    }
};

export default nextConfig;
