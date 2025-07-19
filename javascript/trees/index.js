class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }
  //Ex 1.
  findNode(letter) {
    if (this.value == letter) {
      return true;
    }
    if (this.value < letter) {
      if (this.rightChild) {
        return this.rightChild.findNode(letter);
      }
    }
    if (this.value > letter) {
      if (this.leftChild) {
        return this.leftChild.findNode(letter);
      }
    }
    return false;
  }
  //Ex 2.
  findCommonParent(l1, l2) {
    let smallerLetter;
    let biggerLetter;
    if (l1 > l2) {
      smallerLetter = l2;
      biggerLetter = l1;
    } else {
      smallerLetter = l1;
      biggerLetter = l2;
    }
    if (
      this.leftChild.findNode(smallerLetter) &&
      this.leftChild.findNode(biggerLetter) &&
      this.leftChild.value != smallerLetter &&
      this.leftChild.value != biggerLetter
    ) {
      return this.leftChild.findCommonParent(l1, l2);
    }
    if (
      this.rightChild.findNode(smallerLetter) &&
      this.rightChild.findNode(biggerLetter) &&
      this.rightChild.value != smallerLetter &&
      this.rightChild.value != biggerLetter
    ) {
      return this.rightChild.findCommonParent(l1, l2);
    } else {
      return this.value;
    }
  }

  removeNode(parent, letter) {
    if (!parent) return;

    if (letter < parent.value && parent.leftChild) {
      if (parent.leftChild.value === letter) {
        this.updateNodes(parent, parent.leftChild, "left");
      } else {
        this.removeNode(parent.leftChild, letter);
      }
    } else if (letter > parent.value && parent.rightChild) {
      if (parent.rightChild.value === letter) {
        this.updateNodes(parent, parent.rightChild, "right");
      } else {
        this.removeNode(parent.rightChild, letter);
      }
    } else if (letter === parent.value) {
      this.updateNodes(null, parent, "parent");
    }
    return this;
  }

  findMax(parent, node) {
    if (!node.rightChild) {
      return { parent, node };
    }
    return this.findMax(node, node.rightChild);
  }

  updateNodes(parent, node, childType) {
    if (!node.leftChild) {
      if (childType === "left") {
        parent.leftChild = node.rightChild;
      } else if (childType === "right") {
        parent.rightChild = node.rightChild;
      } else {
        this.value = node.rightChild?.value;
        this.leftChild = node.rightChild?.leftChild ?? null;
        this.rightChild = node.rightChild?.rightChild ?? null;
      }
      return;
    }

    if (!node.rightChild) {
      if (childType === "left") {
        parent.leftChild = node.leftChild;
      } else if (childType === "right") {
        parent.rightChild = node.leftChild;
      } else {
        this.value = node.leftChild?.value;
        this.leftChild = node.leftChild?.leftChild ?? null;
        this.rightChild = node.leftChild?.rightChild ?? null;
      }
      return;
    }

    let { parent: maxParent, node: maxNode } = this.findMax(
      node,
      node.leftChild
    );

    node.value = maxNode.value;

    if (maxParent === node) {
      node.leftChild = maxNode.leftChild;
    } else {
      maxParent.rightChild = maxNode.leftChild;
    }
  }
}
const lettersEx1 = ["H", "E", "S", "G", "L", "Y", "I"];
let bSTree = new BSNode();

lettersEx1.forEach((l) => bSTree.insertNode(l));

//Use the following to test
bSTree.findNode("H"); // should print true
bSTree.findNode("G"); // should print true
bSTree.findNode("Z"); // should print false
bSTree.findNode("F"); // should print false
bSTree.findNode("y"); // should print false - we didn't make the tree case sensitive!

const lettersEx2 = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
bSTree = new BSNode();

lettersEx2.forEach((l) => bSTree.insertNode(l));

console.log(bSTree.findCommonParent("B", "I")); //should return "H"
console.log(bSTree.findCommonParent("B", "G")); //should return "E"
console.log(bSTree.findCommonParent("B", "L")); //should return "J"
console.log(bSTree.findCommonParent("L", "Y")); //should return "R"
console.log(bSTree.findCommonParent("E", "H")); //should return "J"

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied)

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
