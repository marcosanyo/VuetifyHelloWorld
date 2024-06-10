const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    host: '0.0.0.0',
    port: 8085,
    allowedHosts: [
      'localhost',
      '.localhost' // ローカルホストからのアクセスのみ許可
    ]
  }
})
