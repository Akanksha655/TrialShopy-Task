const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');

router.get('/:merchantId/payments', paymentsController.getPayments);
router.post('/:merchantId/payments', paymentsController.recordPayment);

module.exports = router;
