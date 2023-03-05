const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (config) => {
    config.plugins.push(
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'src/static'),
                    to: path.join(__dirname, 'dist/static'),
                },
            ],
        }),
    );
    return config;
};
