const path = require('path');

module.exports = {
    entry: './src/LoginForm.tsx',
    devtool: 'cheap-module-eval-source-map',
    mode: 'none',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'react-login-form.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals: {      
        // Don't bundle react or react-dom      
        react: {          
            commonjs: 'react',          
            commonjs2: 'react',          
            amd: 'React',          
            root: 'React',      
        },      
        'react-dom': {          
            commonjs: 'react-dom',          
            commonjs2: 'react-dom',          
            amd: 'ReactDOM',          
            root: 'ReactDOM',      
        },  
    }, 
};
