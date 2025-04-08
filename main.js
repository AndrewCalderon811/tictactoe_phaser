// import Phaser from "phaser";



class MainScene extends Phaser.Scene {

    constructor() {
        super({ key: "MainScene" });
    }
    init() {
        // Initialize variables
        this.gridSize = 3; // 3x3 grid
        this.cellSize = 200; // Size of each cell
        this.graphics = null;
        this.currentPlayer = 'X'; // Start with player X
        this.board = Array.from({ length: this.gridSize }, () => Array(this.gridSize).fill(null));
    }


    preload() {
        // Init
        
    }

    create() {
        this.cameras.main.setBackgroundColor("#3498db");
        
            const graphics = this.add.graphics();
            graphics.lineStyle(5, 0xA9A9A9);
        
            // Draw Grid
            graphics.strokeLineShape(new Phaser.Geom.Line(200, 0, 200, 600));
            graphics.strokeLineShape(new Phaser.Geom.Line(400, 0, 400, 600));
            graphics.strokeLineShape(new Phaser.Geom.Line(0, 200, 600, 200));
            graphics.strokeLineShape(new Phaser.Geom.Line(0, 400, 600, 400));
        
            // Click event listener
            this.input.on('pointerdown', function (pointer) {
                const x = pointer.x;
                const y = pointer.y;
                console.log(`Clicked at: ${x}, ${y}`);
        
                // Determine grid cell
                const col = Math.floor(x / 200);
                const row = Math.floor(y / 200);
                const centerX = col * 200 + 100;
                const centerY = row * 200 + 100;
        
                // Draw an "O" where clicked
                graphics.strokeCircle(centerX, centerY, 80);
            });
        
    }


    update() {
        
    }

}



const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,

    scene: MainScene,
};

const game = new Phaser.Game(config);