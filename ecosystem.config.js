module.exports = {
  apps : [{
    name: 'TheSchool',
    script: 'server.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      
    }
  }
};
