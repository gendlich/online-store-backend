CREATE TABLE orders ( 
    id SERIAL PRIMARY KEY, 
    product_id INTEGER REFERENCES product(id), 
    product_quantity INTEGER, 
    user_id INTEGER REFERENCES users(id), 
    order_status VARCHAR(8)
);