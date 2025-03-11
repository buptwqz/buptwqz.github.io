---
title: Java算法ACM模式模板
date: 2025-03-10
updated: 2025-03-11
categories: Java
tags:
  - 后端开发
  - Java
top: 1
---
###### ACM模式构建二叉树
```java
import java.util.Scanner;
public class Solution {
    static class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      public TreeNode(int x) {
          this.val = x;
          this.left = null;
          this.right = null;
      }
    }

    public TreeNode buildTree(final int[] arr) {
        List<TreeNode> treeNodeList = arr.length > 0 ? new ArrayList<>(arr.length) : null;
        TreeNode root = null;
        for(int i=0; i<arr.length; i++) {
            TreeNode node = null;
            if(arr[i] != -1) {
                node = new TreeNode(arr[i]);
            }
            treeNodeList.add(node);
            if(i == 0) {
                root = node;
            }
        }

        for(int i=0; i*2+1<arr.length; i++) {
            TreeNode node = treeNodeList.get(i);
            if(node != null) {
              node.left = treeNodeList.get(i*2+1);
              if(i*2+2<arr.length) {
                  node.right = treeNodeList.get(i*2+2);
              }
            }
        }
        return root;
    }
}
```
