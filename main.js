const feathers = require('@feathersjs/feathers');
const authentication = require('feathers-authentication');
const jwt = require('@feathersjs/authentication-jwt');
const app = feathers();

// Setup authentication
app.configure(authentication({ secret: 'secret' }));
app.configure(jwt());

// Setup a hook to only allow valid JWTs to authenticate
// and get new JWT access tokens
app.service('authentication').hooks({
  before: {
    create: [
      authentication.hooks.authenticate(['jwt'])
    ]
  }
});

app.listen(3000)
