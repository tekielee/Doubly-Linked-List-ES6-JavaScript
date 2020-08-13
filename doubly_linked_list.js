class ListNode {
	constructor(data = null) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.firstNode = null;
		this.lastNode = null;
		this.totalNode = 0;
	}
	
	insertAtFirst(data = null) {
		let newNode = new ListNode(data);
		if(this.firstNode === null) {
			this.firstNode = newNode;
			this.lastNode = newNode;
		} else {
			let currentFirstNode = this.firstNode;
			this.firstNode = newNode;
			newNode.next = currentFirstNode;
			currentFirstNode.prev = newNode;
		}
		this.totalNode++;
		return true;
	}
	
	insertAtLast(data = null) {
		let newNode = new ListNode(data);
		if(this.firstNode === null) {
			this.firstNode = newNode;
			this.lastNode = newNode;
		} else {
			let currentNode = this.lastNode;
			currentNode.next = newNode;
			newNode.prev = currentNode;
			this.lastNode = newNode;
		}
		this.totalNode++;
		return true;
	}
	
	insertBefore(data = null, query = null) {
		let newNode = new ListNode(data);
		if(this.firstNode) {
			let previous = null;
			let currentNode = this.firstNode;
			while(currentNode !== null) {
				if(currentNode.data === query) {
					newNode.next = currentNode;
					currentNode.prev = newNode;
					previous.next = newNode;
					newNode.prev = previous;
					this.totalNode++;
					break;
				}
				previous = currentNode;
				currentNode = currentNode.next;
			}
		}
	}
	
	insertAfter(data = null, query = null) {
		let newNode = new ListNode(data);
		if(this.firstNode) {
			let nextNode = null;
			let currentNode = this.firstNode;
			while(currentNode !== null) {
				if(currentNode.data === query) {
					if(nextNode !== null) {
						newNode.next = nextNode;
					}
					if(currentNode === this.lastNode) {
						this.lastNode = newNode;
					}
					currentNode.next = newNode;
					nextNode.prev = newNode;
					newNode.prev = currentNode;
					this.totalNode++;
					break;
				}
				currentNode = currentNode.next;
				nextNode = currentNode.next;
			}
		}
	}
	
	deleteFirst() {
		if(this.firstNode !== null) {
			if(this.firstNode !== null) {
				this.firstNode = this.firstNode.next;
				this.firstNode.prev = null;
			} else {
				this.firstNode = null;
			}
			this.totalNode--;
			return true;
		}
		return false;
	}
	
	deleteLast() {
		if(this.lastNode !== null) {
			let currentNode = this.lastNode;
			if(currentNode.prev === null) {
				this.firstNode = null;
				this.lastNode = null;
			} else {
				let previousNode = currentNode.prev;
				this.lastNode = previousNode;
				previousNode.next = null;
				this.totalNode--;
				return true;
			}
		}
		return false;
	}
	
	delete(query = null) {
		if(this.firstNode) {
			let previous = null;
			let currentNode = this.firstNode;
			while(currentNode !== null) {
				if(currentNode.data === query) {
					if(currentNode.next === null) {
						previous.next = null;
					} else {
						previous.next = currentNode.next;
						currentNode.next.prev = previous;
					}
					this.totalNode--;
					break;
				}
				previous = currentNode;
				currentNode = currentNode.next;
			}
		}
	}
	
	displayForward() {
		console.log('Total book titles: ' + this.totalNode);
		let currentNode = this.firstNode;
		while(currentNode !== null) {
			console.log(currentNode.data);
			currentNode = currentNode.next;
		}
	}
	
	displayBackward() {
		console.log('Total book titles: ' + this.totalNode);
		let currentNode = this.lastNode;
		while(currentNode !== null) {
			console.log(currentNode.data);
			currentNode = currentNode.prev;
		}
	}
}

const bookTitles = new DoublyLinkedList();
bookTitles.insertAtFirst('Introduction to Algorithm');
bookTitles.insertAtFirst('Introduction to Algorithm 2');
bookTitles.insertAtLast('Introduction to JavaScript and Data Structures');
bookTitles.insertBefore('Book Before', 'Introduction to Algorithm');
bookTitles.insertAfter('Book After', 'Introduction to Algorithm');
bookTitles.displayForward();
bookTitles.displayBackward();
bookTitles.deleteFirst();
bookTitles.displayForward();
bookTitles.displayBackward();
bookTitles.deleteLast();
bookTitles.displayForward();
bookTitles.displayBackward();
bookTitles.delete('Introduction to Algorithm');
bookTitles.displayForward();
bookTitles.displayBackward();