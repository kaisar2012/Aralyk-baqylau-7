export interface Car {
    id: number;
    model: string;
    speed: number;
    position: { x: number; y: number };
}

export interface Player {
    id: number;
    name: string;
    score: number;
    car: Car;
}

export interface GameState {
    players: Player[];
    currentScene: string;
    isGameOver: boolean;
}