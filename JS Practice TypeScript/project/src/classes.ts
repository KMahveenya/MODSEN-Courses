class Animal {
    public sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }
}

const animal = new Animal('Meow');
console.log(animal.sound);