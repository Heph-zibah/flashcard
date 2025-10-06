import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/offline",
    image: "",
    audio: "",
    video: "",
    font: "",
  },
});

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
