var express = require ('express');
var app = express();
var PORT = 3000;
var bodyParser = require ('body-parser');
var userDao = require('./UserDAO');
var productDao = require('./ProductDAO');
var projectDao = require('./ProjectDAO');
var categoryDao = require('./CategoryDAO');
var subcategoryDao = require('./SubcategoryDAO');
const { addNewProject } = require('./ProjectDAO');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use((req, res, next)=> {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    next();
});

app.get("/", function (req, res) {
    res.send('zuteks')
});

//Products

app.get("/all/products", productDao.getAll);
app.get("/all/furniture", productDao.getAllFurniture);
app.get("/all/curtains", productDao.getAllCurtains);
app.get("/all/bedsheets", productDao.getAllBedSheets);
app.get("/all/tablecloths", productDao.getAllTablecloths);

app.get("/all/products/category/subcategory", productDao.getProductsWithCategory);

app.post("/product/search", productDao.searchProducts);

//app.post("/products/add-to-basket", productDao.addProductToBasket);
app.post("/products/add-to-wishlist", productDao.addProductToWishlist);
app.post("/products/order", productDao.saveOrdersForUser);

app.get("/projects/count", productDao.getProjectsCount);

app.post("/new/product", productDao.addNewProduct);

app.delete("/product/remove", productDao.removeProduct);

//Basket/Wishlist for user

app.get("/basket/products", productDao.getBasketForUser);
app.get("/wishlist/products", productDao.getWishlistForUser);

app.delete("/wishlist/remove", productDao.removeFromWishlist);
app.delete("/product//wishlist/remove", productDao.removeFromWishlistOnProductPage);
app.post("/products/basket", productDao.addProductToBasket);

//Finished orders

app.get("/ordered/products", productDao.getOrderForUser);
app.delete("/basket/delete", productDao.deleteFromBasket)
app.get("/orders/count", productDao.getOrdersCount);

//Projects

app.get("/all/projects", projectDao.getAllProjects);
app.get("/last-three-projects", projectDao.getLastThree);

app.delete("/project/remove", projectDao.removeProject);

app.post("/new/project", projectDao.addNewProject);

//Categories

app.get("/all/categories", categoryDao.getAllCategories);

//Subcategories

app.get("/all/subcategories", subcategoryDao.getAllCategories);

//User

app.post("/user/register", userDao.register);

app.post("/user/login", userDao.login);

app.get("/all/users", userDao.getAllUsers);
app.get("/users/count", userDao.getUsersCount);

app.delete("/user/remove", userDao.removeUser);

app.listen(PORT, function() {
    console.log('Application is started '+ PORT);
    
});