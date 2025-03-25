---
title: SQL常用语句
date: 2025-03-10
updated: 2025-03-11
categories: MySQL
tags:
  - 后端开发
  - MySQL
top: 1
---

###### 登录
``` 
mysql -u root -p
```
###### 查看数据库
```
show databases;
```
###### 新建数据库
```
create database database_name;
```
###### 选择数据库
```
use database_name;
```
###### 从文件引入SQL语句
```
source file_name.sql;
```
###### 删除数据库
```
drop database database_name;
```
- drop指的是丢弃数据，直接将表删除。
- truncate指的是清空数据，但是表结构还在。
- delete指的是删除数据，但是表结构还在。
- truncate和drop是DDL语句，delete是DML语句，DDL语句会立即生效不能回滚，DML语句会先将数据写入redo log，然后再写入binlog，然后再执行。
###### 查看表
```
show tables;
```
###### 新建表
```
create table table_name(
    ID CHAR(5),
    name VARCHAR(20) NOT NULL,
    dept_name VARCHAR(20),
    salary NUMERIC(8,2),
    PRIMARY KEY (ID));
```
###### 描述表
```
describe table_name;
```
###### 删除表
```
drop table table_name;
```
###### 插入数据
```
insert into table_name(ID,name,dept_name,salary) values('1','John','Sales',10000);

