module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './spec.js'
    ],
    browsers: ['Chrome'],
    port: 9292
  })
}
