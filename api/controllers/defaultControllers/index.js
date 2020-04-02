// Setting up some default functions to speed up CRUD creation
module.exports = {
    get: require('./getDefault.js/index.js'),
    select: require('./selectDefault.js'),
    delete: require('./deleteDefault'),
    update: require('./updateDefault')
  }