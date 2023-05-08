module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("design-system");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("documents");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("keybase.txt");
};