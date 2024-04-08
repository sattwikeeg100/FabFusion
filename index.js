const express = require('express')
const dbConnect = require('./config/dbConnect')
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const prodcategoryRouter = require('./routes/prodCategoryRoute');
const blogcategoryRouter = require('./routes/blogCategoryRoute');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express()
dbConnect();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // parses cookie at other endpoints

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/prodcategory', prodcategoryRouter);
app.use('/api/blogcategory', blogcategoryRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})