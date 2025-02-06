export class Car {
    constructor(public model: string, public speed: number) {}

    accelerate(amount: number) {
        this.speed += amount;
    }

    brake(amount: number) {
        this.speed = Math.max(0, this.speed - amount);
    }
}

export class UIElement {
    constructor(public id: string, public type: string) {}

    render() {
        // Logic to render the UI element
    }
}