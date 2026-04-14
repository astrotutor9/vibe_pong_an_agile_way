// Game configuration
const CONFIG = {
    WIDTH: 800,
    HEIGHT: 600,
    PADDLE_WIDTH: 10,
    PADDLE_HEIGHT: 100,
    BALL_SIZE: 10
};

// State management
const state = {
    isRunning: true
};

function update() {
    // Logic updates will go here in future stories
}

function draw() {
    // Rendering updates will go here in future stories
}

function gameLoop() {
    if (state.isRunning) {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }
}

// Initialize Game
console.log("Pong Game Initialized");
console.log(`Play Area: ${CONFIG.WIDTH}x${CONFIG.HEIGHT}`);
console.log(`Paddle Size: ${CONFIG.PADDLE_WIDTH}x${CONFIG.PADDLE_HEIGHT}`);
console.log(`Ball Size: ${CONFIG.BALL_SIZE}x${CONFIG.BALL_SIZE}`);

// Start the loop
requestAnimationFrame(gameLoop);
console.log("Game loop started.");




