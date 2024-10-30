export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src");

    eleventyConfig.addPassthroughCopy("bundle.css");
  };
  
