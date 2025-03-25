---
title: JVM运行机制及原理
date: 2025-3-10
updated: 2025-3-25
categories: Java
tags:
  - 后端开发
  - Java
top: 1
---

###### JVM线程：守护线程和普通线程
守护线程是JVM自己使用的线程，比如垃圾回收（GC）就是一个守护线程。  
普通线程一般是Java程序的线程，只要JVM中有普通线程在执行，那么JVM就不会停止。  

###### JVM结束生命周期
1. System.exit()
2. 程序正常执行结束
3. 程序在执行过程中遇到了异常或错误而异常终止
4. 操作系统出现错误而导致Java虚拟机进程终止

###### JVM类加载器
1. Bootstrap ClassLoader 启动类加载器
2. Extension ClassLoader 扩展类加载器
3. Application ClassLoader 应用程序类加载器
4. Custom ClassLoader 自定义类加载器

类加载过程：  
1. 加载 导入二进制信息
2. 连接 
2.1 验证 确保二进制信息符合JVM规范
2.2 准备 为类变量分配内存并设置初始值
2.3 解析 把类中的符号引用转换为直接引用

