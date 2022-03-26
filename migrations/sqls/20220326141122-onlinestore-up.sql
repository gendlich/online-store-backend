/* Replace with your SQL commands */
CREATE TABLE users ( 
    id SERIAL PRIMARY KEY, 
    firstName VARCHAR, 
    lastName VARCHAR, 
    password VARCHAR
);

CREATE TABLE product ( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR, 
    price INTEGER, 
    category VARCHAR
);

CREATE TABLE orders ( 
    id SERIAL PRIMARY KEY, 
    CONSTRAINT product_id
        FOREIGN KEY(id) 
            REFERENCES product(id), 
    product_quantity INTEGER, 
    CONSTRAINT user_id 
        FOREIGN KEY(id)
            REFERENCES users(id), 
    order_status VARCHAR(8)
);