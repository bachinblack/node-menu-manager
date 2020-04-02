const router = require('express').Router();
var categoryController = require('../controllers/categoryControllers');


/**
 * @route GET /categories
 * @group Categories - Operations about categories
 * @returns {object} 200 - Get a list of categories
 */
router.get('/', categoryController.get);


/**
 * @route GET /categories/:id
 * @group Categories - Operations about categories
 * @returns {object} 200 - Selects one category by id
 */
router.get('/:id', categoryController.select);


/**
 * @route POST /categories
 * @group Categories - Operations about categories
 * @returns {object} 200 - Create a category
 */
router.post('/', categoryController.create);


/**
 * @route PATCH /categories
 * @group Categories - Operations about categories
 * @returns {object} 200 - Update a category
 */
router.patch('/:id', categoryController.update);


/**
 * @route DELETE /categories/:id
 * @group Categories - Operations about categories
 * @returns {object} 200 - Delete one category by id
 */
router.delete('/:id', categoryController.delete);


module.exports = router;