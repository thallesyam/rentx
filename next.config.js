const path = require('path')
const withImages = require('next-images')

const alias = {
  '@components': path.join(__dirname, 'src', 'components'),
  '@styles': path.join(__dirname, 'src', 'styles'),
}

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  images: {
    disableStaticImages: true,
  },

  webpack(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, alias)

    return config
  },
})
