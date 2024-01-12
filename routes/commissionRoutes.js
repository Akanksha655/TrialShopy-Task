const express = require('express');
const router = express.Router();
const commissionController = require('../controllers/commissionController');

router.get('/:merchantId/commission', commissionController.getCommission);
router.put('/:merchantId/commission', commissionController.updateCommission);

module.exports = router;
