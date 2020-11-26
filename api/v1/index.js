import routes from './routes';

const startApp = (app) => {
  app.use('/api/v1', routes);
}

export default startApp