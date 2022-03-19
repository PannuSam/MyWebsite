module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addWatchTarget("src/css");
   
  
      return {
          dir: {
              input: "src",
          },
      };
  };