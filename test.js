class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`I am ${this.name} and I am ${this.age} old..`);
    }

}

const john = new Person("Rahul", 22);
john.sayHello();