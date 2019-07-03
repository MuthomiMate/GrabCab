module.exports = {
    plugins: [
        [
            "@babel/plugin-proposal-class-properties"
        ]
    ],
    presets: ["module:metro-react-native-babel-preset", "react-native", "module:react-native-dotenv"],
    env: {
      test: {
        presets: [
            "react-native",
            [
                "@babel/preset-env"
            ]
        ]
      }
    }
}