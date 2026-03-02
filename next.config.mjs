/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/install.sh',
        destination: 'https://raw.githubusercontent.com/buildd-ai/buildd/main/apps/runner/install.sh',
        permanent: false,
      },
      {
        source: '/install.ps1',
        destination: 'https://raw.githubusercontent.com/buildd-ai/buildd/main/apps/runner/install.ps1',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
