const path = require("path");

module.exports = {
  mode: "production",
  library: "react-lotties",
  entry: "./src/index.js", // Elegimos nuestro punto de entrada
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
  }, // Añadimos nuestro punto de salida
  resolve: {
    extensions: [".js", ".jsx"], // Añadimos el soporte para la extencion de JSX
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Ignora la carpeta de node_modules
        use: {
          loader: "babel-loader", // Utiliza la configuracion de Babel
        },
      },
    ],
  },
};
