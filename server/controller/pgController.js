const model = require('../model/pgModel');

module.exports = {
  getProductById: (req, res) => {
    const { productID } = req.query;
    if (productID === undefined) {
      res.status(400).json({
        message: 'Bad request - must include productID',
      });
    } else {
      model.getProductById(productID)
        .then((product) => {
          res.status(200).json({
            message: 'Successfully retrieved product',
            product: product.rows,
          });
        })
        .catch((err) => res.status(400).json({
          message: 'Failed to find product',
          error: err,
        }));
    }
  },

  getReviewsById: (req, res) => {
    const { productID } = req.query;
    if (productID === undefined) {
      res.status(400).json({
        message: 'Bad request - must include productID',
      });
    } else {
      model.getReviewsById(productID)
        .then((reviews) => {
          res.status(200).json({
            message: 'Successfully retrieved reviews',
            reviews: reviews.rows,
          });
        })
        .catch((err) => res.status(400).json({
          message: 'Failed to find reviews',
          error: err,
        }));
    }
  },

  getImagesById: (req, res) => {
    const { productID } = req.query;
    if (productID === undefined) {
      res.status(400).json({
        message: 'Bad request - must include productID',
      });
    } else {
      model.getImagesById(productID)
        .then((images) => {
          res.status(200).json({
            message: 'Successfully retrieved images',
            images: images.rows,
          });
        })
        .catch((err) => res.status(400).json({
          message: 'Failed to find images',
          error: err,
        }));
    }
  },
};
