# Binary Search Tree (TOP)
Implementation of binary search tree in JavaScript.

Includes the following methods:

```Node``` - class/factory that contains an attribute for data it stores and left and right children.

```Tree``` - class/factory which accepts an array when initialized and contains a root attribute.

```buildTree``` - method that takes an array and turns it into a balanced tree full of Node objects; returns the level-0 root node.

```insert``` - method that accepts a value to insert.

```delete``` - method that accepts a value to delete.

```find``` - method which accepts a value and returns the node with the given value.

```levelOrder``` - method which accepts another function as a parameter; returns an array of values in level order if no function is given.

```inorder``` - method which accepts another function as a parameter; returns an array of values in order if no function is given.

```preorder``` - method which accepts another function as a parameter; returns an array of values  in preorder if no function is given.

```postorder``` - method which accepts another function as a parameter; returns an array of values in post order if no function is given.

```height``` - method which accepts a node and returns its height (height is defined as the number of edges in the longest path from a given node to a leaf node). 

```isBalanced``` - method that checks if the tree is balanced.

```rebalance``` - method that rebalances an unbalanced tree.

