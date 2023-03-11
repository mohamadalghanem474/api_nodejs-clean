const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const publicRoute = require('./publicRoute');


const mountRoutes = (app) => {
  //auth & login
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/public',publicRoute);

};

module.exports = mountRoutes;
