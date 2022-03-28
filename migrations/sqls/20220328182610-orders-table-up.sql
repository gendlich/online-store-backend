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