const router = require('express').Router();
const { Category, Product } = require('../../models');

// Find all categories including associated Products
// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

// Find one category by its `id` value including its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

//Update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryDate = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json(categoryDate)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!categoryData) {
      res.status(400).json({message: 'Category is not found'})
      return;
    }
    res.status(200).json({message: "Category is deleted"})
  }
  catch (err) {
    res.status(500).json(err)
  }

});

module.exports = router;
