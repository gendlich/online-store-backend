# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index (/product/) GET
- Show  (/product/:id) GET
- Create (/product/) POST [token required]
- [OPTIONAL] Top 5 most popular products (/popular/) GET
- [OPTIONAL] Products by category (args: product category) (/category/:category) GET

#### Users
- Index (/user/) GET [token required]
- Show (/user/:id) GET [token required]
- Create (/user/) POST [token is generated]
- Delete (/user/:id) DELETE [token required]

#### Orders
- CREATE (/order/) POST [token required]
- INDEX (/order/:id) GET (args: user id)[token required]
- Current Order by user (/order/:id/active) GET (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (/order/:id/complete) GET (args: user id)[token required]

## Data Shapes
#### Product
-  id   INTEGER PK
- name  VARCHAR
- price INTEGER
- [OPTIONAL] category   VARCHAR

#### User
- id    INTEGER PK
- firstName VARCHAR
- lastName  VARCHAR
- password  VARCHAR

#### Orders
- id    INTEGER PK
- product_id   INTEGER FK (REFERENCES TO Product.ID)
- product_quantity  INTEGER
- user_id      INTEGER FK (REFERENCES TO User.ID)
- status of order VARCHAR(8) (active or complete)

