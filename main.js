import { Tree, prettyPrint }  from './tree.js';

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree.isBalanced());
prettyPrint(tree.root);
tree.insert(2);
prettyPrint(tree.root);
tree.insert(8);
prettyPrint(tree.root);
tree.insert(10);
prettyPrint(tree.root);
tree.insert(11);
prettyPrint(tree.root);
tree.delete(2);
prettyPrint(tree.root);
tree.delete(4);
prettyPrint(tree.root);
tree.delete(8);
prettyPrint(tree.root);
tree.delete(3);
prettyPrint(tree.root);
console.log(tree.find(11));
console.log(tree.find(67));
console.log(tree.find(453));
console.log(tree.levelOrder());
console.log(tree.inorder());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.height(tree.root));
console.log(tree.depth(23));
console.log(tree.isBalanced());
tree.rebalance();
prettyPrint(tree.root);
console.log(tree.isBalanced());
