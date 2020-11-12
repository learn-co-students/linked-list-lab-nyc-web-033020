function getName(node){
    return node.name
}

function headNode(linkedList, collection){
    let head = collection[linkedList]
    return head
}

function next(head, collection){
    let nextAddress = head.next
    let nextNode = collection[nextAddress]
    return nextNode
}

function nodeAt(index, linkedList, collection){
    // console.log(collection)
    let node = collection[linkedList]
    for(let i = 0; i < index ;i++){
        node = next(node, collection)
    }
    return node
}

function addressAt(index, linkedList, collection){
    if(index == 0){
        return linkedList
    } else {
       let node = nodeAt(index-1, linkedList, collection)
       return node.next
    }
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection)
    let currentIndex = 0

    while(currentNode != node){
        currentNode= next(currentNode, collection)
        currentIndex++
    }
    return currentIndex
}

function insertNodeAt(index, newAddress, linkedList, collection){
    let priorNode = nodeAt(index-1, linkedList, collection)
    let followNode = nodeAt(index, linkedList, collection)

    let priorNodeIndex = indexAt(priorNode, collection, linkedList)
    let followNodeIndex = indexAt(followNode, collection, linkedList)
    let priorNodeAddress = addressAt(priorNode, linkedList, collection)
    let followNodeAddress = addressAt(followNode, linkedList, collection)
    priorNode.next = newAddress
    let newNode = collection[newAddress]
    newNode.next = followNodeAddress
}

function deleteNodeAt(index, linkedList, collection){
   let previousNode
   let currentNode = headNode(linkedList, collection)

   for(let i = 0; i < index; i++){
    previousNode = currentNode
    currentNode = next(currentNode, collection);
 }
 previousNode.next = currentNode.next
}