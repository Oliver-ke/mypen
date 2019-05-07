//this is my linked list implementation using classes

class LinkedList {
	constructor() {
		this._head = null;
		this._length = 0;
	}

	size = () => this._length;
	head = () => this._head;
	add = (node) => {
		if (this._head === null) this._head = node;
		else {
			let currentNode = this._head;
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode = node;
		}
		this._length++;
	};

	remove = (node_value) => {
		let currentNode = this._head;
		let previousNode;
		if (currentNode.element === node_value) {
			this._head = currentNode.next;
		} else {
			while (currentNode.element !== node_value) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		this._length--;
	};

	isEmpty = () => {
		return this._length === 0;
	};

	indexOf = (element) => {
		let currentNode = this._head;
		let index = -1;
		while (currentNode) {
			index++;
			if (currentNode.element === element) {
				return index;
			}
			currentNode = currentNode.next;
		}
		return -1;
	};
}

class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

const linkLst = new LinkedList();
const n1 = new Node(4);
