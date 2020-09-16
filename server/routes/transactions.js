const express = require('express');
const router = express.Router();
const {getTransactions, postTransactions, putTransactions, deleteTransactions} = require('../controllers/transactionController');


router
    .route('/')
    .get(getTransactions)
    .post(postTransactions);

router
    .route('/:id')
    .patch(putTransactions)
    .delete(deleteTransactions);

module.exports = router;