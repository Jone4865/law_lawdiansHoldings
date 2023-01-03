module.exports = {
  "core": {
     builder: "webpack5"
  },
  stories: [
    // 기본
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    // 직접 경로 설정
    // '../src/components/*.stories.mdx',
    // '../src/components/*.stories.@(js|jsx|ts|tsx)',
    // 포괄적인 경로 설정
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  "framework": "@storybook/react",
  typescript: {
     check: false,
     checkOptions: {},
     reactDocgen: false,
     reactDocgenTypescriptOptions: {
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
     },
  },
}
