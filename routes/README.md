# Getters

### GET /product

Retrieves all products from the database.

- Response:

  - Status: 200 (OK)
  - An **array** of product objects, containing:
    <br>

Example:

```
[
  {
    "_id": ObjectId('123abc12ab123a12baac')
    "title": "Some Product",
    "description": "This is a description for a product.",
    "__v": 0
  }
]
```

### GET /product/:id

Retrieves a specific product from the database based on the provided ID.

- Request:
  - Parameters:
    - `id` (string): The ID of the product to retrieve.
- Response:
  - Status: 200 (OK)
  - JSON: Product object
- Errors:
  - Status: 400 (Bad Request)
  - JSON: Error message

Please note that the routes are defined using the Express.js framework and the corresponding controller functions `getAllProducts` and `getProductById` are imported from the `../controllers/index.js` file.
