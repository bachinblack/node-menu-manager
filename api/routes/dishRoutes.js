const router = require('express').Router();
var dishController = require('../controllers/dishControllers');


/**
 * @route GET /dishes
 * @group Dishes - Operations about dishes
 * @returns {object} 200 - Get a list of dishes
 */
router.get('/', dishController.get);


/**
 * @route GET /dishes/:id
 * @group Dishes - Operations about dishes
 * @returns {object} 200 - Selects one dish by id
 */
router.get('/:id', dishController.select);


/**
 * @route POST /dishes
 * @group Dishes - Operations about dishes
 * @returns {object} 200 - Create a dish
 */
router.post('/', dishController.create);


/**
 * @route PATCH /dishes
 * @group Dishes - Operations about dishes
 * @returns {object} 200 - Update a dish
 */
router.patch('/:id', dishController.update);


/**
 * @route DELETE /dishes/:id
 * @group Dishes - Operations about dishes
 * @returns {object} 200 - Delete one dish by id
 */
router.delete('/:id', dishController.delete);


module.exports = router;