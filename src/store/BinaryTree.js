/*
const getUuid = require('uuid-by-string')

class Player {
    constructor(idPlay = String('id'), namePlay = String('Player'), lossVictory = Boolean(false)) {
        this.idPlay = getUuid(idPlay);
        this.namePlay = namePlay;
        this.lossVictory = lossVictory
    }
}

class ObjPlayers {
    constructor(name = String(), players = Array()) {
        this.name = name;
        this.players = players;
    }
}

class ObjChildren {
    constructor(name = String(), children = Array()) {
        this.name = name;
        this.children = children
    }
}


function func2(value = Number(8)) {
    const objChildren = new ObjChildren();
    const objPlayers = new ObjPlayers()
    let valJ = value;
    for (let i = 0; i < value / 2; i++) {
        objPlayers.name = i.toString()
        for (let j = 0; j < valJ; j++) {
            const player = new Player(j.toString(), 'Player-' + j, false);

            objPlayers.players.push(player)


        }

        valJ = valJ / 2
        objChildren.children[i] = objPlayers
    }

}


function func(value = Number(8)) {
    if (value <= value && value > 0) {
        if (value === 1) {
            console.log(value)
        } else if (value === 2) {
            console.log(value)
        } else if (value === 4) {
            console.log(value)
        } else if (value === 8) {
            console.log(value)
        }

        value -= 1
        func(value)
    }

}

//func();



const obj = {
    setVK: function (key, value) {
        obj[key] = value;
    }
}

for(let i = 0; i < 8; i++) {

}

obj.setVK('name', '')
obj.setVK('children', [])

console.log(obj)*/
const getUuid = require('uuid-by-string')

class Player {
    //winLossDraw = 1|-1|0
    //1 - win(победа)
    //-1 - loss(проигрыш)
    //0 - draw(не играл)
    constructor(idPlayer = String(''), name = String(''), winLossDraw = Number()) {
        this.idPlayer = getUuid(idPlayer);
        this.name = name;
        this.winLossDraw = winLossDraw;
    }

    getCountPlayer(countNode) {

    }
}

class Node {
    constructor(value, numberNode = Number()) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.numberNode = numberNode
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add2(value, mass = Array(), sumMass = Number()) {
        //const newNode = new Node(value)
        for (let i = 0; i < sumMass; i++) {
            const newNode = new Node(value + i)
            if (!this.root) {
                this.root = newNode;
                //return;
            }
        }
    }

    even_or_odd(numberNode = Number()) {
        return numberNode % 2 === 0 ? "Even" : "Odd"
    }

    add(value, numberNode = Number()) {
        const newNode = new Node(value, numberNode)
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        let currentNodeLeft = this.root.left;
        let currentNodeRight = this.root.right;
        /*while (currentNode) {
            if (!currentNode.left) {
                currentNode.left = newNode
                return;
            } else {
                currentNode = currentNode.left
            }

            if (!currentNode.right) {
                currentNode.right = newNode
                return;
            } else {
                currentNode = currentNode.right
            }
        }*/
        /*while (currentNode) {
            if(newNode.value < currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left
            } else {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right
            }
        }*/
        while (currentNode) {
            if(this.even_or_odd(newNode.numberNode) === 'Even') {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left
            } else if(this.even_or_odd(newNode.numberNode) === 'Odd') {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right
            }
        }
    }
}


const myTree = new BinaryTree()

/*const player1 = new Player('1', 'Player-1', 0)
const player2 = new Player('2', 'Player-2', 0)
const player3 = new Player('3', 'Player-3', 0)*/
const player = 'Player-'
myTree.add(player + 1, 1)
myTree.add(player + 2, 2)
myTree.add(player + 3, 3)
myTree.add(player + 4, 4)
myTree.add(player + 5, 5)
myTree.add(player + 6, 6)
myTree.add(player + 7, 7)
console.log(myTree)
// const even = n => !(n % 2);
//
// console.log(even(5));
// console.log(even(4));

/*function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}*/

//console.log(even_or_odd(64))
/*
function f(countPlayer) {
    let mass = [];
    let cpl = countPlayer;
    while (cpl >= 1) {
        mass.push(cpl);
        cpl = cpl / 2;
    }
    return mass.sort();
}

const ms = f(8);
let sum = new Number(0)
for(let i = 0; i < ms.length; i++) {
    sum = sum + Number.parseFloat(ms[i])
}

console.log(f(8))
console.log(sum)*/

export { Player, Node, BinaryTree }
