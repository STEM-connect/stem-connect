const withImages = require('next-images')

module.exports = (phase, { defaultConfig }) => {
  return {
    /* config options here */
		...withImages()
  }
}