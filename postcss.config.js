module.exports = ({ env, file }) => ({
    plugins: {
        'postcss-import': {},
        'tailwindcss': {},
        'postcss-nested': {},
        'postcss-prefix-selector': env === production ? false : {
            prefix: `.tui-${file.basename.replace('.postcss', '')}`,
            transform: function (prefix, selector, prefixedSelector) {
                if (selector === 'body') {
                  return 'body' + prefix;
                } else {
                  return prefixedSelector;
                }
            },
        },
        'autoprefixer': {},
        'cssnano': env === 'production' ? {} : false,
    },
});