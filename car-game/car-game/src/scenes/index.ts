export class Scene {
    constructor(name) {
        this.name = name;
    }

    load() {
        console.log(`Loading scene: ${this.name}`);
    }

    unload() {
        console.log(`Unloading scene: ${this.name}`);
    }
}

export class MainMenu extends Scene {
    constructor() {
        super('Main Menu');
    }

    render() {
        console.log('Rendering Main Menu');
    }
}

export class Gameplay extends Scene {
    constructor() {
        super('Gameplay');
    }

    render() {
        console.log('Rendering Gameplay');
    }
}

export class GameOver extends Scene {
    constructor() {
        super('Game Over');
    }

    render() {
        console.log('Rendering Game Over');
    }
}

export const scenes = {
    mainMenu: new MainMenu(),
    gameplay: new Gameplay(),
    gameOver: new GameOver(),
};