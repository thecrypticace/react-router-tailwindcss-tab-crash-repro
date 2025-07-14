const plugin = {
  withOptions: (pluginFunction, configFunction = () => ({})) => {
    const optionsFunction = (options) => {
      const handler = pluginFunction(options);
      const config = configFunction(options);
      return { handler, config };
    };
    optionsFunction.__isOptionsFunction = true;
    return optionsFunction;
  }
};

export default plugin.withOptions(
  (options) => {
    return ({ addBase, addComponents, addUtilities }) => {
      addBase({
        '@property --radialprogress': {
          syntax:   '"<percentage>"',
          inherits: 'true', 'initial-value': '0%',
        }
      });
    }
  }
)
