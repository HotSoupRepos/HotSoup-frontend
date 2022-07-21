module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./src/"],
          alias: {
            "@redux": "./src/redux",
            "@common": "./src/common",
            "@config": "./src/config",
            "@apis": "./src/apis",
            "@containers": "./src/containers",
            "@screens": "./src/screens",
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
