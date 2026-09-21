/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 프로필 사진(placehold.co)을 next/image로 불러오기 위한 외부 도메인 허용
    remotePatterns: [{ protocol: "https", hostname: "placehold.co" }],
  },
};

export default nextConfig;
