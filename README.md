# FabFusion REST Backend API

## Overview

**FabFusion** is a robust RESTful API designed for an e-commerce platform. It provides endpoints for managing products, categories, brands, blogs, and user authentication, making it a comprehensive solution for building a dynamic online store.

## Features

- **User Authentication**: Secure user login and registration.
- **Product Management**: Create, read, update, and delete products.
- **Category Management**: Manage product and blog categories.
- **Blog Functionality**: Create and manage blogs with likes and comments.
- **Brand Management**: Manage product brands.
- **Coupon System**: Create and manage discount coupons.
- **File Uploads**: Upload and delete images.
- **Swagger Documentation**: Interactive API documentation available at `/api-docs`.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Fast, unopinionated web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **Swagger UI**: API documentation interface.
- **dotenv**: Module to load environment variables.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running instance or cloud database)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fabfusion
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   SERVER_BASE_URL=http://localhost:5000
   MONGO_URI=<your-mongo-db-uri>
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the API documentation:
   Open your browser and navigate to `http://localhost:5000/api-docs`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.
