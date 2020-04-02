module.exports = {
    create: require('./createDish'),
    update: require('../defaultControllers/updateDefault.js')('dishes', ['name', 'price', 'category_id']),
    get: require('../defaultControllers/getDefault.js')('dishes'),
    select: require('../defaultControllers/selectDefault.js')('dishes'),
    delete: require('../defaultControllers/deleteDefault')('dishes')
}