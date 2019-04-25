const path = require('path');

module.exports = {
    watch: true,
    entry: './src/LoginForm.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'react-login-form.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'react-keyed-file-browser',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    }
  };