const { minify } = require('html-minifier');

module.exports = (src) =>
  src.replace(
    /`(\s*<[a-z](?:[^`\\]|\\.)*>\s*)`/gi,
    (template, html) => `\`${minify(html, {
      collapseWhitespace: false,
      removeComments: false,
      removeRedundantAttributes: false,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      sortAttributes: false,
      sortClassName: false,
      useShortDoctype: false,
      minifyCSS: false,
      minifyJS: false,
    })}\``,
  );
