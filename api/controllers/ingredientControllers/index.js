module.exports = {
    create: require('./createIngredient'),
    update: require('../defaultControllers/updateDefault')('ingrediants', ['name', 'origin', 'bio', 'allergen', 'available']),
    get: require('../defaultControllers/getDefault.js')('ingredients'),
    select: require('../defaultControllers/selectDefault.js')('ingredients'),
    delete: require('../defaultControllers/deleteDefault')('ingredients')
}