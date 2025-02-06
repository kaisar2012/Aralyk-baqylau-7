export const assets = {
    images: {
        car: require('./images/car.png'),
        track: require('./images/track.png'),
        background: require('./images/background.jpg'),
    },
    sounds: {
        engine: require('./sounds/engine.mp3'),
        crash: require('./sounds/crash.mp3'),
        victory: require('./sounds/victory.mp3'),
    },
};

export function loadAssets() {
    return new Promise((resolve, reject) => {
        const loadedAssets = {};
        const totalAssets = Object.keys(assets.images).length + Object.keys(assets.sounds).length;
        let assetsLoaded = 0;

        const checkAllAssetsLoaded = () => {
            if (assetsLoaded === totalAssets) {
                resolve(loadedAssets);
            }
        };

        for (const key in assets.images) {
            const img = new Image();
            img.src = assets.images[key];
            img.onload = () => {
                loadedAssets[key] = img;
                assetsLoaded++;
                checkAllAssetsLoaded();
            };
            img.onerror = reject;
        }

        for (const key in assets.sounds) {
            const audio = new Audio(assets.sounds[key]);
            audio.oncanplaythrough = () => {
                loadedAssets[key] = audio;
                assetsLoaded++;
                checkAllAssetsLoaded();
            };
            audio.onerror = reject;
        }
    });
}