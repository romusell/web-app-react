


// our setup function adds behind-the-scenes bits to the config that all of our
// examples need
const { setup } = require("../../util");

module.exports = setup({
  context: __dirname,
  entry: "./app.js",
  output: {
    filename: "bundle.js",
  },
  stats: {
    colors: true,
  },
  devServer: {
    // ...
    https: {
        key: fs.readFileSync("cert.key"),
        cert: fs.readFileSync("cert.crt"),
        ca: fs.readFileSync("ca.crt"),
    }
    // ....
}
});