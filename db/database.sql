-- ========================================================================================
-- create the user for the db
-- ========================================================================================
create role 'admin' with login superuser password 'password';

-- ========================================================================================
-- create the db
-- ========================================================================================
create database employees owner admin;


-- ========================================================================================
-- connect to the db
-- ========================================================================================
\c employees;


-- ========================================================================================
-- create the table for the employee api
-- ========================================================================================
create table public.employees (
  id bigint generated always as identity,
  first_name text not null default '',
  last_name text not null default '',
  hired_at timestamp not null default current_timestamp,
  salary numeric(15, 2) not null default 0.00,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);


-- ========================================================================================
-- create test data
-- ========================================================================================
insert into employees (first_name, last_name, hired_at, salary)
values
('Daniel', 'Long', current_timestamp, 100000.00),
('Blair', 'Long', current_timestamp, 62000.00),
('Tony', 'Breeding', current_timestamp, 70000.00),
('Lorie', 'Breeding', current_timestamp, 45000.00),
('Frank', 'Bleeker', current_timestamp, 92000.00),
('Wendy', 'Bleeker', current_timestamp, 55000.00),
('Ben', 'Caldwell', current_timestamp, 101000.00);
