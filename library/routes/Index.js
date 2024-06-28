const express = require('express');
const mainRouter = express.Router();
const bookRouter = require('../routes/bookRoutes');

const connectRoutes = app => {
    app.use('/api/v1', mainRouter);
    mainRouter.use('/routes/booksRouters',bookRouter);
   
}

module.exports = connectRoutes;