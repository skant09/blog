module.exports = {
  async headers() {
    return [
      {
        source: '/:page',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age: 300, public, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}
