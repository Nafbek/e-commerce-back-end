const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
// Find all tags including associated Product data
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find a single tag by its `id` including its associated Product data
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (req.body.productIds.length) {
      const productTagIdArr = req.body.productIds.map((product_id) => {
        return {
          tag_id: tagData.id,
          product_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);

      const products = await Product.findAll({
        where: { id: req.body.productIds },
      });
      tagData.products = products;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
      include: [{ model: Product, through: ProductTag }],
    });
    if (tagData === 0) {
      res.status(400).json({ message: "Tag not found" });
    }

    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, include: [Tag] }],
    });

    const updatedTag = {
      id: tag.id,
      tag_name: tag.tag_name,
      products: tag.Products,
    };
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const deletedData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedData) {
      res.status(400).json({ message: "tag is not found" });
      return;
    }
    res.status(200).json({ message: "tag is deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
