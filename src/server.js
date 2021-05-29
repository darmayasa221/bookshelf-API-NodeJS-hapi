const hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = async () => {
  const listen = hapi.server({
    port: 3000,
    host: 'localhost',
  });

  listen.route(routes);

  await listen.start();
  console.log(`server runing on ${listen.info.uri}`)
}

server()