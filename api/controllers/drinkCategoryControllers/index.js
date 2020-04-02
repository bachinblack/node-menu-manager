module.exports = {
    create: require('./createCategory'),
    update: require('../defaultControllers/updateDefault.js')('drink_categories', ['name']),
    get: require('../defaultControllers/getDefault.js')('drink_categories'),
    select: require('../defaultControllers/selectDefault.js')('drink_categories'),
    delete: require('../defaultControllers/deleteDefault')('drink_categories')

}