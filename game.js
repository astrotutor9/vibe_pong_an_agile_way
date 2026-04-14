// Game configuration
const CONFIG = {
    WIDTH: 800,
    HEIGHT: 600,
    PADDLE_WIDTH: 10,
    PADDLE_HEIGHT: 100,
    BALL_SIZE: 10,
    START_DELAY: 2000,
    PADDLE_SPEED: 5
};

// State management
const state = {
    isRunning: true,
    gameStarted: false,
    leftPaddleY: 250,
    rightPaddleY: 250
};

// Input tracking
const keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

function update() {
    if (!state.gameStarted) return;

    // PONG-2.1: Move left paddle up
    if (keys['w']) {
        state.leftPaddleY -= CONFIG.PADDLE_SPEED;
        if (state.leftPaddleY < 0) {
            state.leftPaddleY = 0;
        }
    }

    // PONG-2.2: Move left paddle down
    if (keys['s']) {
        state.leftPaddleY += CONFIG.PADDLE_SPEED;
        if (state.leftPaddleY > CONFIG.HEIGHT - CONFIG.PADDLE_HEIGHT) {
            state.leftPaddleY = CONFIG.HEIGHT - CONFIG.PADDLE_HEIGHT;
        }
    }

    // PONG-2.3: Move right paddle up
    if (keys['arrowup']) {
        state.rightPaddleY -= CONFIG.PADDLE_SPEED;
        if (state.rightPaddleY < 0) {
            state.rightPaddleY = 0;
        }
    }

    // PONG-2.4: Move right paddle down
    if (keys['arrowdown']) {
        state.rightPaddleY += CONFIG.PADDLE_SPEED;
        if (state.rightPaddleY > CONFIG.HEIGHT - CONFIG.PADDLE_HEIGHT) {
            state.rightPaddleY = CONFIG.HEIGHT - CONFIG.PADDLE_HEIGHT;
        }
    }
}

function draw() {
    if (!state.gameStarted) return;

    // PONG-2.1: Render left paddle position
    const leftPaddle = document.getElementById('left-paddle');
    if (leftPaddle) {
        leftPaddle.style.top = state.leftPaddleY + 'px';
    }

    // PONG-2.3: Render right paddle position
    const rightPaddle = document.getElementById('right-paddle');
    if (rightPaddle) {
        rightPaddle.style.top = state.rightPaddleY + 'px';
    }
}

function gameLoop() {
    if (state.isRunning) {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }
}

function startGame() {
    setTimeout(() => {
        const startMsg = document.getElementById('start-message');
        if (startMsg) {
            startMsg.style.display = 'none';
        }
        state.gameStarted = true;
        console.log("Game Started!");
    }, CONFIG.START_DELAY);
}

// Initialize Game
console.log("Pong Game Initialized");
console.log(`Play Area: ${CONFIG.WIDTH}x${CONFIG.HEIGHT}`);
console.log(`Paddle Size: ${CONFIG.PADDLE_WIDTH}x${CONFIG.PADDLE_HEIGHT}`);
console.log(`Ball Size: ${CONFIG.BALL_SIZE}x${CONFIG.BALL_SIZE}`);

// Start the loop
requestAnimationFrame(gameLoop);
console.log("Game loop started.");

// Schedule the start
startGame();




