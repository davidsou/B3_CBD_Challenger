const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7104';

const PROXY_CONFIG = [
  {
    context: [
      "/CBD"
    ],
    target,
    secure: false,
    changeOrigin: true,  // Garante que o host de origem seja reescrito
    logLevel: "debug"    // Ajuda a depurar o proxy
  }
]

module.exports = PROXY_CONFIG;
