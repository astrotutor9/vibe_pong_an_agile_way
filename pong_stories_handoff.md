# Pong Game, Agile Project Handoff

## Project Overview
This project is a browser based recreation of the classic Pong game.

The goal is to build the game incrementally using small, testable agile stories. Each story should be completed, reviewed, and verified before moving to the next.

## Product Scope

### Core Features
- Two player Pong game
- Keyboard controlled paddles
- Ball movement and collision
- Score tracking
- First to 6 points wins
- Automatic reset after win

### Controls
- Player 1: W, up, S, down
- Player 2: Arrow Up, Arrow Down

### Display
- Score shown at top of play area
- Format: `0 : 0`
- Minimal visual design

### Game Flow
- Start message shown before play begins
- Game starts when message disappears
- Winner message shown at 6 points
- Short pause
- Game resets and restarts automatically

## Epics and Stories

### PONG-1.1 Create game page
As a user, I can open a web page for the game so that Pong can be played in the browser.

**Acceptance Criteria**
- A web page loads successfully in a browser
- The page contains a visible game area
- No errors appear on load

### PONG-1.2 Create play area
As a user, I can see a defined play area so that the game space is clear.

**Acceptance Criteria**
- A rectangular play area is visible
- The play area has fixed dimensions
- The background is visually distinct from the page

### PONG-1.3 Render left paddle
As a user, I can see the left paddle in the play area.

**Acceptance Criteria**
- A left paddle is visible
- It appears inside the left side of the play area
- It has a fixed size

### PONG-1.4 Render right paddle
As a user, I can see the right paddle in the play area.

**Acceptance Criteria**
- A right paddle is visible
- It appears inside the right side of the play area
- It has a fixed size

### PONG-1.5 Render ball
As a user, I can see the ball in the play area.

**Acceptance Criteria**
- A ball is visible
- It appears in the centre of the play area
- It has a fixed size

### PONG-1.6 Display score area
As a user, I can see the score at the top of the play area.

**Acceptance Criteria**
- Score is displayed above or at the top of the play area
- Initial score reads 0 : 0
- Score is clearly visible

### PONG-2.1 Move left paddle up
As Player 1, I can move the left paddle up using the W key.

**Acceptance Criteria**
- Pressing W moves the left paddle upward
- Movement is visible while playing
- Paddle does not move above the play area

### PONG-2.2 Move left paddle down
As Player 1, I can move the left paddle down using the S key.

**Acceptance Criteria**
- Pressing S moves the left paddle downward
- Movement is visible while playing
- Paddle does not move below the play area

### PONG-2.3 Move right paddle up
As Player 2, I can move the right paddle up using the Arrow Up key.

**Acceptance Criteria**
- Pressing Arrow Up moves the right paddle upward
- Movement is visible while playing
- Paddle does not move above the play area

### PONG-2.4 Move right paddle down
As Player 2, I can move the right paddle down using the Arrow Down key.

**Acceptance Criteria**
- Pressing Arrow Down moves the right paddle downward
- Movement is visible while playing
- Paddle does not move below the play area

### PONG-3.1 Start ball movement
As a player, I can see the ball begin moving so that play starts.

**Acceptance Criteria**
- Ball moves automatically when the game starts
- Ball has horizontal movement
- Ball has vertical movement

### PONG-3.2 Bounce off top wall
As a player, I can see the ball bounce off the top wall.

**Acceptance Criteria**
- Ball changes vertical direction when touching the top boundary
- Ball stays within the play area

### PONG-3.3 Bounce off bottom wall
As a player, I can see the ball bounce off the bottom wall.

**Acceptance Criteria**
- Ball changes vertical direction when touching the bottom boundary
- Ball stays within the play area

### PONG-3.4 Bounce off left paddle
As a player, I can see the ball bounce when it hits the left paddle.

**Acceptance Criteria**
- Ball changes horizontal direction after contacting the left paddle
- Ball does not pass through the paddle on a valid hit

### PONG-3.5 Bounce off right paddle
As a player, I can see the ball bounce when it hits the right paddle.

**Acceptance Criteria**
- Ball changes horizontal direction after contacting the right paddle
- Ball does not pass through the paddle on a valid hit

### PONG-4.1 Detect left side score
As a player, a point is awarded when the ball passes the left paddle.

**Acceptance Criteria**
- The system detects when the ball exits the left boundary
- Right player score increases by 1

### PONG-4.2 Detect right side score
As a player, a point is awarded when the ball passes the right paddle.

**Acceptance Criteria**
- The system detects when the ball exits the right boundary
- Left player score increases by 1

### PONG-4.3 Update score display
As a player, I can see the score update after each point.

**Acceptance Criteria**
- Score display updates immediately after a point
- Display remains in the format 0 : 0
- Correct player total is shown

### PONG-4.4 Reset ball after score
As a player, the ball returns to the centre after a point is scored.

**Acceptance Criteria**
- Ball returns to the centre after scoring
- Ball is ready for the next rally
- Scores remain unchanged during the reset

### PONG-5.1 Create game loop
As a player, the game updates continuously while it is running.

**Acceptance Criteria**
- Screen updates repeatedly while the game is active
- Movement and drawing both update during play
- No visible duplication trails remain on screen

### PONG-5.2 Show start message
As a player, I see a message before the game begins.

**Acceptance Criteria**
- A visible start message appears before play begins
- Ball does not move while the message is visible

### PONG-5.3 Start after message
As a player, the game starts automatically after the start message disappears.

**Acceptance Criteria**
- Start message disappears after a short pause
- Ball begins moving once the message disappears
- Players can control paddles during gameplay

### PONG-5.4 Detect winner at 6
As a player, the game recognises when someone has won.

**Acceptance Criteria**
- The game checks scores after each point
- A player is declared winner when they reach 6 points
- No winner is declared before 6 points

### PONG-5.5 Display winner message
As a player, I can see who won the game.

**Acceptance Criteria**
- A minimal winner message is shown
- The message clearly identifies the winning player
- Ball movement stops while the message is shown

### PONG-5.6 Reset after win
As a player, a new game begins after the winner message disappears.

**Acceptance Criteria**
- Winner message remains visible for a short pause
- Scores reset to 0 : 0
- Ball resets to the centre
- Paddles return to their starting positions
- A new game starts when the message disappears

## Definition of Done

Each story is complete when:
- Functionality works as described
- No existing features are broken
- Behaviour can be tested manually
- Code runs without errors

## Recommended Development Order

1. PONG-1.1 Create game page
2. PONG-1.2 Create play area
3. PONG-1.3 Render left paddle
4. PONG-1.4 Render right paddle
5. PONG-1.5 Render ball
6. PONG-1.6 Display score area
7. PONG-5.1 Create game loop
8. PONG-5.2 Show start message
9. PONG-5.3 Start after message
10. PONG-2.1 Move left paddle up
11. PONG-2.2 Move left paddle down
12. PONG-2.3 Move right paddle up
13. PONG-2.4 Move right paddle down
14. PONG-3.1 Start ball movement
15. PONG-3.2 Bounce off top wall
16. PONG-3.3 Bounce off bottom wall
17. PONG-3.4 Bounce off left paddle
18. PONG-3.5 Bounce off right paddle
19. PONG-4.1 Detect left side score
20. PONG-4.2 Detect right side score
21. PONG-4.3 Update score display
22. PONG-4.4 Reset ball after score
23. PONG-5.4 Detect winner at 6
24. PONG-5.5 Display winner message
25. PONG-5.6 Reset after win