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
            this.array.push(value);
        }
        if(value > node.data && node.right === null) {
            node.right = new Node(value);
            this.array.push(value);``
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

    delete(value, node = this.root) {
        if(node === null) {
            return node;
        }
        if(value === node.data) {
            this.array = this.array.filter((item) => {
                return item !== value;
            });
            if(node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                let succParent = node;
                let succ = node.right;
                while(succ.left !== null) {
                    succParent = succ;
                    succ = succ.left;
                }
                if(succParent !== node) {
                    succParent.left = succ.right;
                } else {
                    succParent.right = succ.right;
                }
                node.setData = succ.data;
                return node; 
            }            
        }
        if(value > node.data) {
            node.right = this.delete(value, node.right);
        } else if(value < node.data) {
            node.left = this.delete(value, node.left);
        }
        return node;
    }

    find(value, node = this.root) {
        if(node === null) {
            return node;
        }
        if(node.data === value) {
            return node;
        }
        if(value > node.data) {
            return this.find(value, node.right);
        } else {
            return this.find(value, node.left);
        }
    }

    levelOrder(callback, q = []) {
        let result = [];
        q.push(this.root);
        while(q.length !== 0){
            let size = q.length;
            for(let i = 0; i < size; i++){
                let node = q.shift();
                if(node.left !== null) {
                    q.push(node.left);
                }
                if(node.right !== null) {
                    q.push(node.right);
                }
                if(callback){
                    callback(node);
                } 
                result.push(node.data);
            }
        }
        return result;
    }

    inorder(callback, array = [], node = this.root) {
        if(node === null) {
            return array;
        }
        this.inorder(null, array, node.left);
        if(callback) {
            callback(node);
        } else {
            array.push(node.data)
        };
        this.inorder(null, array, node.right);
        return array;
    }

    preorder(callback, array = [], node = this.root) {
        if(node === null) {
            return array;
        }
        if(callback) {
            callback(node);
        } else {
            array.push(node.data)
        };
        this.preorder(null, array, node.left);
        this.preorder(null, array, node.right);
        return array;
    }

    postorder(callback, array = [], node = this.root) {
        if(node === null) {
            return array;
        }

        this.postorder(null, array, node.left);
        this.postorder(null, array, node.right);
        if(callback) {
            callback(node);
        } else {
            array.push(node.data)
        };
        return array;
    }

    height(node) {
        if(node === null) {
            return 0;
        }
        if(node.left === null && node.right === null) {
            return 0;
        }
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    depth(nodeVal, node = this.root) {
        if(node === null) {
            return 0;
        }
        if(nodeVal === node.data) {
            return 0;
        } else if(nodeVal > node.data) {
            return 1 + this.depth(nodeVal, node.right);
        } else {
            return 1 + this.depth(nodeVal, node.left);
        }
    }
}

export { Tree, prettyPrint };