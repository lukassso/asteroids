  // Check if we are on dev or prod mode
const env = process.env.NODE_ENV;

module.exports = env => {
 
  return require(`./webpack/webpack.${env}.js`);
};