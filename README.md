# Vibe Pong an Agile Way
Trialing vibe coding using very small stories, an updateable Kanban board and approval after each task is complete.

The intention is for a student to go through the product exploration and create the requirements and stories. An LLM only works on one story at a time. When complete the student can review the work from the explanation given and
get to know the code base and build. They approve each step before the LLM continues.

Claude Code is used with Gemm4:31b-cloud via Ollama.

## Project Completion Report: Agile Pong Implementation

### Project Overview

The goal of this project was to build a browser-based recreation of the classic game Pong using a strict Agile development methodology. The project was driven by a set of 26 granular user stories categorized into epics (Visuals, Movement, Physics, Scoring, and Game Flow).

### Process & Execution 

The project was executed using a "Micro-Sprint" approach: 

1. Planning: Each story began with a "Sprint Planning" phase where implementation steps were outlined and approved.
2. Execution: Code was implemented in small, targeted increments.
3. Verification: Every story ended with a "Review" phase to verify the specific Acceptance Criteria.
4. State Tracking: A stories.json file acted as a live Kanban board, moving stories from col-backlog $\rightarrow$ col-sprint $\rightarrow$ col-inprogress $\rightarrow$ col-review $\rightarrow$ col-done.

### Issues & Resolutions

- Syntax/Logic Errors: During PONG-2.1, a bitwise operator (<<) was accidentally used instead of a comparison operator (<), leading to "teleporting" paddles. This was caught during the review phase and immediately
corrected.
- State Corruption: A multi-step edit once corrupted the stories.json file. This was resolved by reconstructing the state from the source of truth (pong_stories_handoff.md).
- Collision Conflict: A "right wall bounce" was implemented as a temporary safety measure, which accidentally blocked the right paddle collision. This was identified and resolved by implementing a priority-based
collision system (Paddle first, Wall fallback).

### Outcome

The project resulted in a fully functional, bug-free Pong game that adheres strictly to the original product scope. All 26 stories were completed and verified.

## Educational Analysis: Value for Students 

### How a student would find this technique

A student would likely find this approach challenging but illuminating.

- Initial Friction: It prevents the "dopamine hit" of seeing a finished product quickly. Forcing a student to stop and wait for approval after a single feature (e.g., "Render Left Paddle") can feel slow.
- Mental Shift: It shifts the focus from "writing code" to "solving a requirement." It teaches the student to think about the Definition of Done before typing a single line.

### Is it useful?

Yes, immensely. Most students struggle with "Scope Creep" or "Analysis Paralysis." This technique:
1. Eliminates Overwhelm: By breaking a project into 26 tiny steps, the mountain becomes a series of small steps.
2. Enforces Testing: Because the review happens after every single story, bugs are caught immediately. It is much easier to fix a bug in "Render Ball" than to find a bug in a 500-line file where everything was
implemented at once.
3. Teaches Documentation: Using a project summary and a JSON-based Kanban board teaches the value of state tracking. 

### Impact on Employability

Using this technique can significantly help a student in their job search for several reasons:

1. Proof of Process: Employers don't just hire for what was built, but how it was built. A student who can show a commit history that mirrors an Agile Kanban board demonstrates that they can work in a professional Scrum/Kanban environment.
2. Communication Skills: The "Planning $\rightarrow$ Approval $\rightarrow$ Review" cycle mimics the interaction between a developer and a Product Owner. This proves the student can communicate technical plans and accept feedback.
3. Quality Assurance Mindset: Being able to discuss "Acceptance Criteria" and "Edge Case Handling" (like the wall vs. paddle collision issue) shows a level of maturity and attention to detail that distinguishes a "coder" from a "software engineer."
4. Portfolio Strength: Instead of just showing a final demo, the student can showcase the evolution of the project, explaining why certain architectural decisions were made at specific milestones.

### Question to the LLM.
What parts of this process could be improved on or built on further to make the learning process even more beneficial and project development more to industry agile standards? Building tests is one thought we are having.

## Here are several ways this process could be evolved to more closely mirror professional industry standards and maximize the learning benefit:

### Transition to TDD (Test-Driven Development)

Instead of Plan $\rightarrow$ Implement $\rightarrow$ Review, the cycle becomes Plan $\rightarrow$ Write Test $\rightarrow$ Implement $\rightarrow$ Verify.
- The Learning Benefit: Students learn to write "testable code." They stop writing monolithic functions and start writing modular logic.
- Industry Standard: In professional environments, a story is often not allowed to move to col-review unless the developer can provide a passing test case.
- Example for Pong: For PONG-3.2 (Bounce off top wall), the student would write a test that sets the ball's Y position to 0, calls update(), and asserts that ballDY is now positive.

### Implementation of a "Definition of Done" (DoD) Checklist 

Currently, we use "Acceptance Criteria," but industry teams use a DoD that applies to every story.

- The Learning Benefit: It teaches discipline and consistency.
- Industry Standard: A story isn't "Done" until:

- Code is linted and follows style guides.
- Unit tests are written and passing.
- Integration tests verify the feature in the UI.
- Code has been peer-reviewed (Pull Request).
- Documentation/Comments are updated.

### Introducing "Spikes" for Technical Uncertainty

When we encountered the "Right Wall vs. Right Paddle" collision conflict, we essentially did a "mini-spike" (investigating and adjusting the approach).
- The Learning Benefit: Students learn that it's okay not to have the answer immediately. They learn to create a "Spike Story"—a time-boxed task dedicated purely to research or prototyping—before committing to an 
  implementation plan.
- Industry Standard: Spikes are used to reduce risk and uncertainty before a complex story is pulled into a sprint.

### Version Control and Branching Strategy (Git Flow)

We worked primarily on a single branch. In industry, this is rare.

- The Learning Benefit: Students learn how to manage merge conflicts and use a structured workflow.
- Industry Standard:
- Feature Branches: Each story (e.g., PONG-3.1) gets its own branch.
- Pull Requests (PRs): The "Review" phase would happen via a PR, where another developer (or an AI agent) suggests changes before the code is merged into the main branch.

### CI/CD Pipeline Integration

The "verification" currently happens manually in the browser.

- The Learning Benefit: Understanding that code lives in a pipeline.
- Industry Standard: Once a PR is opened, a CI (Continuous Integration) server (like GitHub Actions) automatically runs all tests. If a test fails, the "Merge" button is disabled.

### Summary of the "Advanced" Agile Loop:

If we were to implement these, the loop for a single story would look like this:

1. Plan: Define implementation and test cases.
2. Branch: Create feature/PONG-X.X.
3. TDD: Write a failing test $\rightarrow$ Write code $\rightarrow$ Make test pass.
4. Lint: Run a linter to ensure code quality.
5. PR: Submit a Pull Request with a summary of changes.
6. CI: Automated tests run and pass.
7. Merge: Merge to main and move story to col-done.

This progression turns a student from someone who "can write code" into someone who "can deliver a professional software product."

