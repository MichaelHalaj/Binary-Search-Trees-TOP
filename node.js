class Node {
    left;
    right;
    data;
    constructor(value = null, left = null, right = null) {
        this.data = value;
        this.left = left;
        this.right = right;
    }

    get data() {
        return this.data;
    }

    set setData(val) {
        this.data = val;
    }

    get right() {
        return this.right;
    }

    get left() {
        return this.left;
    }

    set setLeft(val) {
        this.left = val;
    }

    set setRight(val) {
        this.right = val;
    }
}
export default Node;