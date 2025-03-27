const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load assets if needed (like X/O images)
}

function create() {
    // Draw board (use graphics or sprites)
    // Setup click handling for moves
}

function update() {
    // Handle game state updates
}
