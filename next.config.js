
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'Portfolio'; // Change if your repo name is different

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};
