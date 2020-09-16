const Transaction = require('../models/Transaction');


// GET ALL TRANSACTIONS to /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        }); 
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// POST TRANSACTION to /api/v1/transactions
exports.postTransactions = async (req, res, next) => {
    try {   
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
        success: true,
        data: transaction
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }

}

// PUT TRANSACTION to /api/v1/transactions/:id
exports.putTransactions = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.findById(req.params.id);
        
        if(!transaction) {
            return res.status(404).json({
                sucess: false,
                error: 'No transaction found'
            });
        }

		if (text) {
			transaction.text = req.body.text
		}

		if (amount) {
			transaction.amount = req.body.amount
		}

		await transaction.save();
        return res.status(200).json({
            success: true,
            data: transaction
        });
	} catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        })
	}
}

// DELETE TRANSACTION to /api/v1/transactions/:id
exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction) {
            return res.status(404).json({
                sucess: false,
                error: 'No transaction found'
            });
        }
        await transaction.remove();
        return res.status(200).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}