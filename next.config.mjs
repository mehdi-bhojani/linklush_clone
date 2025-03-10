// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default",
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all hostnames
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }, // This can be left empty

  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this with your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
