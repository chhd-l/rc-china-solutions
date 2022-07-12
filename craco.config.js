const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')

module.exports = {
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: {
      '@': resolveApp('src'),
    },
    configure: (webpackConfig, { env, paths }) => {
      // console.log("process.env.NODE_ENV:", env, webpackConfig.output.publicPath);
      if (env === "production") {
        webpackConfig.output.publicPath = "https://cdnstg.fivefen.com/hub_assets/";
      }
      return webpackConfig;
    }
  },
  devServer: {
    port: 3050,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#FFFFFF' },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './src',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
}
