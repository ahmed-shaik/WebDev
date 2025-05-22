-- CREATE TABLE USER (
--     id VARCHAR(50) PRIMARY KEY,
--     username VARCHAR(100) UNIQUE,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     PASSWORD VARCHAR(100) NOT NULL
-- );

alter table user change column PASSWORD password varchar(100) not null;