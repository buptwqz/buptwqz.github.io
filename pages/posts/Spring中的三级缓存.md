---
title: ArrayList和LinkedList中的transient关键字和序列化
date: 2025-04-02
updated: 2025-04-02
categories: 后端开发
tags:
  - Java
  - 后端开发
top: 1
---
#### ArrayList和LinkedList中的一些变量被transient修饰
ArrayList里的elementData数组被transient修饰，LinkedList里的first和last被transient修饰。  
#### 序列化和反序列化
序列化是java提供的一种将内存中的对象信息转化为二进制数组的方法，可以将数组保存和传输，然后使用原来的类模板恢复对象的信息。
转化后的二进制数组中包含以下信息：序列化版本，完整类名，serialVersionUID，各个属性的类型、名字和值、父类信息。
#### 实现方式
实现Serializable接口，使用ObjectOutputStream.writeObject(Object Object)写对象信息，使用ObjectInputStream.readObject()读对象信息。
#### transient关键字
被transient修饰的成员变量不会被序列化。
1.为了节省存储空间和传输空间，有的变量可能不需要序列化。
2.持有引用的对象可以不被序列化，因为序列化后内存地址变了，这种情况下我们需要重新建立引用。
#### ArrayList和LinkedList中的transient关键字和序列化
ArrayList中使用数组transient Object[] elementData保存数据，当数组空间不够时，数组长度扩容为原来的1.5倍。那么数组中可能有没有使用的空间，比如elementData的长度时15，但是里面只装了11个元素，那么后面的4个元素都是空值。序列化的时候可以不把这4个元素序列化。  
ArrayList中定义了writeObject和readObject方法，实现了自定义序列化。序列化的时候，ObjectStream会判断类中有没有自定义序列化方法。如果有，使用自定义序列化方法：否则使用默认的序列化方法。  
LinkedList中使用双向链表保存数据，结点中保存前驱和后继的引用。但是序列化之后前序结点和后继结点的地址都变了，我们应该连接新的结点。LinkedList序列化的时候将链表按顺序拆分开来，仅序列化结点中保存的数据，反序列化的时候重新连接链表，保证了链表的有效性。

