# Dev Team Workflow (DTW)

Claude Code commands for business analysis and workflow automation.

## 🚀 Quick Install

```bash
npx dev-team-workflow install
```

## 📋 Available Commands

### /dtw business-analyst
Interactive guided session for creating project and feature briefs with systematic brainstorming.

**Features:**
- Project brief creation
- Feature enhancement analysis  
- Template-driven questioning
- Confluence/Jira integration
- Systematic brainstorming techniques

## 🗂️ Project Structure

```
.claude/
├── commands/
│   └── dtw/
│       └── business-analyst.md     # Business analyst command
└── resources/
    └── dtw/
        └── business-analyst/
            ├── brainstorming-techniques.md
            └── templates/
                ├── project-brief-template.md
                └── feature-brief-template.md
```

## 📦 Installation

The installer creates a clean, namespaced installation in your global Claude config (~/.claude):
- Creates the `/dtw business-analyst` slash command in the commands directory
- Keeps all support files organized in the resources directory
- Avoids conflicts with other Claude commands
- Provides clean uninstall functionality

```bash
# Install
npx dev-team-workflow install

# Uninstall  
npx dev-team-workflow uninstall

# Help
npx dev-team-workflow help
```

## 🔧 Manual Installation

If the automated installer doesn't work, you can manually copy the files:

1. Copy `.claude/commands/dtw/` directory to your `~/.claude/commands/` directory
2. Copy `.claude/resources/dtw/` directory to your `~/.claude/resources/` directory

## 🎯 Usage

Once installed, use:

```
/dtw business-analyst
```

This will start an interactive session that guides you through creating comprehensive project or feature briefs.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes  
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - see LICENSE file for details.