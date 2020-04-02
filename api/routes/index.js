const router = require('express').Router();

router.use("/dishes", require('./dishRoutes'));
router.use("/categories", require('./categoryRoutes'));
router.use("/drinks", require('./drinkRoutes'));
router.use("/drinkcategories", require('./drinkCategoryRoutes'));
router.use("/ingredients", require('./ingredientRoutes'));

module.exports = router;

