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

