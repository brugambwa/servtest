var express = require('express');
var router = express.Router();

var auth = require('../controllers/authController.js');
var payments = require('../controllers/paymentsController.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.post('/api/v1/requestpayment', payments.requestPayment);
router.get('/api/v1/transactionstatus/:id', payments.getTransactionStatus);
router.put('/api/v1/updatetransaction/', payments.updateTransaction);

module.exports = router;
