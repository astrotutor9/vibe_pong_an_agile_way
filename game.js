// Game configuration
const CONFIG = {
    WIDTH: 800,
    HEIGHT: 600,
    PADDLE_WIDTH: 10,
    PADDLE_HEIGHT: 100,
    BALL_SIZE: 10,
    START_DELAY: 2000,
    PADDLE_SPEED: 5,
    BALL_SPEED: 3
};

// State management
const state = {
    isRunning: true,
    gameStarted: false,
    leftPaddleY: 250,
    rightPaddleY: 250,
    ballX: 395,
    ballY: 295,
    ballDX: CONFIG.BALL_SPEED,
    ballDY: -CONFIG.BALL_SPEED,
    leftScore: 0,
    rightScore: 0,
    winner: null
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

    // PONG-3.1: Start ball movement
    state.ballX += state.ballDX;
    state.ballY += state.ballDY;

    // PONG-3.2: Bounce off top wall
    if (state.ballY <= 0) {
        state.ballDY = -state.ballDY;
        state.ballY = 0;
    }

    // PONG-3.3: Bounce off bottom wall
    if (state.ballY + CONFIG.BALL_SIZE >= CONFIG.HEIGHT) {
        state.ballDY = -state.ballDY;
        state.ballY = CONFIG.HEIGHT - CONFIG.BALL_SIZE;
    }

    // PONG-3.5: Bounce off right paddle
    if (state.ballX + CONFIG.BALL_SIZE >= CONFIG.WIDTH - CONFIG.PADDLE_WIDTH &&
        state.ballY + CONFIG.BALL_SIZE >= state.rightPaddleY &&
        state.ballY <= state.rightPaddleY + CONFIG.PADDLE_HEIGHT) {

        state.ballDX = -state.ballDX;
        state.ballX = CONFIG.WIDTH - CONFIG.PADDLE_WIDTH - CONFIG.BALL_SIZE;
    }

    // PONG-3.4: Bounce off left paddle
    if (state.ballX <= CONFIG.PADDLE_WIDTH &&
        state.ballY + CONFIG.BALL_SIZE >= state.leftPaddleY &&
        state.ballY <= state.leftPaddleY + CONFIG.PADDLE_HEIGHT) {

        state.ballDX = -state.ballDX;
        state.ballX = CONFIG.PADDLE_WIDTH;
    }

    // PONG-4.1: Detect left side score
    if (state.ballX < 0) {
        state.rightScore++;
        checkWinner();
        resetBall();
    }

    // PONG-4.2: Detect right side score
    if (state.ballX + CONFIG.BALL_SIZE >= CONFIG.WIDTH) {
        state.leftScore++;
        checkWinner();
        resetBall();
    }
}

function checkWinner() {
    if (state.leftScore >= 6) {
        state.winner = 'Left Player';
        state.isRunning = false;
        scheduleRestart();
    } else if (state.rightScore >= 6) {
        state.winner = 'Right Player';
        state.isRunning = false;
        scheduleRestart();
    }
}

function scheduleRestart() {
    setTimeout(() => {
        fullReset();
    }, 3000);
}

function fullReset() {
    state.leftScore = 0;
    state.rightScore = 0;
    state.leftPaddleY = 250;
    state.rightPaddleY = 250;
    state.winner = null;

    resetBall();

    const winnerMsg = document.getElementById('winner-message');
    if (winnerMsg) {
        winnerMsg.style.display = 'none';
    }

    const startMsg = document.getElementById('start-message');
    if (startMsg) {
        startMsg.style.display = 'block';
    }

    state.isRunning = true;
    state.gameStarted = false;
    startGame();
}

function resetBall() {
    state.ballX = 395;
    state.ballY = 295;
    state.ballDX = CONFIG.BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
    state.ballDY = CONFIG.BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
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

    // PONG-3.1: Render ball position
    const ball = document.getElementById('ball');
    if (ball) {
        ball.style.left = state.ballX + 'px';
        ball.style.top = state.ballY + 'px';
    }

    // PONG-4.3: Update score display
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = `${state.leftScore} : ${state.rightScore}`;
    }

    // PONG-5.5: Render winner message
    if (state.winner) {
        const winnerMsg = document.getElementById('winner-message');
        if (winnerMsg) {
            winnerMsg.style.display = 'block';
            winnerMsg.textContent = `WINNER: ${state.winner.toUpperCase()}`;
        }
    }
}

function gameLoop() {
    if (state.isRunning) {
        update();
    }
    draw();
    requestAnimationFrame(gameLoop);
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




