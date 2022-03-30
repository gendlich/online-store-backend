# Storefront Backend Project

## Create a .env file in this model:
`POSTGRES_HOST=localhost`
`POSTGRES_DB=(database_name)`
`POSTGRES_TEST_DB=(database_name_test)`
`POSTGRES_USER=(user_name)`
`POSTGRES_PASSWORD=(user_password)`
`ENV=dev`
`JWT_SECRET=(some_secret)`
`BCRYPT_SECRET=(another_secret)`
`SALT_ROUNDS=10`
`PORT=3000`
## Setup using Postgres and Docker:

1. `docker pull postgres` to get a Postgres Image
2. `docker-compose-up` to run the container 
3. `docker ps` to get the container ID
4. `docker exec -it containerID bash` to open a bash shell in the container
5. `psql -U user_name -d database_name` connect to the database_name in the container
6. `db-migrate up` will migrate the tables
   `db-migrate down` will delete the tables

## Important:

-The server will run on PORT 3000 but it can be changed on .ENV file.
-The Postgres Container is running on port 5432
-To setup all the libs needed use `npm install`
-Every endpoint is listed on **REQUIRIMENTS.md**

## NPM scripts:

- `npm run build` to compile from TypeScript to JavaScript
- `npm run start` to start the server
- `npm run test` to run tests with jasmine
 