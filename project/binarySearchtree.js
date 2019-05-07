// tree implementation
var tree;
function setup() {
	tree = new Tree();
	for (let i = 0; i < 100; i++) {
		let value = Math.random(0, 100);
		tree.addValue(i);
	}
	console.log(tree);
	tree.traverse();
}

function Tree() {
	this.root = null;
}

Tree.prototype.addValue = function(val) {
	var node = new Node(val);
	if (this.root === null) {
		this.root = node;
	} else {
		this.root.addNode(node);
	}
};

Tree.prototype.traverse = function() {
	this.root.visit();
};
Tree.prototype.search = function(val) {
	let found = this.root.search(val);
	return found;
};

Node.prototype.search = function(val) {
	if (this.value == val) {
		return this;
	} else if (val < this.value && this.left != null) {
		return this.left.search(val);
	} else if (val > this.value && this.right != null) {
		return this.right.search(val);
	}
	return console.log('not found');
};

Node.prototype.visit = function() {
	if (this.left != null) {
		this.left.visit();
	}
	console.log(this.value);
	if (this.right != null) {
		this.right.visit();
	}
};

Node.prototype.addNode = function(n) {
	if (n.value < this.value) {
		if (this.left == null) {
			this.left = n;
		} else {
			this.left.addNode(n);
		}
	} else if (n.value > this.value) {
		if (this.right == null) {
			this.right = n;
		} else {
			this.right.addNode(n);
		}
	}
};

function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

setup();
