const router = require('express').Router();

const productController = require('../controllers/productController');

const upload = require('../middlewares/uploader');
const autentikasi = require('../middlewares/authenticate');
const checkOwnership = require('../middlewares/checkOwnership');

router.post('/', autentikasi, upload.array('images'), productController.createProduct);
router.get('/', autentikasi, productController.findProducts);
router.get('/:id', productController.findProductById);
router.patch('/:id', productController.UpdateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
