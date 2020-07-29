var conn = require('./connection');

module.exports = {

    getAllCategories: function (req, res) {
        conn.query('SELECT * FROM PRODUCT_CATEGORY', function (err, results){
            if(err) return res.send(err);
            res.status(200).json(results);
        });
    }
}
