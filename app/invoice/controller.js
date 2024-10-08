const {subject} = require('@casl/ability');
const Invoice = require('./model');
const {policyFor} = require('../../utils/index');

const show = async(req, res, next) => {
    try {
        let policy = policyFor(req.user);
        let subjectInvoice = subject('Invoice', {...invoice, user_id: invoice.user._id});
        if(!policy.can('read', subjectInvoice)){
            return res.json({
                error: 1,
                message: 'Anda tidak memiliki akses melihat invoice ini'
            })
        }
        let {order_id} = req.params;
        let invoice = await Invoice.findOne({order: order._id}).populate('order').populate('user');
    } catch (err) {
        return res.json({
            error: 1,
            message: 'gagal mendapatkan invoice'
        });
    }
}

module.exports = {show}