const router = require('express').Router();
var drinkController = require('../controllers/drinkControllers');


/**
 * @route GET /drinks
 * @group Drinks - Operations about drinks
 * @returns {object} 200 - Get a list of drinks
 */
router.get('/', drinkController.get);


/**
 * @route GET /drinks/:id
 * @group Drinks - Operations about drinks
 * @returns {object} 200 - Selects one drink by id
 */
router.get('/:id', drinkController.select);


/**
 * @route POST /drinks
 * @group Drinks - Operations about drinks
 * @returns {object} 200 - Create a drink
 */
router.post('/', drinkController.create);


/**
 * @route PATCH /drinks
 * @group Drinks - Operations about drinks
 * @returns {object} 200 - Update a drink
 */
router.patch('/:id', drinkController.update);


/**
 * @route DELETE /drinks/:id
 * @group Drinks - Operations about drinks
 * @returns {object} 200 - Delete one drink by id
 */
router.delete('/:id', drinkController.delete);


module.exports = router;