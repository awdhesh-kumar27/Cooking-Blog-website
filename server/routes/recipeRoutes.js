const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');


router.get('/',recipeController.homepage);
router.get('/categories',recipeController.exploreCategories);
router.get('/latest-recipe',recipeController.latestRecipes);
router.get('/recipe/:id',recipeController.exploreRecipe);
router.post('/search',recipeController.exploreSearch);
router.get('/random-recipe',recipeController.randomRecipes);
router.get('/submit-recipe',recipeController.exploreSubmit);
router.post('/submit-recipe',recipeController.exploreSubmitPost);

module.exports = router;