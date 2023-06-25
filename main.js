import { Tree, prettyPrint }  from './tree.js';

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);
tree.insert(2);
prettyPrint(tree.root);
tree.insert(8);
prettyPrint(tree.root);
tree.insert(10);
prettyPrint(tree.root);
tree.insert(11);
prettyPrint(tree.root);