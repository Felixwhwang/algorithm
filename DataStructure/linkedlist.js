class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert last node
  insertLast(data) {
    if(!this.head) {
      this.head = new Node(data, this.head);
    }
    else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.size++;
  }
  // Insert at index
  insertAtIndex(data, index) {
    if(index > this.size || index < 0) {
      console.log('index out of range');
      return;
    }

    if (index === 0){
      this.insertFirst(data);
      return;
    }

    let current = this.head;
    let curIndex = 0;
    while(curIndex < index - 1) {
      current = current.next;
      curIndex++;
    }
    current.next = new Node(data, current.next);
    this.size++;
  }
  // Get at index
  getAtIndex(index) {
    if(index >= this.size || index < 0) {
      console.log('index out of range');
      return;
    }

    let current = this.head;
    let curIndex = 0;
    while(curIndex < index) {
      current = current.next;
      curIndex++;
    }
    console.log(`Data at index ${index} is ${current.data}`);
  }
  // Remove at index
  removeAtindex(index) {
    if (index >= this.size || index < 0) {
      console.log('index out of range');
      return;
    }
    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous;
    let curIndex = 0;
    while (curIndex < index) {
      previous = current;
      current = current.next;
      curIndex++;
    }
    previous.next = current.next;
    this.size--;
    console.log(`Data ${current.data} at ${index} has been removed`);
  }
  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print list data
  printListData() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
    console.log(`total size ${this.size}`);
  }
}


const newList = new LinkedList();
newList.insertFirst(100);
newList.insertFirst(200);
newList.insertFirst(350);
newList.insertLast(400);
newList.insertAtIndex(500, 3);
newList.getAtIndex(0)
newList.printListData();
newList.removeAtindex(2);
newList.clearList();
newList.printListData();
// newList.printList();
// console.log(newList);
