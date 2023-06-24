class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    get right() {
        return this.right;
    }

    get left() {
        return this.left;
    }

    set left(val) {
        this.left = val;
    }

    set right(val) {
        this.right = val;
    }
}