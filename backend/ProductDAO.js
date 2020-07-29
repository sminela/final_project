var conn = require('./connection');

function saveOrderItems(request) {
    return new Promise(function(resolve, reject) {
        conn.query('INSERT INTO basket set ?', [{product_id: request.product_id, user_id: request.user_id}], function (err, results){
            if(err) return reject(err);
            resolve(results.insertId);
        });
    });
};

function addToBasket(request) {
    return new Promise(function(resolve, reject) {
        conn.query('INSERT INTO LIST_BASKET SET ?', [{product_id: request.product_id, user_id: request.user_id, whereTo: request.whereTo}], function (err, results) {
            if(err) return reject(err);
            resolve(results.insertId)
        });
    })
}

function deleteBasketItem(id) {
    return new Promise(function(resolve, reject) {
        conn.query('DELETE FROM list_basket where id=?', [id], function (err, results){
            if(err) return reject(err);
            resolve(id);
        });
    });
};

function updateSoldProduct(id) {
    return new Promise(function(resolve, reject) {
        conn.query("UPDATE product SET soldInd='1' where id=?", [id], function (err, results){
            if(err) return reject(err);
            resolve(id);
        });
    });
};

function addInBasketProduct(id) {
    return new Promise(function(resolve, reject) {
        conn.query("UPDATE product SET isInBasket='1' where id=?", [id], function (err, results){
            if(err) return reject(err);
            resolve(id);
        });
    });
};

module.exports = {

    getAll: function (req, res) {
        conn.query('SELECT * FROM PRODUCT', function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results);
        });
    },

    getAllFurniture: function (req, res) {
        conn.query('SELECT * FROM PRODUCT WHERE product_category_id = 1', function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results);
        });
    },

    getAllCurtains: function (req, res) {
        conn.query('SELECT * FROM PRODUCT WHERE product_category_id = 2', function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results);
        })
    },

    getAllBedSheets: function (req, res) {
        conn.query('SELECT * FROM PRODUCT WHERE product_category_id = 3', function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results);
        })
    },

    getAllTablecloths: function (req, res) {
        conn.query('SELECT * FROM PRODUCT WHERE product_category_id = 4', function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results);
        })
    },

    getProjectsCount: function(req, res){
        conn.query('SELECT COUNT (*) as projectsNumber FROM project ', function(err, results){
            if(err) return res.send(err);
            res.status(200).json(results);
        });
    },

    getOrdersCount: function(req, res){
        conn.query('SELECT COUNT (*) as ordersNumber FROM basket ', function(err, results){
            if(err) return res.send(err);
            res.status(200).json(results);
        });
    },

    addProductToWishlist: function(req, res) {
        const product = req.body;
        conn.query('INSERT INTO LIST_BASKET SET ?', [product], function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results.insertId)
        });
    },

    getBasketForUser: function (req, res) {
        const id = req.query.user_id;
        conn.query('SELECT b.id as mapId, p.* FROM LIST_BASKET b JOIN PRODUCT p ON b.product_id=p.id where b.whereTo="BASKET" and b.user_id=?', [id], function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json(results);
        })
    },

    getProductsWithCategory: function (req, res) {
        conn.query('SELECT c.name as categoryName, s.name as subcategoryName, p.* FROM product p JOIN product_subcategory s on s.id=p.product_subcategory_id JOIN product_category c on c.id=s.product_category_id ', function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json(results);
        })
    },

    getWishlistForUser: function (req, res) {
        const id = req.query.user_id;
        conn.query('SELECT b.id as mapId, p.* FROM LIST_BASKET b JOIN PRODUCT p ON b.product_id=p.id where b.whereTo="WISHLIST" and b.user_id=?', [id], function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json(results);
        })
    },

    getOrderForUser: function (req, res) {
        const id = req.query.user_id;
        conn.query('SELECT p.* from BASKET b JOIN PRODUCT p ON b.product_id=p.id where b.user_id=?', [id], function(err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json(results);
        });
    },

    removeFromWishlist: function (req, res) {
        const id = req.query.id;
        conn.query('DELETE FROM LIST_BASKET WHERE id=? and whereTo="wishlist"', [id], function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json({message: 'Uspjesno obrisan proizvod'})
        })
    },

    removeFromWishlistOnProductPage: function (req, res) {
        const id = req.query.id;
        conn.query('DELETE FROM LIST_BASKET WHERE product_id=? and whereTo="wishlist"', [id], function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json({message: 'Uspjesno obrisan proizvod'})
        })
    },

    addProductToBasket: async function (req,res) {
        const request = req.body;
        try {
            const basketId = await addToBasket(request)
           
           await addInBasketProduct(request.product_id);
            res.status(200).json({id:basketId});
            
        }catch(err) {
            res.status(500).send(err);
        }
        
    },

    saveOrdersForUser: async function (req,res) {
        const request = req.body;
        try {
            const basketId = await saveOrderItems(request)
            const mapId = await deleteBasketItem(request.mapId);
            await updateSoldProduct(request.product_id);
            res.status(200).json({id:basketId, mapId:mapId});
            console.log(mapId);
        }catch(err) {
            res.status(500).send(err);
        } 
    },

    deleteFromBasket: function(req, res){
        const id= req.query.id;
        conn.query('DELETE FROM LIST_BASKET WHERE id=?', [id], function(err, results) {
            if(err) return res.send(err);
            res.status(200).json({messaage:'Successfully deleted product'})
        })
    },

    removeProduct: function (req, res) {
        const id = req.query.id;
        conn.query('DELETE FROM product WHERE id=?', [id], function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json({message: 'Uspjesno obrisan proizvod'})
        })
    },

    addNewProduct: function(req, res) {
        const product = req.body;
        conn.query('INSERT INTO product SET ?', [product], function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results.insertId)
        });
    },



    searchProducts: function (req, res) {
        const searchProduct = req.body;
        let productCategoryIds = [];
        let productSubcategoryIds = [];
        let query = "SELECT * FROM PRODUCT WHERE 1=1 ";
        if(searchProduct.priceFrom) {
            query +=  `AND PRICE >= '${searchProduct.priceFrom}'`
        }
        if(searchProduct.priceTo) {
            query += `AND PRICE <= '${searchProduct.priceTo}'`
        }
        if(searchProduct.category1) {
            productCategoryIds.push(1);
        }
        if(searchProduct.category2) {
            productCategoryIds.push(2);
        }
        if(searchProduct.category3) {
            productCategoryIds.push(3);
        }
        if(searchProduct.category4) {
            productCategoryIds.push(4);
        }
        if(productCategoryIds.length > 0) {
            query += `AND product_category_id in (${productCategoryIds.toString()})`;
        }

        if(searchProduct.subcategory1) {
            productSubcategoryIds.push(1);
        }
        if(searchProduct.subcategory2) {
            productSubcategoryIds.push(2);
        }
        if(searchProduct.subcategory3) {
            productSubcategoryIds.push(3);
        }
        if(searchProduct.subcategory4) {
            productSubcategoryIds.push(4);
        }
        if(searchProduct.subcategory5) {
            productSubcategoryIds.push(5);
        }
        if(searchProduct.subcategory6) {
            productSubcategoryIds.push(6);
        }
        if(searchProduct.subcategor7) {
            productSubcategoryIds.push(7);
        }
        if(searchProduct.subcategory8) {
            productSubcategoryIds.push(8);
        }
        if(searchProduct.subcategory9) {
            productSubcategoryIds.push(9);
        }
        if(searchProduct.subcategory10) {
            productSubcategoryIds.push(10);
        }
        if(searchProduct.subcategory11) {
            productSubcategoryIds.push(11);
        }
        if(searchProduct.subcategory12) {
            productSubcategoryIds.push(12);
        }
        if(productSubcategoryIds.length > 0) {
            query += `AND product_subcategory_id in (${productSubcategoryIds.toString()})`;
        }
        conn.query(query, function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results);
        });
    }

};