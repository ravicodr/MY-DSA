//node class 

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

let node = new Node  (10)
console.log(node)

let node2 = new Node(12)
node.next = node2 
console.log(node)      