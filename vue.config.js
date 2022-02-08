module.exports = {
    devServer: {
        host: 'localhost',
        port: '8888',
        proxy: {
            '/': {
                target: 'http://172.20.10.6:3000',
                changeOrigin: true,
                secure: false
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}
