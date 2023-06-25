import Node from './node.js';
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

class Tree {

    root;

    constructor(array = null) {
        this.array = array;
        // let sortedArray = this.array.slice();
        this.array.sort((a,b) => {
            return a - b;
        });
        this.array = this.array.filter((val, index) => {
            return this.array.indexOf(val) === index;
        });
        this.root = this.buildTree();;
    }

    get root() {
        return this.root;
    }

    set setRoot(node) {
        this.root = node;
    } 

    buildTree(array = this.array, left = 0, right = array.length -1) {
        if (right < left) {
            return null;
        }
        let mid = Math.floor((left + right)/2);

        let node = new Node(array[mid]);

        node.setLeft = this.buildTree(array, left, mid - 1);

        node.setRight = this.buildTree(array, mid + 1, right);

        return node;
    }

    insert(value, node = this.root) {
        if(node === null) {
            return;
        }
        if(value < node.data && node.left === null) {
            node.left = new Node(value);
        }
        if(value > node.data && node.right === null) {
            node.right = new Node(value);
        }
        if(node.data === value) {
            return;
        }
        if(value > node.data) {
            this.insert(value, node.right);
        }
        if(value < node.data) {
            this.insert(value, node.left);
        }
    }
}

export { Tree, prettyPrint };