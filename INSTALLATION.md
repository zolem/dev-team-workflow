# Dev Team Workflow Commands Installation

## One-Command Installation (Recommended)

```bash
npx dev-team-workflow
```

This automatically installs all available commands **globally** to your Claude config directory, making them available across all your projects.

## Manual Installation

1. **Clone or download** this repository
2. **Copy the entire** `.claude/commands/` folder to your project
3. **Use any command:**
   ```
   @business-analyst
   ```

## Available Commands

- **@business-analyst** - Interactive brief creation with Confluence/Jira integration

## Prerequisites

- Claude Code CLI
- Node.js (for npx installation)
- Atlassian integration (optional, for Confluence/Jira features)

## Adding New Commands

When new commands are added to this repository, simply run `npx dev-team-workflow` again to update your global installation.