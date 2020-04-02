const router = require('express').Router();
var ingredientController = require('../controllers/ingredientControllers');


/**
 * @route GET /ingredients
 * @group Ingredients - Operations about ingredients
 * @returns {object} 200 - Get a list of ingredients
 */
router.get('/', ingredientController.get);


/**
 * @route GET /ingredients/:id
 * @group Ingredients - Operations about ingredients
 * @returns {object} 200 - Selects one ingredient by id
 */
router.get('/:id', ingredientController.select);


/**
 * @route POST /ingredients
 * @group Ingredients - Operations about ingredients
 * @returns {object} 201 - Create an ingredient
 */
router.post('/', ingredientController.create);


/**
 * @route PATCH /ingredients
 * @group Ingredients - Operations about ingredients
 * @returns {object} 200 - Update an ingredient
 */
router.patch('/:id', ingredientController.update);


/**
 * @route DELETE /ingredients/:id
 * @group Ingredients - Operations about ingredients
 * @returns {object} 200 - Delete one ingredient by id
 */
router.delete('/:id', ingredientController.delete);


module.exports = router;