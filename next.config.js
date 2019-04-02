const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
module.exports = withSass(withImages(withCSS()))
