const   express = require('express');
        router = express.Router();
        CustomerController = require('../controllers/customer.controller')


router.get('/getAll', CustomerController.getAll);
router.post('/create', CustomerController.create);
router.put('/update', CustomerController.update);
router.delete('/:id*?', CustomerController.delete);

module.exports = router;