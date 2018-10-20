module.exports = {
  apps: [{
    name: 'keenan-io',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'admin',
      host: 'keenan.io',
      key: '~/.ssh/keenan-io-key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:KeenanV/keenan-io.git',
      path: '/home/admin/keenan-io',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
