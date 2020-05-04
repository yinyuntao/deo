import "assets/index.less"
import "assets/common.css"
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const dog = new Animal('dog');

console.log(123)


document.body.appendChild(document.createElement('div'));