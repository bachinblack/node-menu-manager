module.exports = {
    create: require('./createCategory'),
    update: require('../defaultControllers/updateDefault')('categories', ['name']),
    get: require('../defaultControllers/getDefault.js')('categories'),
    select: require('../defaultControllers/selectDefault.js')('categories'),
    delete: require('../defaultControllers/deleteDefault')('categories')

}