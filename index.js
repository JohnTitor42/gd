const jwToken = require('./src/jwToken').token
const stdin = require('./src/stdin').stdin;

jwToken.authorize(authErr => {
  if (authErr) {
    console.log('error :' + authErr)
  } else {
    console.log('Connection Established')
    stdin()
  }
})


