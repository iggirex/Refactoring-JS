const getInstalledPath = require('get-installed-path')

getInstalledPath('npm').then((path) => {
  console.log(path)
  // => '/home/charlike/.nvm/path/to/lib/node_modules/npm'
})
