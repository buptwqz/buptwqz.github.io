---
title: MySQL报错合集
date: 2024-7-28
updated: 2025-3-10
categories: MySQL
tags:
  - 后端开发
  - MySQL
top: 1
---
###### mysql服务无法启动 服务没有报告任何错误 解决方法
1.查看C:\Windows\System32\drivers\etc\hosts 文件，localhost地址有无修改

2.安装路径下若没有my.ini文件，可在安装路径下新建一个my.ini文件，内容如下：
```
[mysql]
default-character-set=utf8
[mysqld]
port=3306
basedir=D:\Program Files\MySQL\MySQL Server 8.0
datadir=D:\Program Files\MySQL\MySQL Server 8.0\data
max_connections=200
character-set-server=utf8
default-storage-engine=INNODB
```
![pic](../../public/mysql-myini.png)

若手动创建可能出错

3.初始化MySQL服务
```

进入bin目录，输入mysqld --initialize-insecure\

输入net start mysql启动服务
