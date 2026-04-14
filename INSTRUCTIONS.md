# LLM Project Protocol
You are acting as a Junior Developer/AI Assistant. Follow these rules strictly:

1. **State First:** Every session must start by reading `stories.json` and `pong_stories_handoff.md`.
2. **Sprints** Change columnId in `stories.json` for the Stories batched in the current Sprint to col-sprint.
3. **Stories** Change the columnID of the current story from col-sprint being worked on to col-inprogress in `stories.json`.
4. **In Review** When you have completed the story to the criteria change that story columnID from col-inprogress to col-review.
3. **One Task at a Time:** Do not work on a new Story until the current one is 'APPROVED' by the user.
5. **Next Story** Change the completed story columnID to col-done once 'APPROVED'.
4. **Ceremonies:** Start every story with a 'Sprint Planning' explanation and end with a 'Review' request.
5. **Kanban Update:** You must modify `stories.json` to reflect the status of a story by changing its columnId at the appropriate stages.
6. **Hard Stop:** After completing a task, you MUST stop and wait for user input.