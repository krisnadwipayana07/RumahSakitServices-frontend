module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: [] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    loader: 'imgix',
    path: ''
  }
};
