class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        if(this.head === null) {
            this.head = new Node(value);
        } else {
            let currentNode = this.head;
            while(currentNode.next != null) {   
                currentNode = currentNode.next
            }
            currentNode.next = new Node(value);
        }
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    count() {
        let counter = 0;
        let currentNode = this.head
        while(currentNode !== null) {
            currentNode = currentNode.next;
            counter++;
        }
        return counter;
    }

    getHead(){
        return this.head;
    }

    getTail() {
        if (this.head === null){
            return null;
        } 
        let currentNode = this.head;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;

        }
        return currentNode;
    }

    at(index) {
        let counter = 0;
        let currentNode = this.head;
        while(currentNode !== null) {
            if(counter === index) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
                counter++;
            }
        }
        return null;
    }

    pop() {
        if(this.head === null) {
            return null;
        } else if (this.head.next === null) {
            const removedNode = this.head;
            this.head = null;
            return removedNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next.next !== null) {
               currentNode = currentNode.next;
            }
            const removedNode = currentNode.next;
            currentNode.next = null;
            return removedNode;
        }
    }

    contain(value) {
        let currentNode = this.head;
        while(currentNode !== null) {
            if(currentNode.value === value) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let counter = 0;
        while(currentNode !== null) {
            if(currentNode.value === value) {
                return counter;
            } else {
                currentNode = currentNode.next;
                counter++;
            }
        }
        return null;
    }


    insertAt(value, index) {
        const count = this.count();
        if(index < 0 || index > count) {
            throw new Error("Index out of bounds");
        } else if(index === 0) {
            this.prepend(value);
            return;
        } else if(index === count) {
            this.append(value);
            return;
        } else {
            let newNode = new Node(value);
            let counter = 0;
            let currentNode = this.head;
            while(currentNode !== null ) {
                if(counter === index - 1) {
                    newNode.next = currentNode.next;
                    currentNode.next = newNode;
                    return 
                } else {
                    currentNode = currentNode.next;
                    counter++;
                }
            }
        }

    }

    removeAt(index) {
        if(index < 0 || index >= this.count()) {
            throw new Error("Index out of bounds");
        } else if(index === 0) {
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        } else {
            let currentNode = this.head;
            let counter = 0;
            while(currentNode !== null) {
                if(counter === index - 1) {
                    const removedNode = currentNode.next;
                    currentNode.next = removedNode.next;
                    return removedNode;
                }
                else {
                    currentNode = currentNode.next;
                    counter++;
                }
            }
        }
    }
        

    toString() {
        let currentNode = this.head;
        let string = "";
        while(currentNode !== null) {
            string = string.concat(`[${currentNode.value}] -> `)
            currentNode = currentNode.next;
        }
        string += "null";
        return string;
    }
}
/*
const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('hamster');
list.prepend("mouse");
console.log(list.count());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(4));
console.log(list.pop());
console.log(list.contain("cat"));
list.insertAt("parrot", 2); 
console.log(list.at(2).value); 
list.insertAt("turtle", 0);
console.log(list.getHead().value); 
console.log(list.find("turtle"));
console.log(list.toString())
console.log(list.removeAt(4));
console.log(list.toString());
*/