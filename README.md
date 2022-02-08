
## Project setup
```
npm run setup
```

## Proxy configuration
Please confirm your IP address can be reached, then change `target` to your real IP address.
```js
module.exports = {
    devServer: {
        host: 'localhost',
        port: '8888',
        proxy: {
            '/': {
                target: 'http://<your ip address>:3000',
                changeOrigin: true,
                secure: false
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}
```

### Compiles and hot-reloads for development
```
npm run api;
npm run serve;
```


