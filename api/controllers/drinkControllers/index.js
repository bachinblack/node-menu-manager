module.exports = {
    create: require('./createDrink'),
    update: require('../defaultControllers/updateDefault')('drinks', ['name', 'price', 'booze', 'size']),
    get: require('../defaultControllers/getDefault.js')('drinks'),
    select: require('../defaultControllers/selectDefault.js')('drinks'),
    delete: require('../defaultControllers/deleteDefault')('drinks')
}