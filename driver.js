import { Tree, prettyPrint } from './tree.js';

function createRandomArray() {
    let array = [...Array(10)].map(e => Math.floor(Math.random() * 100));
    console.log(array);
    return array;
}


const tree = new Tree(createRandomArray());
console.log(tree.isBalanced());
console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.inorder());
for(let i = 0; i < 5; i++) {
    tree.insert(Math.floor(Math.random() * 100));
}
console.log(tree.isBalanced());
prettyPrint(tree.root);
tree.rebalance();
console.log(tree.isBalanced());
prettyPrint(tree.root);

