import { Tree, prettyPrint } from './tree.js';

function createRandomArray() {
    let array = [...Array(10)].map(e => Math.floor(Math.random() * 100));
    console.log(array);
    return array;
}


const tree = new Tree(createRandomArray());
console.log('Balanced: ' + tree.isBalanced());
console.log('Level Order: ' + tree.levelOrder());
console.log('Preorder: ' + tree.preorder());
console.log('Postorder: ' + tree.postorder());
console.log('Inorder: ' + tree.inorder());
for(let i = 0; i < 5; i++) {
    tree.insert(Math.floor(Math.random() * 100));
}
console.log('Balanced: ' + tree.isBalanced());
prettyPrint(tree.root);
tree.rebalance();
console.log(tree.isBalanced());
prettyPrint(tree.root);
console.log('Level Order: ' + tree.levelOrder());
console.log('Preorder: ' + tree.preorder());
console.log('Postorder: ' + tree.postorder());
console.log('Inorder: ' + tree.inorder());

