const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const prodcategoryRouter = require("./routes/prodCategoryRoute");
const blogcategoryRouter = require("./routes/blogCategoryRoute");
const brandRouter = require("./routes/brandRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
//const swaggerJsDoc = require("swagger-jsdoc"); // Not required for now
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5000;
const SERVER_BASE_URL = process.env.SERVER_BASE_URL || `http://localhost${PORT}`;
const app = express();
dbConnect();


// Load and merge YAML files dynamically
const swaggerFolderPath = path.join(__dirname, 'swagger');
const swaggerFiles = fs.readdirSync(swaggerFolderPath);

// Load all YAML files in the swagger folder
const swaggerDocs = swaggerFiles.map(file => YAML.load(path.join(swaggerFolderPath, file)));

// Merge all YAML objects into one
const combinedSwaggerDocs = Object.assign({}, ...swaggerDocs);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(combinedSwaggerDocs));


/*
// Swagger definition options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Specifies version 3.0.0 of OpenAPI
    info: {
      title: "FabFusion REST Backend API",
      version: "1.0.0",
      description: "API documentation for the e-commerce website - FabFusion",
      contact: {
        name: "Sattwikee Ghosh",
        url: "https://sattwikeeghosh.vercel.app/",
        email: "sattwikeeghosh95@gmail.com",
      },
    },
    servers: [
      {
        url: `${SERVER_BASE_URL}/api`, // URL for your local server
        description: "Local server",
      },
    ],
  },
  // Define where Swagger should look for routes to document
  apis: ["./routes/*.js"], // Path to your API files
};

// Initialize Swagger docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
*/

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // parses cookie at other endpoints

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/prodcategory", prodcategoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
    console.log(`Swagger UI is available at ${SERVER_BASE_URL}/api-docs`);
});