const { override, addLessLoader, fixBabelImports } = require("customize-cra");

module.exports = override(
  // 支持less
  addLessLoader(),

  // antd-mobile 的按需引入
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css"
  })
);
