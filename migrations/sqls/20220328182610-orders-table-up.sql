CREATE TABLE orders ( 
    id SERIAL PRIMARY KEY, 
    procuct_id INTEGER,
    CONSTRAINT product_id
        FOREIGN KEY(id) 
            REFERENCES product(id), 
    product_quantity INTEGER, 
    user_id INTEGER,
    CONSTRAINT user_id 
        FOREIGN KEY(id)
            REFERENCES users(id), 
    order_status VARCHAR(8)
);
