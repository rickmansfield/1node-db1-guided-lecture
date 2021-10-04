# Introduction to Relational Databases, SQL and Knex

In this project we will cover the basics of `Structure Query Language (SQL)`, `Relational Databases`, and `Knex.js Queries`.

- [Introduction to Relational Databases, SQL and Knex](#introduction-to-relational-databases-sql-and-knex)
  - [Prerequisites](#prerequisites)
  - [Project Setup](#project-setup)
  - [Handy Query Notes & examples](#handy-query-notes--examples)

## Prerequisites

- [SQLite Studio Installed](https://sqlitestudio.pl/index.rvt?act=download).
- [This Web SQL Tool Loaded in a chrome or chromium browser tab](https://www.w3schools.com/Sql/trysql.asp?filename=trysql_select_all). It does not work well on Firefox.

## Project Setup

- [ ] clone this repository.
- [ ] move into the project folder.
- [ ] type `npm i` to download dependencies.

## Handy Query Notes & examples
[W3Schools.com](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all)
- ``` SELECT (lastname || ',' || firstname ) AS FullName from employees; ```
- ``` SELECT (Address || ',' || ' ' || City || ',' || ' ' || PostalCode || ',' || ' ' || Country) AS FullAddress FROM Customers; ```
- ``` SELECT * FROM Customers WHERE Country = 'Spain'; ```
- ``` SELECT * FROM Customers WHERE Country LIKE 'Spain'; ```
- ``` SELECT * FROM Customers WHERE Country LIKE '%land'; ```
- ``` SELECT * FROM Customers WHERE Country not LIKE '%land'; ``` 
- ``` SELECT * FROM Employees WHERE Notes not LIKE '%university%'; ```
- ``` SELECT * FROM Products WHERE CategoryID = 1; ```
- ``` SELECT * FROM Orders WHERE OrderDate >'1997-01-01'; ```
- ``` SELECT * FROM Orders WHERE OrderDate >'1997-01-01' ORDER BY OrderDate DESC; ```
- ``` SELECT * FROM Orders WHERE OrderDate >'1997-01-01' ORDER BY OrderDate ASC, customerID ASC; ```
- 7 ``` SELECT * FROM Products ORDER BY CategoryID ASC, Price DESC; ```

- ``` INSERT INTO Shippers (ShipperName, Phone) VALUES ('blah', '(123) 456-7890'); ```
- 8 ``` INSERT INTO Shippers (ShipperName) VALUES ('UPS'); -- You have made changes to the database. Rows affected: 1 was the response and the empty phone field has null in it now ```

- ``` UPDATE Shippers SET ShipperName = 'United Parcel Service' WHERE ShipperID = 4; ```
- 9 ``` UPDATE Shippers SET ShipperName = 'USPO', Phone = '(123) 456-7890' WHERE ShipperID = 4; ```

- 10 ``` DELETE FROM Shippers WHERE ShipperID = 5; ``` --note ID's are not recycled 